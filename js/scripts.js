$(document).ready(function() {
  $(".mainForm").submit(function(event) {
    var input = parseInt($("#input").val());
    $("#result").append("<p>[" + beepBoop(input) + "]<p>");

  event.preventDefault();
  });
});

function beepBoop(input) {
  var array = [];
  var beep = "Beep!";
  var boop = "Boop!";
  var sowwy = "I'm sorry Dave" + "I'm afraid I can't do that.";
    for (var i = 0; i <= input; i++) {
      userString = input.toString();
      if (i % 3 === 0 && i > 0) {
        array.push(sowwy);
      } else if (userString.includes("1")) {
        array.push(boop);
      } else if (userString.includes("0")) {
        array.push(beep);
      } else {
        array.push(i.toString());
        }
      }
      return array;
  }
