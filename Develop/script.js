// formats current date and time
const current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// displays current date and time 
const rightNow = $('#rightNow');
rightNow.addClass("d-flex row-md-8 justify-content-center mb-2");
rightNow.append(current);

// render time blocks
const planner = $('#planner'); 
planner.addClass('container')

const boxTime = $('<span>');
boxTime.attr('class', 'time-block');

let currentHour = moment().hours();
console.log(currentHour);

for(let hour = 5; hour <= 20; hour++) {

    let displayTime = 0;
    let meridian = "";
    if (hour > 12){
        displayTime = hour - 12;
        meridian = "pm";
    }else{
        displayTime = hour;
        meridian = "am";
    }

console.log(displayTime, meridian);
}