const ONE_YEAR = 31536000;
const ONE_DAY = 86400;
const ONE_HOUR = 3600;
const ONE_MINUTE = 60;
let formattedResult;
let Time = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
}

function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    else {
      Time['seconds'] = seconds;
      calculateYears();
      calculateDays();
      calculateHours();
      calculateMinutes();
      calculateSeconds();
      cleanResult();
      return formattedResult;
    }
}

const calculateYears = () => {
    while (Time.seconds >= ONE_YEAR) {
        Time.years = Math.floor((Time.seconds / ONE_DAY) / 365);
        Time.seconds = Time.seconds - (Time.years * ONE_YEAR);
    }
    console.log(Time['years']);
    if (Time['years'] <= 0 || Time['years'] === 'undefined' || Time['years'] === 'null' ) {
        delete Time['years'];
    }
    Time['years'] == 1 ? Time.years += ' year' : Time.years += ' years';    
}

const calculateDays = () => {
    while (Time.seconds >= ONE_DAY) {
        Time.days = Math.floor(Time.seconds / ONE_DAY);
        Time.seconds = Time.seconds - (Time.days * ONE_DAY);
    }
    if (Time.days <= 0) { delete Time['days'] } 
    Time.days == 1 ? Time.days += ' day' : Time.days += ' days';        
}

const calculateHours = () => {
    while (Time.seconds >= ONE_HOUR) {
        Time.hours = Math.floor(Time.seconds / ONE_HOUR);
        Time.seconds = Time.seconds - (Time.hours * ONE_HOUR);
    }
    if (Time.hours <= 0) { delete Time.hours }
    Time.hours == 1 ? Time.hours += ' hour' : Time.hours += ' hours';
}     

const calculateMinutes = () => {
    while (Time.seconds >= ONE_MINUTE) {
        Time.minutes = Math.floor(Time.seconds / ONE_MINUTE);
        Time.seconds = Time.seconds - (Time.minutes * ONE_MINUTE);
    }
    if (Time.minutes <= 0) { delete Time.minutes }
    Time.minutes == 1 ? Time.minutes += ' minute' : Time.minutes += ' minutes';
}

const calculateSeconds = () => {
    if (Time.seconds <= 0) { delete Time.seconds } 
    Time.seconds == 1 ? Time.seconds += ' second' : Time.seconds += ' seconds';
    if (Time['days'] === 'undefined') delete Time['days']
    console.log(Time);
}

const cleanResult = () => {
    formattedResult = Object.values(Time).join(', ');
    const lastCommaIndex = formattedResult.lastIndexOf(', ');
    const lastValue = formattedResult.substring(lastCommaIndex, formattedResult.length).replace(/\,/g, ' and ');
    formattedResult = formattedResult.substring(0,lastCommaIndex) + lastValue;
}

console.log(formatDuration(86400))
Time