// Function to get the current date in AEST
function getAESTDate() {
    let now = new Date();
    let aestFormatter = new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Sydney',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    let formatted = aestFormatter.formatToParts(now);
    let year = formatted.find(part => part.type === 'year').value;
    let month = formatted.find(part => part.type === 'month').value - 1; // JavaScript months are 0-indexed
    let day = formatted.find(part => part.type === 'day').value;

    return new Date(year, month, day);
}

// Get today's date in AEST
let todayAEST = getAESTDate();
console.log("Today in AEST:", todayAEST);

// Set the birthday date explicitly in AEST
let currentYear = todayAEST.getFullYear();
let birthdayThisYear = new Date(currentYear, 11, 8); // December 8 (0-indexed months)

// Increment the year if today is after the birthday
if (todayAEST > birthdayThisYear) {
    currentYear += 1;
}

// Calculate next birthday
let birthdayNextYear = new Date(currentYear, 11, 8);
let countDownDate = birthdayNextYear.getTime();
let now = todayAEST.getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));

// Find the target element
let daysElement = document.getElementById("days");
if (!daysElement) {
    console.error("Element with id 'days' not found!");
} else {
    // Update the content based on the calculated distance
    if (days >= 30) {
        let months = Math.round(days / 30);
        daysElement.innerHTML = months + (months === 1 ? " month" : " months") + " left until my birthday. :)";
    } else if (days === 0) {
        daysElement.innerHTML = "FUCK YEAH! IT'S MY BIRTHDAY TODAY!! 🎉";
    } else if (days === -1) {
        daysElement.innerHTML = "You missed it... My birthday was yesterday.";
    } else if (days <= -2) {
        daysElement.innerHTML = "Error Calculating Days Left Until My Birthday??";
    } else {
        daysElement.innerHTML = (days + 1) + " days left until my birthday. :)";
    }
}
