// formats current date and time
const current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// displays current date and time 
const rightNow = $('#rightNow');
rightNow.addClass("d-flex row-md-8 justify-content-center mb-2");
rightNow.append(current);

// render time blocks
const planner = $('#planner'); 
planner.addClass('container')



let plannerArray = new Array(5);

let currentHour = moment().hours();
console.log(currentHour);

for(let hour = 5; hour <= 20; hour++) {

    let index = hour - 5;

    let rowTime = $('div');
    rowTime.addClass('time-block');
    rowTime.attr('hour-index', hour);

    let timeDiv = $('<div>');
    timeDiv.addClass('col-md-2');

    const boxTime = $('<span>');
    boxTime.attr('class', 'row');

    let displayTime = 0;
    let meridian = "";
    if (hour > 12){
        displayTime = hour - 12;
        meridian = "pm";
    }else{
        displayTime = hour;
        meridian = "am";
    }

    boxTime.text(`${displayTime} ${meridian}`);

    rowTime.append(timeDiv);
    timeDiv.append(boxTime);
    let hourlySlot = $('<input>');

    hourlySlot.attr('id', `input-${index}`);
    hourlySlot.attr('hour-index', index);
    hourlySlot.attr('type', 'text');

    hourlySlot.val(plannerArray[index]);
    console.log(hourlySlot);

console.log(displayTime, meridian);
}