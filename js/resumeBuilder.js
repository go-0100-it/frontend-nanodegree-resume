/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "headerName": "Dave Waters",
    "headerRole": "Android and Web App Developer",
    "contactInfo": {
        "genericContact": "davewaters@live.ca",
        "email": "dave.waters89@gmail.com",
        "mobile": "519-771-3043",
        "github": "https://github.com/go-0100-it",
        "location": "Brantford, Ontario, Canada"},
    "bioPic": "images/bio_image.jpg",
    "welcomeMsg": "Welcome to my on-line resume!",
    "skills": ["HTML", "CSS", "JavaScript", "JSON", "Python", "Java", "XML"]
}

var formattedBioImage = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedRole = HTMLheaderRole.replace("%data%", bio.headerRole);
var formattedName = HTMLheaderName.replace("%data%", bio.headerName);
var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contactInfo.genericContact);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

$("#header").prepend(formattedwelcomeMsg);
$("#header").prepend(formattedBioImage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedContactGeneric);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);