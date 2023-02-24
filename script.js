$(document).ready(function () {
  var line = document.getElementById("line");
  line.setAttribute("transform", "rotate(" + 160 + ", 100, 100)");

  // Code for Music

  const defaultPath = "C:\\Users\\chint\\OneDrive\\Desktop\\UWindsor\\ASE\\Prototype\\StrumMate\\steel_string_guitar_sounds";
  const string6DefaultNoteEHeavy = (defaultPath+'\\E3_default_up.mp3');
  const string5DefaultNoteB = (defaultPath+'\\B3_default.mp3');
  const string4DefaultNoteG = (defaultPath+'\\G3_default.mp3');
  const string3DefaultNoteD = (defaultPath+'\\D3_default.mp3');
  const string2DefaultNoteA = (defaultPath+'\\A2_default.mp3');
  const string1DefaultNoteESoft = (defaultPath+'\\Eb4_default_down.mp3');


  var str1DefNoteESoft = new Audio(string1DefaultNoteESoft);
  var str2DefNoteA = new Audio(string2DefaultNoteA);
  var str3DefNoteD = new Audio(string3DefaultNoteD);
  var str4DefNoteG = new Audio(string4DefaultNoteG);
  var str5DefNoteB = new Audio(string5DefaultNoteB);
  var str6DefNoteEHeavy = new Audio(string6DefaultNoteEHeavy);


  const slider1 = document.getElementById("slider1");
  const slider2 = document.getElementById("slider2");
  const slider1Value = $('.slider1-range-value');
  const slider2Value = $('.slider 2-range-value');

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
      playTone(i);
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
  var slider2Val = 25;

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


  function playTone(currentAngle) {
    switch(true){
      
      case (currentAngle === 167):  
        str6DefNoteEHeavy.currentTime = 0;
        str6DefNoteEHeavy.play();
        setTimeout(function() {
          str6DefNoteEHeavy.pause();
          str6DefNoteEHeavy.currentTime = 0;
        }, 1100);
      break;
      
      case (currentAngle === 172):  
      str5DefNoteB.currentTime = 0;
        str5DefNoteB.play();
        setTimeout(function() {
          str5DefNoteB.pause();
          str5DefNoteB.currentTime = 0;
        }, 1100);
        break;

      case (currentAngle === 176):
        str4DefNoteG.currentTime = 0;
        str4DefNoteG.play();
        setTimeout(function() {
          str4DefNoteG.pause();
          str4DefNoteG.currentTime = 0;
        }, 1100);
      break;
      
      case (currentAngle === 180):
        str3DefNoteD.currentTime = 0;
        str3DefNoteD.play();
        setTimeout(function() {
          str3DefNoteD.pause();
          str3DefNoteD.currentTime = 0;
        }, 1100);
      break;
      
      case (currentAngle === 185):
        str2DefNoteA.currentTime = 0;
        str2DefNoteA.play();
        setTimeout(function() {
          str2DefNoteA.pause();
          str2DefNoteA.currentTime = 0;
        }, 1100);
      break;
      
      case (currentAngle === 190):
        str1DefNoteESoft.currentTime = 0;
        str1DefNoteESoft.play();
        setTimeout(function() {
          str1DefNoteESoft.pause();
          str1DefNoteESoft.currentTime = 0;
        }, 1100);
        break;

      default:
        break; 
    }
  }
});   // Document Ends