var currentDate = moment().format("dddd, MMMM Do YYYY");
console.log(currentDate);
$("#currentDay").text(currentDate);
var currentHour = moment().format("H");
console.log(currentHour);

var hourArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i < hourArray.length; i++) {
  var d1 = $("<div>");
  d1.attr("class", "row");
  var d2 = $("<div>");
  d2.attr("class", "col");
  d2.attr("id", "time-block");
  if (hourArray[i] <= 12) {
    if (hourArray[i] == 12) {
      d2.text(hourArray[i] + " PM");
    } else {
      d2.text(hourArray[i] + " AM");
    }
  } else {
    d2.text(hourArray[i] - 12 + " PM");
  }

  var textarea = $("<textarea>");

  if (hourArray[i] == currentHour) {
    textarea.attr("class", "form-control col-8 present");
  }
  if (hourArray[i] < currentHour) {
    textarea.attr("class", "form-control col-8 past");
  }
  if (hourArray[i] > currentHour) {
    textarea.attr("class", "form-control col-8 future");
  }
  textarea.attr("id", hourArray[i]);

  var d3 = $("<div>");
  d3.attr("class", "col saveBtn text-center fas fa-lock");

  d1.append(d2);
  d1.append(textarea);
  d1.append(d3);

  $(".container").append(d1);
}

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var hour = $(this).siblings(".form-control").attr("id");
  var userinput = $(this).siblings(".form-control").val();
  localStorage.setItem(hour, userinput);
});

$("#6").val(localStorage.getItem("6"));
$("#7").val(localStorage.getItem("7"));
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
$("#18").val(localStorage.getItem("18"));
$("#19").val(localStorage.getItem("19"));
$("#20").val(localStorage.getItem("20"));
