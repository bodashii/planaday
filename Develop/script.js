const schedule = $('#schedule');

let hours = [];

// Hour constructor
class Hour  {
    constructor(hour, note) {
        this.hour = hour,
        this.note = note
    }
}

function todayHours() {
    for(let i = 7; i < 20; i++){
        hour = i;
        note = 'tasks go here';
        hours.push(new Hour ({ hour, note }));
    }
    return hours
}

todayHours();
// display today hours on page
// function timeSlot() {
//     if(dailySchedule.Hour.hourTime.hourTime <= currentHour) {

//     }
// }

// check if theres saved data in local storage and load that, in none make a new blank schedule

// use function to append multiple objects from hours array to html



function displaySchedule(time){
    time = hours;

    
    console.log(time[0].hour.hour);
    
    let rowSlot, slotHour, slotNote, slotSave;
    for (let i = 0; i < time.length; i++){
        rowSlot = $('div');

        slotHour = $("<p></p>").text(time[i].hour.hour);
        slotNote = $("<textarea></textarea>").text(time[i].hour.note);
        slotSave = $("<button></button>").text("save");

        rowSlot.addClass('row');
        slotHour.addClass('col-3 text-center');
        slotNote.addClass('col-6');
        slotSave.addClass('btn btn-primary');

        schedule.append(slotHour, slotNote, slotSave);
    }
}

displaySchedule(hours);
// formats current date and time
const current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(current);
// displays current date and time 
const rightNow = $('#rightNow');
rightNow.addClass("d-flex row-md-8 justify-content-center mb-2");
rightNow.append(current);
console.log(rightNow)
// render time blocks

let plannerArray = new Array(5);

let currentHour = moment().hours()
console.log(currentHour);

/* iterate a grid layout to display the times from 7am to 6pm
    needs to include hourly time, textarea for input and button to save. */

function getHourlySlot(){
    // check to see if prev. saved data for time slot.
}

// function appendText() {
//     let txt1 = "<p>Text.</p>";
//     let txt2 = $("<p></p>").text("Text.");
//     let txt3 = document.createElement("p");
//     txt3.innerHTML = "Text.";
//     $("body").append(txt1, txt2, txt3);
// }
// appendText();




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