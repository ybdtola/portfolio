
function countdownCaller(){

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];



const endtime = document.querySelector('code');

const display = document.querySelector('#arena');

// console.log(display);

const msgBox = document.querySelector('.msg-box');


/*calculate time*/
let tempYear = new Date().getFullYear();
let tempMonth = new Date().getMonth();
let tempDay = new Date().getDate();
let tempHours = new Date().getHours();
let tempMins = new Date().getMinutes();
let tempSecs = new Date().getSeconds();


// const years = 'May 5 2021 14:53:40';
let futureDate = new Date(tempYear, tempMonth, tempDay, tempHours, tempMins, tempSecs + 12);
// console.log(futureDate);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
// let h = ((24 - hour) - 12);
const min = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const dated = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

// endtime.textContent =`- giveaway ends on ${weekday}, ${dated} ${month} ${year} ${hour}:${min}am -`;


const futureTime = futureDate.getTime();

function renderTimer(target, timeSnap){
    const output = timeSnap.map(metric => {

        let state = metric.val <= 0 ? 'done' : 'running';

        let pulse = state === 'running' ? 'pulsate' : '';

        let label = (metric.val <= 1) ? metric.label : (metric.label + 's');

        let prefixZero = metric.val < 10 ? '0' : '';

        return `
        <div class='deadline-format ${state}'>
            <h1 class=${pulse}>${prefixZero + metric.val}</h1>
            <span>${label}</span>
        </div>`;
    }).join('');

    target.innerHTML = output;
}

/*timer function*/
function getRemainingTime(){
const now = new Date().getTime();
const t = futureTime - now;
// console.log(t);
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60  * 1000;
const oneMin = 60 * 1000;
const oneSec = 1000;

const days = Math.floor(t/oneDay);
const hours = Math.floor(t%oneDay/oneHour);
const mins = Math.floor(t%oneHour/oneMin);
const secs = Math.floor(t%oneMin/oneSec);

/*clear timeout*/

const snapshot = [
    {val:days, label:'day'},
    {val:hours, label:'hour'},
    {val:mins, label:'minute'},
    {val:secs, label:'second'},
];

    renderTimer(display, snapshot);
   
    if(days <= 0 && hours <= 0 && mins <= 0 && secs <= 0){
        // If so, stop the countdown
        clearInterval(countdown);
        // Show a success message
        // msgBox.innerHTML = 'Countdown complete';
        msgBox.style.display = 'none';
        msgBox.style.backgroundColor = 'limegreen';
    
        display.style.boxShadow = '2px 2px 18px limegreen';
        
        display.querySelectorAll('div').forEach(box => box.style.borderColor = 'limegreen');

        endtime.innerHTML = `<h1 style='font-size: 5vw; color:limegreen; text-align: center'>COMING SOON</h1>`;
    }else{
        msgBox.innerHTML = 'Projects loading...';
    
    }
}
    let countdown = setInterval(getRemainingTime, 1000);

}

let bool = false;
window.addEventListener('scroll', () => {
    const element = document.querySelector('#project');
    const dead = document.querySelector('.deadline');
    const bound = dead.getBoundingClientRect();
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    if(window.pageYOffset >= position && bool == false){
        countdownCaller();
        bool = true;
    }
});


