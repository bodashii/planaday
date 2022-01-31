// formats current date and time
const current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(current);

// displays current date and time 
const rightNow = $('#rightNow');
rightNow.addClass("d-flex row-md-8 justify-content-center");
rightNow.append(current);

