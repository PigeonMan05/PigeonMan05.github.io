function getAESTDate() {
    let now = new Date();
    let offset = now.getTimezoneOffset() + 600;
    let aestTime = new Date(now.getTime() + offset * 60 * 1000);
    return new Date(aestTime.getFullYear(), aestTime.getMonth(), aestTime.getDate());
}

let todayAEST = getAESTDate();

let currentYear = todayAEST.getFullYear();
let birthdayThisYear = new Date(currentYear, 11, 8);

if (todayAEST > birthdayThisYear) {
    currentYear += 1;
}

let birthdayNextYear = new Date(currentYear, 11, 8);

let countDownDate = birthdayNextYear.getTime();
let now = todayAEST.getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));

if (days >= 30) {
    let months = Math.round(days / 30);
    if (months === 1) {
        document.getElementById("days").innerHTML = months + " month left until my birthday. :)";
    } else {
        document.getElementById("days").innerHTML = months + " months left until my birthday. :)";
    }
} else if (days === 0) {
    document.getElementById("days").innerHTML = "FUCK YEAH! IT'S MY BIRTHDAY TODAY!! 🎉";
} else if (days === -1) {
    document.getElementById("days").innerHTML = "You missed it... My birthday was yesterday.";
} else if (days <= -2) {
    document.getElementById("days").innerHTML = "Error Calculating Days Left Until My Birthday??";
} else {
    document.getElementById("days").innerHTML = (days + 1) + " days left until my birthday. :)";
}
