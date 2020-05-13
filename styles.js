//will need to create the hours in a day... either coded in html or dynamic in JS
//will need to be able to update hours on given time elements
//need to be able to create writable area/form
//need a btn to save userInput to the inspector

//1. get time
var currentDate = moment().format("dddd, MMMM Do YYYY");
console.log(currentDate);
$("#currentDay").text(currentDate);
var currentHour = moment().format("H");
console.log(currentHour);

var hourArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//2. dynamically append input area
//add the time styles

// <div class="row">
//        <div class="col time-block" id="time-block">
//            0900
//        </div>
//        <textarea class="form-control col-8" id="textArea"> </textarea>
//        <div class="col saveBtn text-center fas fa-lock"></div>
//    </div>

for (var i = 0; i < hourArray.length; i++) {
  var d1 = $("<div>");
  //<div></div>
  d1.attr("class", "row");
  //<div class="row"></div>
  var d2 = $("<div>");
  //<div></div>
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
  //<textarea></textarea>

  //how do you know when it is present (currentHour and hourArray[i])
  //how do you know when it it past
  //how do you know when it is future

  //addressed below, but I cannot figure how to phrase the variable at [i]
  //code I cannot figure out.... prob missing something dumb

  if (hourArray[i] == currentHour) {
    textarea.attr("class", "form-control col-8 present");
  }

  if (hourArray[i] < currentHour) {
    textarea.attr("class", "form-control col-8 past");
  }
  if (hourArray[i] > currentHour) {
    textarea.attr("class", "form-control col-8 future");
  }

  //textarea.attr("class", "form-control col-8");
  textarea.attr("id", hourArray[i]);

  var d3 = $("<div>");
  d3.attr("class", "col saveBtn text-center fas fa-lock");
  //<div></div>

  d1.append(d2);
  d1.append(textarea);
  d1.append(d3);

  $(".container").append(d1);

  //d2.text(hourArray[i]);
  //d1.append(d1);
}

//3. setting data local storage (recommended grab hour and set to userinput)

$(".saveBtn").click(function (event) {
  //Prevent the page from refreshing
  event.preventDefault();
  //alert($(this).attr("id"));
  //hour
  var hour = $(this).siblings(".form-control").attr("id");
  //var todoText = $("textarea").value.trim();
  //userinput
  var userinput = $(this).siblings(".form-control").val();
  //localstorage: hour:userinput
  localStorage.setItem(hour, userinput);

  // // Return from function early if submitted todoText is blank
  // if (todoText === "") {
  //   return;
  // }
  // //does this need json.parse?
  // // Add new todoText to textarea,
  // textarea.text(todoText);
  // d2.append(textarea);

  // Re-render the list
  //renderTodos();
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
//4. getting localstorage data and append to input area
