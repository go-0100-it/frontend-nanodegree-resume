/*
This is empty on purpose! Your code to build the resume will go here.
 */
var isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

var isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

var bio = {
    "name": "Dave Waters",
    "role": "Android and Web Application Developer",
    "contacts": {
        "mobile": "519-771-3043",
        "email": "dave.waters89@gmail.com",
        "github": "https://github.com/go-0100-it",
        "location": "Brantford, Ontario, Canada"
    },
    "welcomeMessage": "Welcome to my on-line resume!",
    "skills": ["HTML", "CSS", "JavaScript", "JSON", "Python", "Java", "XML"],
    "biopic": "images/bio_image.jpg",
    "display": function() {
        prependHTML(bio, HTMLprependHeader, $("#header"));
	appendHTML(bio, HTMLappendHeader, $("#header"));
    }
}

var education = {
    "schools": [{
        "name": "Mohawk College",
        "location": "Hamilton, Ontario CAN",
        "degree": "Industrial Maintenance Mechanic",
        "majors": ["strings"],
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }, {
        "name": "Mohawk College",
        "location": "Hamilton, Ontario CAN",
        "degree": "PLC Programming",
        "majors": ["strings"],
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }, {
        "name": "Granton Institute of Technology",
        "location": "Toronto, Ontario CAN",
        "degree": "Industrial Electricity and Electronics",
        "majors": ["strings"],
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }],
    "onlineCourses": [{
        "title": "Android Basics NanoDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
    }, {
        "title": "JavaScript (Understanding the Wierd Parts)",
        "school": "Udemy - Anthony Alicea",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udemy.com/understand-javascript/learn/v4/overview"
    }, {
        "title": "Intro to Programming NanaDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Front-End Web Developer NanoDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }],
    "display": function() {
	appendHTML(education, HTMLeducation, $("#education"));
     }
}

var work = {
    "jobs": [{
        "employer": "Toyota Motor Manufacturing Canada",
        "title": "Multi-skilled Team Leader",
        "location": "Cambridge, Ontario CAN",
        "dates": "2008 - Present", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Oakrun Bakery",
        "title": "Millwright",
        "location": "string",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Wrigley Canada",
        "title": "Tab Wrapping Mechanic",
        "location": "string",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Patheon Pharmacutical",
        "title": "Packaging Group Leader",
        "location": "string",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Speciality Coatings Ltd.",
        "title": "Chemical Formulation Specialist",
        "location": "string",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }],
    "display": function() {
	appendHTML(work, HTMLwork, $("#workExperience"));
    }
}

var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "March 2016", //(works with a hyphen between them)  
        "description": "This was my favorite project.",
        "images": ["http://lorempixel.com/g/204/100", "http://lorempixel.com/g/205/101", "http://lorempixel.com/g/206/102", "http://lorempixel.com/g/207/103"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["http://lorempixel.com/g/104/100", "http://lorempixel.com/g/101/100", "http://lorempixel.com/g/102/100", "http://lorempixel.com/g/103/100"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["http://lorempixel.com/g/200/100", "http://lorempixel.com/g/200/101", "http://lorempixel.com/g/200/102", "http://lorempixel.com/g/200/103"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100", "http://lorempixel.com/g/100/100"] // urls
    }],
    "display": function() {
	appendHTML(projects, HTMLprojects, $("#projects"));
    }
}


function prependHTML(contentData, htmlStrings, pendElement) {

    var arr = Object.keys(htmlStrings);
    for (var i = arr.length; i > -1; i--) {

        var key = arr[i];
        if (contentData.hasOwnProperty(key)) {
            pendElement.prepend(htmlStrings[key].replace("%data%", contentData[key]));
        } else {
            pendElement.prepend(htmlStrings[key]);
        }
    }
}

function appendHTML(contentData, htmlStrings, pendElement) {

    var element;
    for (var i = 0; i < Object.keys(htmlStrings).length; i++) {

        var key = Object.keys(htmlStrings)[i];
        if (contentData.hasOwnProperty(key)) {

            if (isArray(htmlStrings[key]) || isArray(contentData[key])) {
		element = htmlStrings === HTMLappendHeader ? $("#skills") : pendElement;
                arrayLoop(contentData[key], htmlStrings[key], element);
            } else if (isObject(htmlStrings[key]) || isObject(contentData[key])) {
		element = htmlStrings == HTMLappendHeader ? $("#topContacts") : pendElement;
                appendHTML(contentData[key], htmlStrings[key], element);
            } else {
                pendElement.append(htmlStrings[key].replace("%data%", contentData[key]));
            }

        } else {

            if(key === "splitLink"){
		splitLinkLoop(contentData, htmlStrings[key], pendElement);
		i++;
	    }else{
		pendElement.append(htmlStrings[key]);
	    }
        }
    }
}

function arrayLoop(contentData, htmlStrings, pendElement) {

    for (var i = 0; i < contentData.length; i++) {

        if (isObject(htmlStrings[i]) || isObject(contentData[i])) {
            appendHTML(contentData[i], htmlStrings[0], pendElement);
        } else {
            pendElement.append(htmlStrings.replace("%data%", contentData[i]));
        }
    }
}

function splitLinkLoop(contentData, htmlStrings, pendElement) {
    
    var arr = [];
    for (var i = 0; i < Object.keys(htmlStrings).length; i++) {
	var key = Object.keys(htmlStrings)[i];
	arr.push(htmlStrings[key].replace("%data%", contentData[key]));
    }
    pendElement.append(arr.join(""));
}

bio.display();
work.display();
projects.display();
education.display();

