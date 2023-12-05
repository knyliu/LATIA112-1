let set1 = [
    [2016, 39.1, "2016"],
    [2017, 38.5, "2017"],
    [2018, 39.9, "2018"],
    [2019, 37.6, "2019"],
    [2020, 39.5, "2020"],
    [2021, 38.6, "2021"],
    [2022, 36.9, "2022"],
    [2023, 41.6, "2023"],
    [2024, 63.8, "2024"]
];

let set2 = [
    [2016, 47.3, "2016"],
    [2017, 54.5, "2017"],
    [2018, 53.4, "2018"],
    [2019, 59.4, "2019"],
    [2020, 64, "2020"],
    [2021, 66.9, "2021"],
    [2022, 64.8, "2022"],
    [2023, 60.1, "2023"],
    [2024, 70.8, "2024"]
];

let set3 = [
    [2016, 12, "2016"],
    [2017, 17.6, "2017"],
    [2018, 25.3, "2018"],
    [2019, 23, "2019"],
    [2020, 22.8, "2020"],
    [2021, 30.8, "2021"],
    [2022, 29.3, "2022"],
    [2023, 28.8, "2023"],
    [2024, 51.4, "2024"]
];

// data from https://www.timeshighereducation.com/world-university-rankings/national-taiwan-normal-university


//{'Europe': 468, 'Asia': 399, 'North America': 205, 'Latin America': 151, 'Oceania': 46, 'Africa': 31}
let evaluation_ratio_1 = [
    {
        "name" : "Europe",
        "count": 35
    },
    {
        "name" : "Asia",
        "count": 26
    },
    {
        "name" : "North America",
        "count": 30
    },
    {
        "name": "Latin America",
        "count": 1
    },
    {
        "name": "Oceania",
        "count": 8
    },
    {
        "name": "Africa",
        "count": 0
    }
]

let animals_Taipei_Zoo = [
    {
        "name": "lion",
        "count": 20
    },
    {
        "name": "tiger",
        "count": 14
    }, 
    {
        "name": "monkey",
        "count": 23
    }
];

let animals_Taoyuan_Zoo = [
    {
        "name": "lion",
        "count": 12
    },
    {
        "name": "tiger",
        "count": 18
    }, 
    {
        "name": "monkey",
        "count": 29
    }
];

let region_data = [
    {"name": "Europe", "count": 7.478632478632479},
    {"name": "Asia", "count": 6.516290726817042},
    {"name": "North America", "count": 14.634146341463413},
    {"name": "Latin America", "count": 0.6622516556291391},
    {"name": "Oceania", "count": 17.391304347826086}
];


let data_ranges = [
    {"name": "1-200", "count": 2},
    {"name": "201-400", "count": 5},
    {"name": "401-600", "count": 4},
    {"name": "601-800", "count": 2},
    {"name": "801-1000", "count": 2},
    {"name": "1001-1200", "count": 1},
    {"name": "1201-1400", "count": 8},
    {"name": "1401-1600", "count": 1},
    {"name": "1601-1800", "count": 0},
    {"name": "1801-2000", "count": 0},
    {"name": "2001-2200", "count": 0}
];

let universityData = [
    { "Rank": 623, "Funds": 332581716, "Institution": "National Chengchi University" },
    { "Rank": 177, "Funds": 1227485103, "Institution": "National Tsing Hua University" },
    { "Rank": 77, "Funds": 2466494187, "Institution": "National Taiwan University" },
    { "Rank": 332, "Funds": 324963949, "Institution": "National Taiwan Normal University" },
    { "Rank": 225, "Funds": 1421845095, "Institution": "National Cheng Kung University" },
    { "Rank": 674, "Funds": 450197237, "Institution": "National Chung Hsing University" },
    { "Rank": 202, "Funds": 1321464208, "Institution": "National Yang Ming Chiao Tung University" },
    { "Rank": 585, "Funds": 426576212, "Institution": "National Central University" },
    { "Rank": 428, "Funds": 405826790, "Institution": "National Sun Yat-sen University" },
    { "Rank": 1077, "Funds": 136547127, "Institution": "National Taiwan Ocean University" },
    { "Rank": 869, "Funds": 138023217, "Institution": "National Chung Cheng University" },
    { "Rank": 1256, "Funds": 98142220, "Institution": "National Taipei University" },
    { "Rank": 1254, "Funds": 77756120, "Institution": "National Dong Hwa University" },
    { "Rank": 327, "Funds": 424512000, "Institution": "National Taiwan University of Science and Technology" },
    { "Rank": 436, "Funds": 337399000, "Institution": "National Taipei University of Technology" },
    { "Rank": 1295, "Funds": 118910367, "Institution": "Tunghai University" },
    { "Rank": 1226, "Funds": 107901179, "Institution": "Fu Jen Catholic University" },
    { "Rank": 1279, "Funds": 97295635, "Institution": "Soochow University" },
    { "Rank": 1220, "Funds": 155026796, "Institution": "Chung Yuan Christian University" },
    { "Rank": 1224, "Funds": 148700886, "Institution": "Feng Chia University" },
    { "Rank": 475, "Funds": 112670208, "Institution": "Chang Gung University" },
    { "Rank": 1401, "Funds": 107201017, "Institution": "Yuan Ze University" },
    { "Rank": 386, "Funds": 276161839, "Institution": "Taipei Medical University" },
    { "Rank": 820, "Funds": 51477733, "Institution": "Chang Jung Christian University" }
];


let universityData_library = [
    { "Institution": "National Chengchi University", "Sum": 2998732, "Rank": 623 },
    { "Institution": "National Tsing Hua University", "Sum": 6545360, "Rank": 177 },
    { "Institution": "National Taiwan University", "Sum": 8089073, "Rank": 77 },
    { "Institution": "National Taiwan Normal University", "Sum": 3629801, "Rank": 332 },
    { "Institution": "National Cheng Kung University", "Sum": 3002959, "Rank": 225 },
    { "Institution": "National Chung Hsing University", "Sum": 2700803, "Rank": 674 },
    { "Institution": "National Yang Ming Chiao Tung University", "Sum": 2718425, "Rank": 202 },
    { "Institution": "National Central University", "Sum": 4033472, "Rank": 585 },
    { "Institution": "National Sun Yat-sen University", "Sum": 1650726, "Rank": 428 },
    { "Institution": "National Taiwan Ocean University", "Sum": 952579, "Rank": 1077 },
    { "Institution": "National Chung Cheng University", "Sum": 1705497, "Rank": 869 },
    { "Institution": "National Taipei University", "Sum": 1834357, "Rank": 1256 },
    { "Institution": "National Dong Hwa University", "Sum": 2578516, "Rank": 1254 },
    { "Institution": "National Taiwan University of Science and Technology", "Sum": 1379296, "Rank": 327 },
    { "Institution": "National Taipei University of Technology", "Sum": 1380317, "Rank": 436 },
    { "Institution": "Tunghai University", "Sum": 2289601, "Rank": 1295 },
    { "Institution": "Fu Jen Catholic University", "Sum": 4285164, "Rank": 1226 },
    { "Institution": "Soochow University", "Sum": 2402633, "Rank": 1279 },
    { "Institution": "Chung Yuan Christian University", "Sum": 3118452, "Rank": 1220 },
    { "Institution": "Feng Chia University", "Sum": 2463625, "Rank": 1224 },
    { "Institution": "Chang Gung University", "Sum": 892937, "Rank": 475 },
    { "Institution": "Yuan Ze University", "Sum": 1016539, "Rank": 1401 },
    { "Institution": "Taipei Medical University", "Sum": 286373, "Rank": 386 },
    { "Institution": "Chang Jung Christian University", "Sum": 780363, "Rank": 820 }
];

let universityData_seats = [
    { "Institution": "National Chengchi University", "Seats": 5055, "Rank": 623 },
    { "Institution": "National Tsing Hua University", "Seats": 3292, "Rank": 177 },
    { "Institution": "National Taiwan University", "Seats": 3738, "Rank": 77 },
    { "Institution": "National Taiwan Normal University", "Seats": 1356, "Rank": 332 },
    { "Institution": "National Cheng Kung University", "Seats": 2438, "Rank": 225 },
    { "Institution": "National Chung Hsing University", "Seats": 2047, "Rank": 674 },
    { "Institution": "National Yang Ming Chiao Tung University", "Seats": 2241, "Rank": 202 },
    { "Institution": "National Central University", "Seats": 1485, "Rank": 585 },
    { "Institution": "National Sun Yat-sen University", "Seats": 1057, "Rank": 428 },
    { "Institution": "National Taiwan Ocean University", "Seats": 533, "Rank": 1077 },
    { "Institution": "National Chung Cheng University", "Seats": 1756, "Rank": 869 },
    { "Institution": "National Taipei University", "Seats": 964, "Rank": 1256 },
    { "Institution": "National Dong Hwa University", "Seats": 1053, "Rank": 1254 },
    { "Institution": "National Taiwan University of Science and Technology", "Seats": 639, "Rank": 327 },
    { "Institution": "National Taipei University of Technology", "Seats": 990, "Rank": 436 },
    { "Institution": "Tunghai University", "Seats": 1323, "Rank": 1295 },
    { "Institution": "Fu Jen Catholic University", "Seats": 2224, "Rank": 1226 },
    { "Institution": "Soochow University", "Seats": 2229, "Rank": 1279 },
    { "Institution": "Chung Yuan Christian University", "Seats": 1324, "Rank": 1220 },
    { "Institution": "Feng Chia University", "Seats": 1159, "Rank": 1224 },
    { "Institution": "Chang Gung University", "Seats": 1355, "Rank": 475 },
    { "Institution": "Yuan Ze University", "Seats": 1000, "Rank": 1401 },
    { "Institution": "Taipei Medical University", "Seats": 654, "Rank": 386 },
    { "Institution": "Chang Jung Christian University", "Seats": 760, "Rank": 820 }
];

let universityData_circulation = [
    { "Institution": "National Chengchi University", "Circulation": 162236, "Rank": 623 },
    { "Institution": "National Tsing Hua University", "Circulation": 96997, "Rank": 177 },
    { "Institution": "National Taiwan University", "Circulation": 136754, "Rank": 77 },
    { "Institution": "National Taiwan Normal University", "Circulation": 54828, "Rank": 332 },
    { "Institution": "National Cheng Kung University", "Circulation": 45854, "Rank": 225 },
    { "Institution": "National Chung Hsing University", "Circulation": 55748, "Rank": 674 },
    { "Institution": "National Yang Ming Chiao Tung University", "Circulation": 59302, "Rank": 202 },
    { "Institution": "National Central University", "Circulation": 35498, "Rank": 585 },
    { "Institution": "National Sun Yat-sen University", "Circulation": 21697, "Rank": 428 },
    { "Institution": "National Taiwan Ocean University", "Circulation": 11485, "Rank": 1077 },
    { "Institution": "National Chung Cheng University", "Circulation": 30473, "Rank": 869 },
    { "Institution": "National Taipei University", "Circulation": 40216, "Rank": 1256 },
    { "Institution": "National Dong Hwa University", "Circulation": 32570, "Rank": 1254 },
    { "Institution": "National Taiwan University of Science and Technology", "Circulation": 58284, "Rank": 327 },
    { "Institution": "National Taipei University of Technology", "Circulation": 24807, "Rank": 436 },
    { "Institution": "Tunghai University", "Circulation": 33433, "Rank": 1295 },
    { "Institution": "Fu Jen Catholic University", "Circulation": 55249, "Rank": 1226 },
    { "Institution": "Soochow University", "Circulation": 51256, "Rank": 1279 },
    { "Institution": "Chung Yuan Christian University", "Circulation": 46310, "Rank": 1220 },
    { "Institution": "Feng Chia University", "Circulation": 41500, "Rank": 1224 },
    { "Institution": "Chang Gung University", "Circulation": 26118, "Rank": 475 },
    { "Institution": "Yuan Ze University", "Circulation": 19918, "Rank": 1401 },
    { "Institution": "Taipei Medical University", "Circulation": 27900, "Rank": 386 },
    { "Institution": "Chang Jung Christian University", "Circulation": 13793, "Rank": 820 }
];

let universityData_circulation_population = [
    { "Institution": "National Chengchi University", "Circulation": 162236, "TotalStudents": 16110, "Rank": 623, "BooksPerStudent": 10.070515 },
    { "Institution": "National Tsing Hua University", "Circulation": 96997, "TotalStudents": 17488, "Rank": 177, "BooksPerStudent": 5.546489 },
    { "Institution": "National Taiwan University", "Circulation": 136754, "TotalStudents": 32923, "Rank": 77, "BooksPerStudent": 4.153753 },
    { "Institution": "National Taiwan Normal University", "Circulation": 54828, "TotalStudents": 16164, "Rank": 332, "BooksPerStudent": 3.391982 },
    { "Institution": "National Cheng Kung University", "Circulation": 45854, "TotalStudents": 22406, "Rank": 225, "BooksPerStudent": 2.046505 },
    { "Institution": "National Chung Hsing University", "Circulation": 55748, "TotalStudents": 15154, "Rank": 674, "BooksPerStudent": 3.678765 },
    { "Institution": "National Yang Ming Chiao Tung University", "Circulation": 59302, "TotalStudents": 20412, "Rank": 202, "BooksPerStudent": 2.905252 },
    { "Institution": "National Central University", "Circulation": 35498, "TotalStudents": 12128, "Rank": 585, "BooksPerStudent": 2.926946 },
    { "Institution": "National Sun Yat-sen University", "Circulation": 21697, "TotalStudents": 9897, "Rank": 428, "BooksPerStudent": 2.19228 },
    { "Institution": "National Taiwan Ocean University", "Circulation": 11485, "TotalStudents": 9068, "Rank": 1077, "BooksPerStudent": 1.266542 },
    { "Institution": "National Chung Cheng University", "Circulation": 30473, "TotalStudents": 11212, "Rank": 869, "BooksPerStudent": 2.717892 },
    { "Institution": "National Taipei University", "Circulation": 40216, "TotalStudents": 10236, "Rank": 1256, "BooksPerStudent": 3.928878 },
    { "Institution": "National Dong Hwa University", "Circulation": 32570, "TotalStudents": 10251, "Rank": 1254, "BooksPerStudent": 3.177251 },
    { "Institution": "National Taiwan University of Science and Technology", "Circulation": 58284, "TotalStudents": 11229, "Rank": 327, "BooksPerStudent": 5.190489 },
    { "Institution": "National Taipei University of Technology", "Circulation": 24807, "TotalStudents": 13621, "Rank": 436, "BooksPerStudent": 1.821232 },
    { "Institution": "Tunghai University", "Circulation": 33433, "TotalStudents": 15867, "Rank": 1295, "BooksPerStudent": 2.107078 },
    { "Institution": "Fu Jen Catholic University", "Circulation": 55249, "TotalStudents": 25760, "Rank": 1226, "BooksPerStudent": 2.144759 },
    { "Institution": "Soochow University", "Circulation": 51256, "TotalStudents": 15458, "Rank": 1279, "BooksPerStudent": 3.315824 },
    { "Institution": "Chung Yuan Christian University", "Circulation": 46310, "TotalStudents": 16529, "Rank": 1220, "BooksPerStudent": 2.801742 },
    { "Institution": "Feng Chia University", "Circulation": 41500, "TotalStudents": 21393, "Rank": 1224, "BooksPerStudent": 1.939887 },
    { "Institution": "Chang Gung University", "Circulation": 26118, "TotalStudents": 6930, "Rank": 475, "BooksPerStudent": 3.768831 },
    { "Institution": "Yuan Ze University", "Circulation": 19918, "TotalStudents": 8799, "Rank": 1401, "BooksPerStudent": 2.263666 },
    { "Institution": "Taipei Medical University", "Circulation": 27900, "TotalStudents": 6137, "Rank": 386, "BooksPerStudent": 4.546195 },
    { "Institution": "Chang Jung Christian University", "Circulation": 13793, "TotalStudents": 7849, "Rank": 820, "BooksPerStudent": 1.757294 }
];
