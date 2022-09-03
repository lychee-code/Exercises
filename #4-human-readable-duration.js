const ONE_YEAR = 31536000;
const ONE_DAY = 86400;
const ONE_HOUR = 3600;
const ONE_MINUTE = 60;
let Time = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
}
let formattedTime;

const CALCULATE_YEARS = (seconds) => {
    Time.seconds = seconds;
        while (Time.seconds >= ONE_YEAR) {
            Time.years = Math.floor((Time.seconds / ONE_DAY) / 365);
            Time.seconds = seconds - (Time.years * ONE_YEAR);
        }
        if (Time.years != 0) {
            Time.years > 1 ?
            Time.years = Time.years + ' years' : Time.years = Time.years + ' year';
        } else delete Time.years;
        seconds = Time.seconds;
    }

const CALCULATE_DAYS = (seconds) => {
    Time.seconds = seconds;
        while (seconds >= ONE_DAY) {
            Time.days = Math.floor(Time.seconds / ONE_DAY);
            Time.seconds = seconds - (Time.days * ONE_DAY);
        }
        if (Time.days != 0) {
            Time.days > 1 ?
            Time.days = Time.days + ' days' : Time.days = Time.days + ' day';
        } else delete Time.days;
        seconds = Time.seconds;
}
// todo: change 60 minutes to 1 hour
const CALCULATE_HOURS = (seconds) => {
    Time.seconds = seconds;
    while (Time.seconds >= ONE_HOUR) {
        Time.hours = Math.floor(Time.seconds / ONE_HOUR);
        Time.seconds = seconds - (Time.hours * ONE_HOUR);
            console.log('qui');
    }
    console.log(Time.hours);
    console.log(Time.seconds);

    if (Time.hours != 0) {
        Time.hours > 1 ?
        Time.hours = Time.hours + ' hours' : Time.hours = Time.hours + ' hour';
    // } else delete Time.hours;
    }     

    seconds = Time.seconds;
}

const CALCULATE_MINUTES = (seconds) => {
    Time.seconds = seconds;
    while (Time.seconds >= ONE_MINUTE) {
        Time.minutes = Math.floor(Time.seconds / ONE_MINUTE);
        Time.seconds = seconds - (Time.minutes * ONE_MINUTE);
    }
    console.log(Time.minutes)
    if (Time.minutes > 0) {
        Time.minutes > 1 ?
        Time.minutes = Time.minutes + ' minutes' : Time.minutes = Time.minutes + ' minute';
    } else delete Time.minutes;
    seconds = Time.seconds;
}

const CALCULATE_SECONDS = () => {
    if (Time.seconds > 0) {
        Time.seconds > 1 ?
        Time.seconds = Time.seconds + ' seconds' : Time.seconds = Time.seconds + ' second'; 
    } else delete Time.seconds;
}

const FORMAT_RESULT = () => {
    formattedTime = Object.values(Time).join(', ');
    const lastCommaIndex = formattedTime.lastIndexOf(', ');
    const lastValue = formattedTime.substring(lastCommaIndex, formattedTime.length).replace(/\,/g, ' and ');
    formattedTime = formattedTime.substring(0,lastCommaIndex) + lastValue;
}

function formatDuration (seconds) {
    if (seconds == 0) return 'now';
    Time.seconds = seconds;
    CALCULATE_YEARS();
    CALCULATE_DAYS();
    CALCULATE_HOURS();
    CALCULATE_MINUTES(seconds);
    CALCULATE_SECONDS(seconds);
    FORMAT_RESULT();
    return formattedTime;
}
console.log(formatDuration(3600))

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds")