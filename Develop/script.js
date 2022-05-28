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

