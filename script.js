$(document).ready(function () {
  var line = document.getElementById("line");
  line.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");

  var line1 = document.getElementById("line1");
  line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");

  var line2 = document.getElementById("line2");
  line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");

  var line3 = document.getElementById("line3");
  line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");

  var line4 = document.getElementById("line4");
  line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");

  var line5 = document.getElementById("line5");
  line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");

  var line6 = document.getElementById("line6");
  line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");

  // Code for Music

  const defaultPath = "D:\\MAC\\Sem 1\\ASE\\strummate\\steel_string_guitar_sounds";
  const string6DefaultNoteEHeavy = (defaultPath + '\\E3_default_up.mp3');
  const string5DefaultNoteB = (defaultPath + '\\B3_default.mp3');
  const string4DefaultNoteG = (defaultPath + '\\G3_default.mp3');
  const string3DefaultNoteD = (defaultPath + '\\D3_default.mp3');
  const string2DefaultNoteA = (defaultPath + '\\A2_default.mp3');
  const string1DefaultNoteESoft = (defaultPath + '\\Eb4_default_down.mp3');


  var str1DefNoteESoft = new Audio(string1DefaultNoteESoft);
  var str2DefNoteA = new Audio(string2DefaultNoteA);
  var str3DefNoteD = new Audio(string3DefaultNoteD);
  var str4DefNoteG = new Audio(string4DefaultNoteG);
  var str5DefNoteB = new Audio(string5DefaultNoteB);
  var str6DefNoteEHeavy = new Audio(string6DefaultNoteEHeavy);


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


  //============================== Milestone 3 code=================
  var isFromTop = true;

  btn1.onclick = function () { playSingleTone(this, 1) };
  btn2.onclick = function () { playSingleTone(this, 2) };
  btn3.onclick = function () { playSingleTone(this, 3) };
  btn4.onclick = function () { playSingleTone(this, 4) };
  btn5.onclick = function () { playSingleTone(this, 5) };
  btn6.onclick = function () { playSingleTone(this, 6) };
  btn7.onclick = function () {
    if (isFromTop) {
      btn7.value = "Bottom";
      isFromTop = false;
    } else {
      btn7.value = "Top";
      isFromTop = true;
    }
  }
  btn8.onclick = function () {
    playAudio();
  }

  var audioFiles = [];
  if (isFromTop) {
    audioFiles = [
      string1DefaultNoteESoft,
      string2DefaultNoteA,
      string3DefaultNoteD,
      string4DefaultNoteG,
      string5DefaultNoteB,
      string6DefaultNoteEHeavy,
    ];
  } else {
    audioFiles = [
      string6DefaultNoteEHeavy,
      string5DefaultNoteB,
      string4DefaultNoteG,
      string3DefaultNoteD,
      string2DefaultNoteA,
      string1DefaultNoteESoft
    ];
  }
  // Preload the audio files
  audioFiles.forEach(file => {
    const audio = new Audio();
    audio.src = file;
    audio.load();
  });

  // Get a reference to the audio element
  const audio = new Audio();

  // Define a variable to keep track of the current audio file index
  let currentIndex = 0;

  // Define a function to play the audio
  function playAudio() {
    // If all audio files have been played, stop playing
    if (currentIndex >= audioFiles.length) {
      return;
    }

    // Set the source of the audio element
    audio.src = audioFiles[currentIndex];

    // line angle change
    switch (currentIndex) {
      case 0:
        line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
        break;
      case 1:
        line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
        break;
      case 2:
        line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
        break;
      case 3:
        line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
        break;
      case 4:
        line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
        break;
      case 5:
        line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
        break;
    }

    // Play the audio
    audio.currentTime = 0;
    audio.play();
    setTimeout(function () {
      audio.pause;
      audio.currentTime = 0;
    }, 1100);

    // Increment the current index
    currentIndex++;

    // Set up an event listener to play the next audio file when the current one has ended
    audio.addEventListener('ended', playAudio);
  }

  function playSingleTone(e, strNum) {
    switch (strNum) {

      case (1):
        //First time click
        if (e.name != 'Click') {
          e.name = "Click";
          line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
        }
        //When click it again..
        else if (e.name == 'Click') {
          e.name = "Unclick";
          line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");
        }
        str1DefNoteESoft.currentTime = 0;
        str1DefNoteESoft.play();
        setTimeout(function () {
          str1DefNoteESoft.pause();
          str1DefNoteESoft.currentTime = 0;
        }, 1100);
        break;

      case (2):
        if (e.name != 'Click') {
          e.name = "Click";
          line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
        }
        else if (e.name == 'Click') {
          e.name = "Unclick";
          line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
        }
        str2DefNoteA.currentTime = 0;
        str2DefNoteA.play();
        setTimeout(function () {
          str2DefNoteA.pause();
          str2DefNoteA.currentTime = 0;
        }, 1100);
        break;

      case (3):
        str3DefNoteD.currentTime = 0;
        str3DefNoteD.play();
        setTimeout(function () {
          str3DefNoteD.pause();
          str3DefNoteD.currentTime = 0;
        }, 1100);
        if (e.name != 'Click') {
          e.name = "Click";
          line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
        }
        else if (e.name == 'Click') {
          e.name = "Unclick";
          line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");
        }
        break;

      case (4):
        str4DefNoteG.currentTime = 0;
        str4DefNoteG.play();
        setTimeout(function () {
          str4DefNoteG.pause();
          str4DefNoteG.currentTime = 0;
        }, 1100);
        if (e.name != 'Click') {
          e.name = "Click";
          line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
        }
        else if (e.name == 'Click') {
          e.name = "Unclick";
          line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");
        }
        break;

      case (5):
        str5DefNoteB.currentTime = 0;
        str5DefNoteB.play();
        setTimeout(function () {
          str5DefNoteB.pause();
          str5DefNoteB.currentTime = 0;
        }, 1100);
        if (e.name != 'Click') {
          e.name = "Click";
          line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
        }
        else if (e.name == 'Click') {
          e.name = "Unclick";
          line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");
        }
        break;

      case (6):
        str6DefNoteEHeavy.currentTime = 0;
        str6DefNoteEHeavy.play();
        setTimeout(function () {
          str6DefNoteEHeavy.pause();
          str6DefNoteEHeavy.currentTime = 0;
        }, 1100);
        if (e.name != 'Click') {
          e.name = "Click";
          line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
        }
        else if (e.name == 'Click') {
          e.name = "Unclick";
          line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");
        }
        break;

      default:
        break;
    }
  }

  async function playAllStrings() {
    // if (isFromTop) {
    const audioFiles = [
      string6DefaultNoteEHeavy,
      string5DefaultNoteB,
      string4DefaultNoteG,
      string3DefaultNoteD,
      string2DefaultNoteA,
      string1DefaultNoteESoft
    ];

    // Preload the audio files
    audioFiles.forEach(file => {
      const audio = new Audio();
      audio.src = file;
      audio.load();
    });

    // Get a reference to the audio element
    const audio = new Audio();

    // Define a variable to keep track of the current audio file index
    let currentIndex = 0;

    // } else {
    //   const audioFiles = [
    //     string1DefaultNoteESoft,
    //     string2DefaultNoteA,
    //     string3DefaultNoteD,
    //     string4DefaultNoteG,
    //     string5DefaultNoteB,
    //     string6DefaultNoteEHeavy
    //   ];

    //   const audio = new Audio();

    //   for (let i = 0; i < audioFiles.length; i++) {
    //     // Set the source of the audio element
    //     audio.src = audioFiles[i];
    //     // Play the audio
    //     audio.play();
    //     // Wait for the audio to finish playing before moving on to the next one
    //     await new Promise(resolve => audio.addEventListener('ended', resolve));
    //   }
    // }
  }
  //==============================

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
      console.log(i);
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
    switch (true) {

      case (currentAngle === 167):
        console.log(currentAngle);
        str6DefNoteEHeavy.currentTime = 0;
        str6DefNoteEHeavy.play();
        setTimeout(function () {
          str6DefNoteEHeavy.pause();
          str6DefNoteEHeavy.currentTime = 0;
        }, 1100);
        break;

      case (currentAngle === 172):
        console.log(currentAngle);
        str5DefNoteB.currentTime = 0;
        str5DefNoteB.play();
        setTimeout(function () {
          str5DefNoteB.pause();
          str5DefNoteB.currentTime = 0;
        }, 1100);
        break;

      case (currentAngle === 176):
        console.log(currentAngle);
        str4DefNoteG.currentTime = 0;
        str4DefNoteG.play();
        setTimeout(function () {
          str4DefNoteG.pause();
          str4DefNoteG.currentTime = 0;
        }, 1100);
        break;

      case (currentAngle === 180):
        console.log(currentAngle);
        str3DefNoteD.currentTime = 0;
        str3DefNoteD.play();
        setTimeout(function () {
          str3DefNoteD.pause();
          str3DefNoteD.currentTime = 0;
        }, 1100);
        break;

      case (currentAngle === 185):
        console.log(currentAngle);
        str2DefNoteA.currentTime = 0;
        str2DefNoteA.play();
        setTimeout(function () {
          str2DefNoteA.pause();
          str2DefNoteA.currentTime = 0;
        }, 1100);
        break;

      case (currentAngle === 190):
        console.log(currentAngle);
        str1DefNoteESoft.currentTime = 0;
        str1DefNoteESoft.play();
        setTimeout(function () {
          str1DefNoteESoft.pause();
          str1DefNoteESoft.currentTime = 0;
        }, 1100);
        break;

      default:
        break;
    }
  }
});   // Document Ends