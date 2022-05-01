

// Hour constructor
class Hour  {
    constructor(hourTime, note) {
        this.hourTime = hourTime,
        this.note = note
    }
}

function todayHours() {
    let hours = [];
    for(let i = 7; i < 20; i++){
        Hour.hourTime = i;
        hours.push(Hour.hourTime = new Hour ({
            hourTime: i,
            note: '', 
            saveNote: function() {
                if(this.note !== this.note){
                    return this.note;
                }
            }
        }));
    }
    return hours
}
console.log(todayHours());

// display today hours on page

// check if theres saved data in local storage and load that, in none make a new blank schedule

// use function to append multiple objects from hours array to html
const dailySchedule = todayHours();
console.log(dailySchedule);

function displaySchedule(){

}

// formats current date and time
const current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(current);
// displays current date and time 
const rightNow = $('#rightNow');
rightNow.addClass("d-flex row-md-8 justify-content-center mb-2");
rightNow.append(current);
console.log(rightNow)
// render time blocks
const planner = $('#planner'); 
planner.addClass('column');

let plannerArray = new Array(5);

let currentHour = moment().hours()
console.log(currentHour);

/* iterate a grid layout to display the times from 7am to 6pm
    needs to include hourly time, textarea for input and button to save. */

function getHourlySlot(){
    // check to see if prev. saved data for time slot.
}







// for(let hour = 7; hour <= 20; hour++) {


//     let rowTime = $('div');
//     rowTime.addClass('time-block');
//     rowTime.attr('hour-index', hour);

//     let timeDiv = $('<div>');
//     timeDiv.addClass('col-md-2');

//     const boxTime = $('<span>');
//     boxTime.attr('class', 'time-block');

//     let displayTime = 0;
//     let meridian = "";
//     if (hour > 12){
//         displayTime = hour - 12;
//         meridian = "pm";
//     }else{
//         displayTime = hour;
//         meridian = "am";
//     }

//     boxTime.text(`${displayTime} ${meridian}`);

//     rowTime.append(timeDiv);
//     timeDiv.append(boxTime);


//     let hourlySlot = $('<input>');

//     hourlySlot.attr('id', `input-${index}`);
//     hourlySlot.attr('hour-index', index);
//     hourlySlot.attr('type', 'text');

//     hourlySlot.val(plannerArray[index]);
//     // console.log(hourlySlot);

//     let boxWidth = $('<div>');
//     boxWidth.addClass('col-md-9');

//     rowTime.append(boxTime);

//     let saveBtn = $('<button>');

// // console.log(displayTime, meridian);
// }