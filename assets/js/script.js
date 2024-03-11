$(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the id of the parent time-block
    var timeBlockId = $(this).parent().attr("id");
    // Get the user input from the textarea
    var userInput = $(this).siblings(".description").val();
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function () {
    // Get the id of the time-block
    var timeBlockId = $(this).attr("id");
    // Get the current hour using Day.js
    var currentHour = dayjs().format("H");
    console.log(currentHour);
    // Extract the hour from the time-block id
    var blockHour = parseInt(timeBlockId);
    console.log(blockHour);
    
    // Compare the block hour with the current hour and add the appropriate class
    if (blockHour == currentHour) {
      $(this).addClass("present");
    } else if (blockHour < currentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });

  // Get any user input saved in localStorage and set the values of the corresponding textarea elements
  $(".time-block").each(function () {
    // Get the id of the time-block
    var timeBlockId = $(this).attr("id");
    // Get the user input from localStorage using the time-block id as the key
    var userInput = localStorage.getItem(timeBlockId);
    // Set the value of the textarea to the user input
    $(this).find(".description").val(userInput);
  });

  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
