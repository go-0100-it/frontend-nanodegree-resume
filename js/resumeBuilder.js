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
        createHTML(bio, HTMLheader);
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
    "display": function() {} // taking no parameters
}

var work = {
    "jobs": [{
        "employer": "Toyota Motor Manufacturing Canada",
        "title": "Multi-skilled Team Leader",
        "location": "string",
        "dates": "string", //(Can be 'in progress')  
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
    "display": function() {} //taking no parameters
}

var projects = {
    "projects": [{
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["strings"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["strings"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["strings"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["strings"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["strings"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["strings"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["strings"] // urls
    }],
    "display": function() {} // taking no parameters
}


function prependHTML(contentData, htmlStrings, pendElement) {

    var arr = Object.keys(htmlStrings);

    for (var i = arr.length; i > -1; i--) {

        var key = arr[i];

        if (contentData.hasOwnProperty(key)) {

		var newHTMLString = htmlStrings[key].replace("%data%", contentData[key]);
		pendElement.prepend(newHTMLString);

        }else{
		pendElement.prepend(htmlStrings[key]);
	}
    }
}

function appendHTML(contentData, htmlStrings, pendElement) {

    for (var i = 0; i < Object.keys(htmlStrings).length; i++) {

        var key = Object.keys(htmlStrings)[i];

        if (contentData.hasOwnProperty(key)) {

            if (isArray(htmlStrings[key]) || isArray(contentData[key])) {
		
                appendArrayHTML(contentData[key], htmlStrings[key], $("#skills"));

            } else if (isObject(htmlStrings[key]) || isObject(contentData[key])) {

                if (key === "splitLink") {
			

		}else{

		    appendHTML(contentData[key], htmlStrings[key], $("#topContacts"));
		}

            } else {

		pendElement.append(htmlStrings[key].replace("%data%", contentData[key]));
            }
        }else{
		pendElement.append(htmlStrings[key]);
	}
    }
}

function appendArrayHTML(contentData, htmlString, pendElement){

    for (var i = 0; i < contentData.length; i++) {

	pendElement.append(htmlString.replace("%data%", contentData[i]));

    }
}

prependHTML(bio, HTMLprependHeader, $("#header"));
appendHTML(bio, HTMLappendHeader, $("#header"));
