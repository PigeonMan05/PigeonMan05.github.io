// Function to get the current date in AEST (adjusted for timezone)
function getAESTDate() {
    let now = new Date();
    let offset = now.getTimezoneOffset() + 600; // Add 600 minutes (10 hours) for AEST
    let aestTime = new Date(now.getTime() + offset * 60 * 1000);
    return new Date(aestTime.getFullYear(), aestTime.getMonth(), aestTime.getDate()); // Return date only
}

// Get today's date in AEST
let todayAEST = getAESTDate();
console.log("Today in AEST:", todayAEST);

// Set the birthday date explicitly in AEST
let currentYear = todayAEST.getFullYear();
let birthdayThisYear = new Date(currentYear, 11, 8); // December 8 (Month is zero-indexed)
console.log("Birthday this year:", birthdayThisYear);

// Check if today's date is after the birthday (in AEST)
if (todayAEST > birthdayThisYear) {
    console.log("Today's date is AFTER the birthday. Incrementing year...");
    currentYear += 1;
}

// Recalculate birthday date and current age
let birthdayNextYear = new Date(currentYear, 11, 8);
let currentAge = currentYear - 2005;
console.log("Adjusted birthday for comparison:", birthdayNextYear);
console.log("Current Age:", currentAge);

// Determine suffix for age
let ageSuffix, ageSuffix2;
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

// Calculate remaining days
let countDownDate = birthdayNextYear.getTime();
let now = todayAEST.getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));

console.log("Distance in days:", days);

// Update DOM based on the remaining days
if (days >= 30) {
    let months = Math.round(days / 30);
    if (months === 1) {
        document.getElementById("days").innerHTML = months + " month left until my " + currentAge + ageSuffix + " birthday. :)";
    } else {
        document.getElementById("days").innerHTML = months + " months left until my " + currentAge + ageSuffix + " birthday. :)";
    }
} else if (days === 0) {
    document.getElementById("days").innerHTML = "FUCK YEAH! IT'S MY " + currentAge + ageSuffix2 + " BIRTHDAY!!";
} else if (days === -1) {
    document.getElementById("days").innerHTML = "You missed it... My " + currentAge + ageSuffix + " birthday was yesterday.";
} else if (days <= -2) {
    document.getElementById("days").innerHTML = "Error Calculating Days Left Until My " + currentAge + ageSuffix + " Birthday??";
} else {
    document.getElementById("days").innerHTML = (days + 1) + " days left until my " + currentAge + ageSuffix + " birthday. :)";
}
