/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Dave Waters",
    "role": "Android and Web Application Developer",
    "contactInfo": {
        "email": "dave.waters89@gmail.com",
        "mobile": "519-771-3043",
        "github": "https://github.com/go-0100-it",
        "location": "Brantford, Ontario, Canada"
    },
    "bioPic": "images/bio_image.jpg",
    "welcomeMsg": "Welcome to my on-line resume!",
    "skills": ["HTML", "CSS", "JavaScript", "JSON", "Python", "Java", "XML"]
}

var education = {
    "schools": [
        {
        "name": "Mohawk College", 
        "location": "Hamilton, Ontario CAN",  
        "degree": "Industrial Maintenance Mechanic",  
        "majors": ["strings"],  
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
        },
        {
        "name": "Mohawk College", 
        "location": "Hamilton, Ontario CAN",  
        "degree": "PLC Programming",  
        "majors": ["strings"],  
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
        },
        {
        "name": "Granton Institute of Technology", 
        "location": "Toronto, Ontario CAN",  
        "degree": "Industrial Electricity and Electronics",  
        "majors": ["strings"],  
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
        }
    ], 
    "onlineCourses": [
        { 
        "title": "Android Basics NanoDegree",  
        "school": "Udacity",  
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
        },
        { 
        "title": "JavaScript (Understanding the Wierd Parts)",  
        "school": "Udemy - Anthony Alicea",  
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udemy.com/understand-javascript/learn/v4/overview"
        },
        { 
        "title": "Intro to Programming NanaDegree",  
        "school": "Udacity",  
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        { 
        "title": "Front-End Web Developer NanoDegree",  
        "school": "Udacity",  
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
        }
    ],
    "display": function(){} // taking no parameters
}

var work = {
    "jobs": [
        {
        "employer": "Toyota Motor Manufacturing Canada",   
        "title": "Multi-skilled Team Leader",   
        "location": "string",   
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
        },
        {
        "employer": "Oakrun Bakery",   
        "title": "Millwright",   
        "location": "string",   
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
        },
        {
        "employer": "Wrigley Canada",   
        "title": "Tab Wrapping Mechanic",   
        "location": "string",   
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
        },
        {
        "employer": "Patheon Pharmacutical",   
        "title": "Packaging Group Leader",   
        "location": "string",   
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
        },
        {
        "employer": "Speciality Coatings Ltd.",   
        "title": "Chemical Formulation Specialist",   
        "location": "string",   
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
        }
    ],   
    "display": function(){} //taking no parameters
}

var projects = {
    "projects": [
        {  
        "title": "string",   
        "dates": "string", //(works with a hyphen between them)  
        "description": "string", 
        "images": ["strings"] // urls
        },
        {  
        "title": "string",   
        "dates": "string", //(works with a hyphen between them)  
        "description": "string", 
        "images": ["strings"] // urls
        },
        {  
        "title": "string",   
        "dates": "string", //(works with a hyphen between them)  
        "description": "string", 
        "images": ["strings"] // urls
        },
        {  
        "title": "string",   
        "dates": "string", //(works with a hyphen between them)  
        "description": "string", 
        "images": ["strings"] // urls
        },
        {  
        "title": "string",   
        "dates": "string", //(works with a hyphen between them)  
        "description": "string", 
        "images": ["strings"] // urls
        },
        {  
        "title": "string",   
        "dates": "string", //(works with a hyphen between them)  
        "description": "string", 
        "images": ["strings"] // urls
        },
        {  
        "title": "string",   
        "dates": "string", //(works with a hyphen between them)  
        "description": "string", 
        "images": ["strings"] // urls
        }
    ], 
    "display": function(){} // taking no parameters
}


var formattedBioImage = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs.description);

var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


$("#header").prepend(formattedBioImage);
$("#header").prepend(formattedwelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
