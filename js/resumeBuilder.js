// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

var myEl2height = $("#header").height();
var elMarg = ($(window).height() - myEl2height) / 6;
var myEl = $("#header-container");
myEl.height($(window).height());
myEl.css('margin-top', elMarg + 'px');

// A function to check if an Object's property value or an Array's element value is an Array.
var isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

// A function to check if an Object's property value or an Array's element value is an Object.
var isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

// An Object literal defining biographical details of the person
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
        prependHTML(this, HTMLprependHeader, $("#header"));
        appendHTML(this, HTMLappendHeader, $("#header"));
    }
}

// An Object literal defining the person's education.
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
        appendHTML(this, HTMLeducation, $("#education"));
    }
}

// An Object literal defining the person's work history
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
    }, {
        "employer": "Some Other Place",
        "title": "Some other title",
        "location": "Some other place",
        "dates": "Before - Some other time", //(Can be 'in progress')  
        "description": "Lots of great other skills aquired and mastered."
    }, {
        "employer": "Speciality Coatings Ltd.",
        "title": "Chemical Formulation Specialist",
        "location": "string",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }],
    "display": function() {
        appendHTML(this, HTMLwork, $("#workExperience"));
    }
}

// An Object literal defining the person's project history
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
        appendHTML(this, HTMLprojects, $("#projects"));
    }
}

/**
 * A function to loop over an objects property keys and 
 */
function prependHTML(contentData, htmlStrings, pendElement) {

    var keysArray = Object.keys(htmlStrings);
    for (var i = keysArray.length; i > -1; i--) {

        var key = keysArray[i];
        if (contentData.hasOwnProperty(key)) {
            pendElement.prepend(htmlStrings[key].replace("%data%", contentData[key]));
        } else {
            pendElement.prepend(htmlStrings[key]);
        }
    }
}

function objLoop(contentData, htmlStrings, pendElement) {

    var keysArray = Object.keys(htmlStrings);
    for (var i = 0; i < keysArray.length; i++) {

        var key = keysArray[i];
        if (contentData.hasOwnProperty(key)) {

            if (isArray(contentData[key])) {
                if (htmlStrings === HTMLeducation && i === 1) {
                    pendElement.append(HTMLonlineClasses);
                }
                arrayLoop(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#skills") : pendElement);
            } else if (isObject(contentData[key])) {
                appendHTML(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#topContacts") : pendElement);
            } else {
                pendElement.append(htmlStrings[key].replace("%data%", contentData[key]));
            }

        } else {
            if (contentData === bio) {
                pendElement.append(htmlStrings[key]);
            } else {
                createBulkEntry(contentData, htmlStrings, pendElement);
            }
        }
    }
}

function appendHTML(contentData, htmlStrings, pendElement) {

    var keysArray = Object.keys(htmlStrings);
    for (var i = 0; i < keysArray.length; i++) {

        var key = keysArray[i];
        if (contentData.hasOwnProperty(key)) {

            if (isArray(contentData[key])) {
                if (htmlStrings === HTMLeducation && i === 1) {
                    pendElement.append(HTMLonlineClasses);
                }
                arrayLoop(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#skills") : pendElement);
            } else if (isObject(contentData[key])) {
                appendHTML(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#topContacts") : pendElement);
            } else {
                pendElement.append(htmlStrings[key].replace("%data%", contentData[key]));
            }

        } else {
            if (contentData === bio) {
                pendElement.append(htmlStrings[key]);
            } else {
                createBulkEntry(contentData, htmlStrings, pendElement);
            }
        }
    }
}

function arrayLoop(contentData, htmlStrings, pendElement) {

    for (var i = 0; i < contentData.length; i++) {

        if (isObject(htmlStrings[i]) || isObject(contentData[i])) {
            createBulkEntry(contentData[i], htmlStrings[0], pendElement);
        } else {
            pendElement.append(htmlStrings.replace("%data%", contentData[i]));
        }
    }
}

function splitLinkLoop(contentData, htmlStrings, pendElement) {

    var keysArray = Object.keys(htmlStrings);
    var arr = [];
    for (var i = 0; i < keysArray.length; i++) {

        var key = keysArray[i];
        arr.push(htmlStrings[key].replace("%data%", contentData[key]));
    }
    return (arr.join(""));
}

function createBulkEntry(contentData, htmlStrings, pendElement) {

    var keysArray = Object.keys(htmlStrings);
    var tempArray = [htmlStrings[keysArray[0]].replace("</div>", "")];

    for (var i = 1; i < keysArray.length; i++) {

        var key = keysArray[i];
        if (isArray(contentData[key])) {
            tempArray.push(bulkArrayLoop(contentData[key], htmlStrings[key], pendElement));
        } else if (isObject(htmlStrings[key])) {
            tempArray.push(splitLinkLoop(contentData, htmlStrings[key], pendElement));
            i++;
        } else {
            tempArray.push(htmlStrings[key].replace("%data%", contentData[key]));
        }
    }
    tempArray.push("</div");
    pendElement.append(tempArray.join(""));
}

function bulkArrayLoop(contentData, htmlString, pendElement) {

    var arr = [];
    for (var i = 0; i < Object.keys(contentData).length; i++) {
        arr.push(htmlString.replace("%data%", contentData[i]));
    }
    return (arr.join(""));
}

bio.display();
work.display();
projects.display();
education.display();

var blockTween = new TweenMax.to('#header', 1.2, {
    backgroundColor: "#484848"
});

var containerScene = new ScrollMagic.Scene({
        triggerElement: "#header",
        triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
    })
    .setTween(blockTween)
    .addTo(controller);

var blockTween = new TweenMax.to('#header-container', 1.2, {
    backgroundColor: "#fff"
});

var containerScene = new ScrollMagic.Scene({
        triggerElement: "#header",
        triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
    })
    .setTween(blockTween)
    .addTo(controller);

// Scene Handler
var scene = new ScrollMagic.Scene({
        triggerElement: "#header", // point of execution
        duration: 0, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#header") // the element we want to pin


// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
        triggerElement: "#workExperience", // point of execution
        duration: $(window).height() - 500, // pin element for the window height - 1
        triggerHook: "#topContacts", // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#workExperience"); // the element we want to pin

// Scene3 Handler
var scene3 = new ScrollMagic.Scene({
        triggerElement: "#projects", // point of execution
        duration: $(window).height() - 250, // pin element for the window height - 1
        triggerHook: '#topContacts', // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#projects"); // the element we want to pin

// Scene4 Handler
var scene4 = new ScrollMagic.Scene({
        triggerElement: "#education", // point of execution
        duration: $(window).height() - 250, // pin element for the window height - 1
        triggerHook: '#topContacts', // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#education"); // the element we want to pin

// Scene5 Handler
var scene5 = new ScrollMagic.Scene({
        triggerElement: "#mapDiv", // point of execution
        duration: $(window).height() - 50, // pin element for the window height - 1
        triggerHook: '#topContacts', // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#mapDiv"); // the element we want to pin

// Scene6 Handler
var scene6 = new ScrollMagic.Scene({
        triggerElement: "#lets-connect", // point of execution
        duration: $(window).height() - 0, // pin element for the window height - 1
        triggerHook: '#topContacts', // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#lets-connect"); // the element we want to pin


// Add Scenes to ScrollMagic Controller
controller.addScene([
    scene,
    scene2,
    scene3,
    scene4,
    scene5,
    scene6
]);