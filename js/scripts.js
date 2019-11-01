$(document).ready(function() {
  $(".mainForm").submit(function(event) {
    var input = parseInt($("#input").val());
    var result = beepBoop(input);
    $("#result").text(result).show();

  event.preventDefault();
  });
});

function beepBoop(number) {
  var result = "";

    if (number === 1) {
      result += "Beep";
    } else if (number === 2) {
      result += "Boop";
    } else if (number === 3) {
      result += "I'm sorry, Dave. I'm afraid I can't do that."
    }

  return result;
}
