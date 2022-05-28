// declare html linked variables
const schedule = $("#schedule");
const rightNow = $("#rightNow");
const current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const hourArray = getHourArray();

// saves hour to local storage
const saveHour = function () {
  localStorage.setItem("hours", JSON.stringify(hours));
};

$("#hourlySlot".saveBtn).click(console.log("saved"));
// get hour object array
function getHourArray() {
  let result = [];

  for (let i = 7; i < 20; i++) {
    class Hour {
      constructor() {
        this.id = i - 7;
        this.time = i;
        this.note = "";
      }
    }

    let hour = new Hour();
    this.id = i - 7;
    this.time = i;
    this.note = "";

    result.push(hour);
  }
  return result;
}

// map hourArray to hour with meridien and hourTime
const getMeridien = () => {
  let hours = [];
  let meridien = "";
  

  for (let i = 0; i < hourArray.length; i++) {
    if (this.time < 13) {
      this.push(meridien) = "am";
    } else {
      this.push(meridien) = "pm";
    }
   
    hourArray[i].push(hours);
  }
  return hours
};

console.log(hourArray);

// Hour constructor

// initialize planner

// check if theres saved data in local storage and load that, in none make a new blank schedule

// use function to append multiple objects from hours array to html
// function displaySchedule(time) {
//   time = hours;

//   console.log(time[0].hour.hour);

//   let rowSlot, slotHour, slotNote, slotSave;
//   for (let i = 0; i < time.length; i++) {
//     rowSlot = $("div");

//     slotHour = $("<p></p>").text(time[i].hour.hour);
//     slotNote = $("<textarea></textarea>").text(time[i].hour.note);
//     slotSave = $("<button></button>").text("save");

//     rowSlot.addClass("row");
//     slotHour.addClass("col-3");
//     slotNote.addClass("col-6");
//     slotSave.addClass("btn btn-primary");

//     schedule.append(slotHour, slotNote, slotSave);
//   }
// }

// displaySchedule(hours);
// formats current date and time

// console.log(current);
// displays current date and time

// console.log(rightNow);
// render time blocks

// let plannerArray = new Array(5);

// let currentHour = moment().hours();
// console.log(currentHour);

/* iterate a grid layout to display the times from 7am to 6pm
    needs to include hourly time, textarea for input and button to save. */

// function getHourlySlot() {
// check to see if prev. saved data for time slot.
// }

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
