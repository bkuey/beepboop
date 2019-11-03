//Front End//
$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#input").val());
    var finalResult = output(userInput);
    $("#result").show();

    $("<li>" + finalResult + "</li>").appendTo("#result");

    $("#result").last().click(function() {
    $("#result").empty();
    });
  });
});

//Back End//
function output(input) {
  var results = [];

  for (var i = 0; i <= input; i++) {
    if (i.toString().includes("1")) {
      results.push(" Beep!");
    } else if (i.toString().includes("2")) {
      results.push(" Boop!");
    } else if (i.toString().includes("3")) {
      results.push("I'm sorry Dave. I'm afraid I can't do that.")
    } else {
      results.push(' ' + i);
    }
  }
  return results;
}
