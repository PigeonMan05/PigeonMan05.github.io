var currentYear = new Date().getFullYear()
var currentAge = currentYear - 2005

if (new Date().getTime() > new Date("December 8 " + currentYear + " 12:00:00").getTime())

{
	currentYear += 1
}

if (currentAge % 10 === 1 && currentAge % 100 !== 11) {
    ageSuffix = "st";
	ageSuffix2 = "ST";
} else if (currentAge % 10 === 2 && currentAge % 100 !== 12) {
    ageSuffix = "nd";
	ageSuffix2 = "ND";
} else if (currentAge % 10 === 3 && currentAge % 100 !== 13) {
    ageSuffix = "rd";
	ageSuffix2 = "RD";
} else {
    ageSuffix = "th";
	ageSuffix2 = "TH";
}

var countDownDate = new Date("December 8 " + currentYear + " 12:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

if (days >= 30) {
	var months = Math.round(days / 30);
	if (months==1){document.getElementById("days").innerHTML = months + " month left until my " + currentAge + ageSuffix + " birthday. :)";} 
	else {document.getElementById("days").innerHTML = months + " months left until my " + currentAge + ageSuffix + " birthday. :)";}
}

else if (days == 0) {document.getElementById("days").innerHTML = "IT'S MY " + currentAge + ageSuffix2 + " BIRTHDAY TOMORROW! :D"}
else if (days == -1) {document.getElementById("days").innerHTML = "FUCK YEAH! IT'S MY " + currentAge + ageSuffix2 + " BIRTHDAY!!"}
else if (days == -2) {document.getElementById("days").innerHTML = "You missed it... My " + currentAge + ageSuffix + " birthday was yesterday."}
else if (days <= -3) {document.getElementById("days").innerHTML = "Error Calculating Days Left Until My " + currentAge + ageSuffix + " Birthday??"}
else {document.getElementById("days").innerHTML = days+1 + " days left until my " + currentAge + ageSuffix + " birthday. :)" ;}
