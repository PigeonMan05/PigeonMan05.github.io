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

// Recalculate the next birthday date
let birthdayNextYear = new Date(currentYear, 11, 8); // December 8
console.log("Adjusted birthday for comparison:", birthdayNextYear);

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
        document.getElementById("days").innerHTML = months + " month left until my birthday in December. :)";
    } else {
        document.getElementById("days").innerHTML = months + " months left until my birthday in December. :)";
    }
} else if (days === 0) {
    document.getElementById("days").innerHTML = "FUCK YEAH! IT'S MY BIRTHDAY TODAY!! 🎉";
} else if (days === -1) {
    document.getElementById("days").innerHTML = "You missed it... My birthday was yesterday.";
} else if (days <= -2) {
    document.getElementById("days").innerHTML = "Error Calculating Days Left Until My Birthday??";
} else {
    document.getElementById("days").innerHTML = (days + 1) + " days left until my birthday in December. :)";
}
