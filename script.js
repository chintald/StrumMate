// var five = require('johnny-five');
// var board = new five.Board();

$(document).ready(function () {

  const slider1 = document.getElementById("slider1");
  const slider2 = document.getElementById("slider2");
  const slider1Value = $('.slider1-range-value');
  const slider2Value = $('.slider2-range-value');
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");
  const btn7 = document.getElementById("btn7");

  $('#slider1').on('input', function () {
    var value = $(this).val();
    slider1Value.html(value);
  });

  $('#slider2').on('input', function () {
    var value = $(this).val();
    slider2Value.html(value);
  });

  var line = document.getElementById("line");
  line.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");

  var line1 = document.getElementById("line1");
  line1.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");

  var line2 = document.getElementById("line2");
  line2.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");

  var line3 = document.getElementById("line3");
  line3.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");

  var line4 = document.getElementById("line4");
  line4.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");

  var line5 = document.getElementById("line5");
  line5.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");

  var i = 160;
  var baseAngle = 160;
  var ltr = 1;
  var timer = null;

  const setTimer = (maxAngle, timeInterval) => {
    i >= maxAngle && (ltr = -1);
    i === baseAngle && (ltr = 1);
    timer = setInterval(function () {
      ltr === 1 && (i += 1);
      ltr === -1 && (i -= 1);
      line.setAttribute("transform", "rotate(" + i + ", 100, 100)");
      i >= maxAngle && (ltr = -1);
      i === baseAngle && (ltr = 1);
    }, timeInterval);
  }

  const clearTimer = (isStop = false) => {
    timer && clearInterval(timer);
    timer = null;
    if (isStop) {
      i = baseAngle
      ltr = 1;
      line.setAttribute("transform", "rotate(" + baseAngle + ", 100, 100)");
    }
  }

  var slider1Val = 0;
  var slider2Val = 0;

  const sliderFunc = (sliderVal, timeInterval) => {
    switch (true) {
      case (sliderVal > 0 && sliderVal <= 340):
        clearTimer();
        timer === null && setTimer(172, timeInterval);
        break;
      case (sliderVal >= 341 && sliderVal <= 680):
        clearTimer();
        timer === null && setTimer(184, timeInterval)
        break;
      case (sliderVal >= 681 && sliderVal <= 1023):
        clearTimer();
        timer === null && setTimer(196, timeInterval);
        break;
      default:
        clearTimer(true);
        break;
    }
  }

  slider1.addEventListener("input", function () {
    slider1Val = this.value;
    sliderFunc(slider1Val, slider2Val);
  });

  slider2.addEventListener("input", function () {
    slider2Val = this.value;
    sliderFunc(slider1Val, slider2Val);
  });
});