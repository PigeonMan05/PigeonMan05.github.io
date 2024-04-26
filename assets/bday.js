var currentYear = new Date().getFullYear()

if (new Date().getTime() > new Date("December 8 " + currentYear + " 12:00:00").getTime())

{
	currentYear += 1
}

var countDownDate = new Date("December 8 " + currentYear + " 12:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

if (days >= 30) {
	var months = Math.round(days / 30);
	if (months==1){document.getElementById("days").innerHTML = months + " month left until my birthday. :)";} 
	else {document.getElementById("days").innerHTML = months + " months left until my birthday. :)";}
}

else if (days == 0) {document.getElementById("days").innerHTML = "IT'S MY BIRTHDAY TOMORROW! :D"}
else if (days == -1) {document.getElementById("days").innerHTML = "FUCK YEAH! IT'S MY BIRTHDAY!!"}
else if (days == -2) {document.getElementById("days").innerHTML = "You missed it... My birthday was yesterday."}
else if (days <= -3) {document.getElementById("days").innerHTML = "Error Calculating Days Left Until Birthday??"}
else {document.getElementById("days").innerHTML = days+1 + " days left until my birthday. :)" ;}