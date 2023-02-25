// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?

//   //
//   // TODO: Add code to display the current date in the header of the page.
// });


var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm a'));



// function timeTracker
var timeNow = dayjs().hour()



function updateClassNames() {
  for (hour = 9; hour < 18; hour++) {
    var textArea = $(`#hour-${hour} textarea`);

    textArea.removeClass(`past present future`)
    if (timeNow === hour) {

      textArea.addClass('present');

    } else if (timeNow < hour) {
      textArea.addClass('future')
    } else if (timeNow > hour) {
      textArea.addClass('past')
    }
  }

}
updateClassNames();


var saveBtnEl = $('.saveBtn');
saveBtnEl.on("click", function() {
  var task = $(this).siblings("textarea").val();
  var time = $(this).parent().attr("id");

  
  localStorage.setItem(time, task);

 
  
})

const task =localStorage.getItem(task);

  //save task to local storage





//create a function to read from local storage and update each timeblock
//you should use a for loop similar to your updateClassNames function

// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)));
// }

$("#hour-9.  textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 .textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 .textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 .textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 .textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 .textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 .textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 .textarea").val(localStorage.getItem("hour-16"));
$("#hour-17 .textarea").val(localStorage.getItem("hour-17"));


updateClassNames();



