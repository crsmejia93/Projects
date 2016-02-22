/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Cesar Mejia",
	"role": "Web Developer",
	"contact": {
		"email": "crsmejia93@gmail.com",
		"phone": "(240)392-0100"
	},
	"bioPic": "images/my_picture.jpg",
	"skills": ["HTML", "CSS", "JavaScript", "Java", "Wordpress"]
};

var work = {
	"jobs": [{
		"employer": "Insight Global",
		"title": "Tablet Migration Tech",
		"location": "Elkridge, MD",
		"dates": "Nov, 2015 - Dec, 2015",
		"description": "At this position I configured and synchronized the data from a practitioners former \
		tablet to their new tablet, before being shipped to them. Once a practitioner had recieved his/her tablet\
		they would set a schedule to finish the last steps to make them go life with their new tablet and kill the other one."
	}, {
		"employer": "Global Commerce Services",
		"title": "IT Field Technician",
		"location": "Greenbelt, MD",
		"dates": "Apr, 2015 - July, 2015",
		"description": "Would troubleshoot users computers, deal with break/fixs, schedule moves from buildings \
		, would configure IP addresses on new a recent placed workstation, would pick up old or unsubscribe computers \
		or devices, and would image new computers before deployment."
	}]
}

var education = {
	"schools": [
	 {
		 "name": "Prince George's Community College",
		 "city": "Largo, MD",
		 "degree": "AS",
		 "major": ["CompSci"]
	 },{
		 "name": "University of Maryland University College",
		 "city": "Adelphi, MD",
		 "degree": "BS",
		 "major": ["CompSci","Digital Media & Web Design"]
	 }
	]
}

var projects = {
	"projects": [
	{
		"title": "Framework",
		"date": "January 26, 15",
		"description": "In this project, I learned how to build a \
		website using Bootstrap"
	},{
		"title": "Responsive Design",
		"date": "February 3, 15",
		"description": "In this project, I configured a website to be \
		responsive arrange its content according to the device." 
	}
 ]
}

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

if(bio.skills.length > 0){
	//create the <ul> (id=skills), defined by helper.js
	$("#header").append(HTMLskillsStart);	
	//populates the <ul> with <li> items. 
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

for(job in work.jobs){
		//creates the work <div>
		$("#workExperience").append(HTMLworkStart);
		//formats and concatenates job's employer - title to #workExperience
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		//formats and appends job's location to #workExperience
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);




