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
    let month = formatted.find(part => part.type === 'month').value - 1;
    let day = formatted.find(part => part.type === 'day').value;
    
    return new Date(year, month, day);
}

let todayAEST = getAESTDate();
console.log("Today in AEST:", todayAEST);

let currentYear = todayAEST.getFullYear();
let birthdayThisYear = new Date(currentYear, 11, 8);
console.log("Birthday this year:", birthdayThisYear);

if (todayAEST > birthdayThisYear) {
    console.log("Today's date is AFTER the birthday. Incrementing year...");
    currentYear += 1;
}

let birthdayNextYear = new Date(currentYear, 11, 8);
let countDownDate = birthdayNextYear.getTime();
let now = todayAEST.getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));

if (days >= 30) {
    let months = Math.round(days / 30);
    console.log(months + " months left until my birthday. :)");
} else if (days === 0) {
    console.log("FUCK YEAH! IT'S MY BIRTHDAY TODAY!! 🎉");
} else if (days === -1) {
    console.log("You missed it... My birthday was yesterday.");
} else if (days <= -2) {
    console.log("Error Calculating Days Left Until My Birthday??");
} else {
    console.log((days + 1) + " days left until my birthday. :)");
}
