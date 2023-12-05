let myGraph = document.getElementById('myGraph');
let myGraph2 = document.getElementById('myGraph2');
let myGraph3 = document.getElementById('myGraph3');
let myGraph4 = document.getElementById('myGraph4');
let myGraph5 = document.getElementById('myGraph5');
let myGraph6 = document.getElementById('myGraph6');
let myGraph7 = document.getElementById('myGraph7');
let myGraph8 = document.getElementById('myGraph8');
let myGraph9 = document.getElementById('myGraph9');

//
let trace1 = {};
trace1.mode = "lines+markers";
trace1.type = "scatter";
trace1.name = "NTUST";
trace1.x = [];
trace1.y = [];
trace1.text =[];

for (let i=0 ; i < set1.length ; i++){
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

console.log(trace1.x);
console.log(trace1.y);
console.log(trace1.text);

//
let trace2 = {};
trace2.mode = "lines+markers";
trace2.type = "scatter";
trace2.name = "NTU";
trace2.x = [];
trace2.y = [];
trace2.text =[];

for (let i=0 ; i < set2.length ; i++){
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

console.log(trace2.x);
console.log(trace2.y);
console.log(trace2.text);



//
let trace3 = {};
trace3.mode = "lines+markers";
trace3.type = "scatter";
trace3.name = "NTNU";
trace3.x = [];
trace3.y = [];
trace3.text =[];

for (let i=0 ; i < set3.length ; i++){
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

console.log(trace3.x);
console.log(trace3.y);
console.log(trace3.text);


let data = [];
data.push (trace1);
data.push (trace2);
data.push (trace3);


let data2_trace1= {};
data2_trace1.type = "pie";

data2_trace1.labels = [];
data2_trace1.values = [];

data2_trace1.domain = {
    row:0,
    column:0
};

for(let x=0; x<evaluation_ratio_1.length; x++){
    data2_trace1.labels[x] =evaluation_ratio_1[x]['name'];
    data2_trace1.values[x] =evaluation_ratio_1[x]['count'];
}


let data2 = [];
data2.push (data2_trace1);



region_data.sort((a, b) => b.count - a.count);

let data3_trace1 = {};
data3_trace1.type = "bar";
data3_trace1.name = "Percentage";

data3_trace1.x = [];
data3_trace1.y = [];

for (let i = 0; i < region_data.length; i++) {
    data3_trace1.x.push(region_data[i].name);
    data3_trace1.y.push(region_data[i].count);
}

data3_trace1.text = data3_trace1.y.map(String);
data3_trace1.textfont = {
    size: 10,
    color: 'white'
};


let data3 = [];
data3.push (data3_trace1);


//

let data4_trace1 = {};
data4_trace1.type = "bar";
data4_trace1.name = "Percentage";

data4_trace1.x = [];
data4_trace1.y = [];

for (let i = 0; i < data_ranges.length; i++) {
    data4_trace1.x.push(data_ranges[i].name);
    data4_trace1.y.push(data_ranges[i].count);
}

data4_trace1.text = data4_trace1.y.map(String);
data4_trace1.textfont = {
    size: 10,
    color: 'white'
};


let data4 = [];
data4.push (data4_trace1);



//

let data5_trace1 = {};
data5_trace1.type = "scatter";
data5_trace1.mode = "markers";
data5_trace1.name = "Funding vs Rank";

data5_trace1.x = [];
data5_trace1.y = [];
data5_trace1.text = [];

for (let i = 0; i < universityData.length; i++) {
    data5_trace1.x.push(universityData[i].Rank);
    data5_trace1.y.push(universityData[i].Funds);
    data5_trace1.text.push(universityData[i].Institution);
}

data5_trace1.marker = {
    size: 10,
    color: 'blue'
};

let data5 = [];
data5.push(data5_trace1);


//

let data6_trace1 = {};
data6_trace1.type = "scatter";
data6_trace1.mode = "markers";
data6_trace1.name = "Amount of Books vs Rank";

data6_trace1.x = [];
data6_trace1.y = [];
data6_trace1.text = [];

for (let i = 0; i < universityData_library.length; i++) {
    data6_trace1.x.push(universityData_library[i].Rank);
    data6_trace1.y.push(universityData_library[i].Sum);
    data6_trace1.text.push(universityData_library[i].Institution);
}

data6_trace1.marker = {
    size: 10,
    color: 'blue'
};

let data6 = [];
data6.push(data6_trace1);



//

let data7_trace1 = {};
data7_trace1.type = "scatter";
data7_trace1.mode = "markers";
data7_trace1.name = "Amount of Books vs Rank";

data7_trace1.x = [];
data7_trace1.y = [];
data7_trace1.text = [];

for (let i = 0; i < universityData_seats.length; i++) {
    data7_trace1.x.push(universityData_seats[i].Rank);
    data7_trace1.y.push(universityData_seats[i].Seats);
    data7_trace1.text.push(universityData_seats[i].Institution);
}

data7_trace1.marker = {
    size: 10,
    color: 'blue'
};

let data7 = [];
data7.push(data7_trace1);


//

let data8_trace1 = {};
data8_trace1.type = "scatter";
data8_trace1.mode = "markers";
data8_trace1.name = "Amount of Books vs Rank";

data8_trace1.x = [];
data8_trace1.y = [];
data8_trace1.text = [];

for (let i = 0; i < universityData_circulation.length; i++) {
    data8_trace1.x.push(universityData_circulation[i].Rank);
    data8_trace1.y.push(universityData_circulation[i].Circulation);
    data8_trace1.text.push(universityData_circulation[i].Institution);
}

data8_trace1.marker = {
    size: 10,
    color: 'blue'
};

let data8 = [];
data8.push(data8_trace1);


//

let data9_trace1 = {};
data9_trace1.type = "scatter";
data9_trace1.mode = "markers";
data9_trace1.name = "Amount of Books Per Student vs Rank";

data9_trace1.x = [];
data9_trace1.y = [];
data9_trace1.text = [];

for (let i = 0; i < universityData_circulation_population.length; i++) {
    data9_trace1.x.push(universityData_circulation_population[i].Rank);
    data9_trace1.y.push(universityData_circulation_population[i].BooksPerStudent);
    data9_trace1.text.push(universityData_circulation_population[i].Institution);
}

data9_trace1.marker = {
    size: 10,
    color: 'blue'
};

let data9 = [];
data9.push(data9_trace1);


////

let layout = {
    margin:{
        t:60
    },

    title: 'NTU, NTNU, NTUST Breakdown via year: RESEARCH QUALITY'
};

let layout2 = {
    margin:{
        t:60
    },

    title: 'Proportion of Top 100 Schools by Region in 2022'
};

let layout3 = {
    margin:{
        t:60
    },

    title: 'In 2022, What Percentage of Universities in Each Region Made it to the Top 100?'
};

let layout4 = {
    margin:{
        t:60
    },

    title: 'Number of Universities in Taiwan Participating in QS Rankings within Each 200 Rank Interval'
};

let layout5 = {
    margin:{
        t:60
    },

    title: 'Relationship between Rankings and Funding for Universities in Taiwan in QS Rankings'
};

let layout6 = {
    margin:{
        t:60
    },

    title: 'Relationship between Rankings and Total Library Holdings for Universities in Taiwan in QS Rankings'
};


let layout7 = {
    margin:{
        t:60
    },

    title: 'Relationship between Rankings and Library Seating Capacity for Universities in Taiwan in QS Rankings'
};

let layout8 = {
    margin:{
        t:60
    },

    title: 'Relationship between Rankings and Annual Library Circulation for Universities in Taiwan in QS Rankings'
};

let layout9 = {
    margin:{
        t:60
    },

    title: 'Relationship between Rankings and Annual Library Circulation for Universities in Taiwan in QS Rankings (Considering Student Population)'
};

Plotly.newPlot(myGraph, data, layout);
Plotly.newPlot(myGraph2, data2, layout2);
Plotly.newPlot(myGraph3, data3, layout3);
Plotly.newPlot(myGraph4, data4, layout4);
Plotly.newPlot(myGraph5, data5, layout5);
Plotly.newPlot(myGraph6, data6, layout6);
Plotly.newPlot(myGraph7, data7, layout7);
Plotly.newPlot(myGraph8, data8, layout8);
Plotly.newPlot(myGraph9, data9, layout9);
