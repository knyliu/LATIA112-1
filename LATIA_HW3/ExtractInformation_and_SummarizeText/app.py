import sys
import configparser
import os
from flask import Flask, request, abort
from linebot.v3 import WebhookHandler
from linebot.v3.exceptions import InvalidSignatureError
from linebot.v3.webhooks import MessageEvent, TextMessageContent
from linebot.v3.messaging import Configuration, ApiClient, MessagingApi, ReplyMessageRequest, TextMessage
from azure.core.credentials import AzureKeyCredential
from azure.ai.textanalytics import TextAnalyticsClient, ExtractiveSummaryAction

# Config Parser
config = configparser.ConfigParser()
config.read('config.ini')

# Azure credentials
key = os.environ.get('LANGUAGE_KEY') or config['AzureLanguage']['API_KEY']
endpoint = os.environ.get('LANGUAGE_ENDPOINT') or config['AzureLanguage']['END_POINT']
credential = AzureKeyCredential(key)

# Authenticate the Azure Text Analytics client
def authenticate_client():
    ta_credential = AzureKeyCredential(key)
    text_analytics_client = TextAnalyticsClient(
            endpoint=endpoint, 
            credential=ta_credential)
    return text_analytics_client

# Flask app setup
app = Flask(__name__)

# LINE config
channel_access_token = config['Line']['CHANNEL_ACCESS_TOKEN']
channel_secret = config['Line']['CHANNEL_SECRET']
if channel_secret is None:
    print('Specify LINE_CHANNEL_SECRET as environment variable.')
    sys.exit(1)
if channel_access_token is None:
    print('Specify LINE_CHANNEL_ACCESS_TOKEN as environment variable.')
    sys.exit(1)

handler = WebhookHandler(channel_secret)
configuration = Configuration(access_token=channel_access_token)

@app.route("/callback", methods=['POST'])
def callback():
    signature = request.headers['X-Line-Signature']
    body = request.get_data(as_text=True)
    app.logger.info("Request body: " + body)

    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        abort(400)
    return 'OK'

def azure_extract_information(user_input):
    client = authenticate_client()
    documents = [user_input]
    entity_response = client.recognize_entities(documents, language="zh-Hant")
    entity_docs = [doc for doc in entity_response if not doc.is_error]

    entity_info = ""
    for doc in entity_docs:
        for entity in doc.entities:
            entity_info += f"{entity.text} ({entity.category}, Confidence: {entity.confidence_score:.2f})\n"

    return entity_info

def azure_extractive_summarization(user_input):
    client = authenticate_client()
    document = [user_input]

    poller = client.begin_analyze_actions(
        document,
        actions=[
            ExtractiveSummaryAction(max_sentence_count=4)
        ],
    )
    document_results = poller.result()
    summary_text = ""
    for result in document_results:
        extract_summary_result = result[0]  # first document, first result
        if extract_summary_result.is_error:
            summary_text += "Error in summarization: {} - {}\n".format(
                extract_summary_result.code, extract_summary_result.message
            )
        else:
            summary_text += " ".join([sentence.text for sentence in extract_summary_result.sentences])

    return summary_text

@handler.add(MessageEvent, message=TextMessageContent)
def message_text(event):
    entity_info = azure_extract_information(event.message.text)
    summary_info = azure_extractive_summarization(event.message.text)

    reply_text = f"Entity Extraction:\n{entity_info}\n\nText Summary:\n{summary_info}"

    with ApiClient(configuration) as api_client:
        line_bot_api = MessagingApi(api_client)
        line_bot_api.reply_message_with_http_info(
            ReplyMessageRequest(
                reply_token=event.reply_token,
                messages=[TextMessage(text=reply_text)]
            )
        )

if __name__ == "__main__":
    app.run()
