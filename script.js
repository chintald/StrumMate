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
  const string6DefaultNoteEHeavy = (defaultPath + '\\E3_default_up_cut.mp3');
  const string5DefaultNoteB = (defaultPath + '\\B3_default_cut.mp3');
  const string4DefaultNoteG = (defaultPath + '\\G3_default_cut.mp3');
  const string3DefaultNoteD = (defaultPath + '\\D3_default_cut.mp3');
  const string2DefaultNoteA = (defaultPath + '\\A2_default_cut.mp3');
  const string1DefaultNoteESoft = (defaultPath + '\\Eb4_default_down_cut.mp3');


  var str1DefNoteESoft = new Audio(string1DefaultNoteESoft);
  var str2DefNoteA = new Audio(string2DefaultNoteA);
  var str3DefNoteD = new Audio(string3DefaultNoteD);
  var str4DefNoteG = new Audio(string4DefaultNoteG);
  var str5DefNoteB = new Audio(string5DefaultNoteB);
  var str6DefNoteEHeavy = new Audio(string6DefaultNoteEHeavy);


  const slider1 = document.getElementById("slider1");
  const slider2 = document.getElementById("slider2");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");
  const btn7 = document.getElementById("btn7");
  const btn8 = document.getElementById("btn8");

  var isFromTop = true;
  let interval = 1000;
  btn7.name = "Top";
  var strDir = 1;
  var audioFiles = [];
  // Get a reference to the audio element
  const audio = new Audio();
  // Define a variable to keep track of the current audio file index
  let currentIndex = 0;
  let sliderVal = 0;

  btn1.onclick = function () { playSingleTone(this, 1) };
  btn2.onclick = function () { playSingleTone(this, 2) };
  btn3.onclick = function () { playSingleTone(this, 3) };
  btn4.onclick = function () { playSingleTone(this, 4) };
  btn5.onclick = function () { playSingleTone(this, 5) };
  btn6.onclick = function () { playSingleTone(this, 6) };

  //set initial position
  btn7.onclick = function () {
    if (isFromTop) {
      isFromTop = false;
      btn7.name = "Top";
      strDir = 1;
      nTimer && clearInterval(nTimer);
      setNewTimer(interval);

    } else {
      isFromTop = true;
      btn7.name = "Bottom";
      strDir = 1;
      nTimer && clearInterval(nTimer);
      setNewTimer(interval);
    }
  }

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

  //Slider listeners
  slider1.addEventListener("input", function () {
    sliderVal = this.value;
    if (this.value == 0) {
      resetLines();
      currentIndex = 0;
      strDir = 1;
      nTimer && clearInterval(nTimer);
    } else {
      nTimer && clearInterval(nTimer);
      setNewTimer(interval);
    }
  });

  slider2.addEventListener("input", function () {
    interval = this.value;
    nTimer && clearInterval(nTimer);
    setNewTimer(this.value);
  });

  // Define a function to play the audio
  function playAudio() {

    // Set the source of the audio element
    audio.src = audioFiles[currentIndex];

    console.log(currentIndex);
    if (isFromTop) {
      if (strDir === 1) {
        // line angle change
        switch (currentIndex) {
          case 0:
            line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
            if (sliderVal == 6) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 6) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 1:
            line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
            if (sliderVal == 5) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 5) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 2:
            line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
            if (sliderVal == 4) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 4) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 3:
            line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
            if (sliderVal == 3) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 3) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 4:
            line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
            if (sliderVal == 2) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 2) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 5:
            line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
            if (sliderVal == 1) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 1) {
              currentIndex = 0;
            }
            else {
              currentIndex = 0;
            }
            break;
        }
      }
      //When click it again..
      else if (strDir === 0) {
        // line angle change
        switch (currentIndex) {
          case 0:
            line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");
            if (sliderVal == 6) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 6) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 1:
            line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
            if (sliderVal == 5) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 5) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 2:
            line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");
            if (sliderVal == 4) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 4) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 3:
            line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");
            if (sliderVal == 3) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 3) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 4:
            line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");
            if (sliderVal == 2) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 2) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 5:
            line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");
            if (sliderVal == 1) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 1) {
              currentIndex = 0;
            }
            else {
              currentIndex = 0;
            }
            break;
        }
      }

    } else {
      //First time click
      if (strDir === 1) {
        // line angle change
        switch (currentIndex) {
          case 0:
            line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
            if (sliderVal == 6) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 6) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 1:
            line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
            if (sliderVal == 5) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 5) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 2:
            line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
            if (sliderVal == 4) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 4) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 3:
            line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
            if (sliderVal == 3) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 3) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 4:
            line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
            if (sliderVal == 2) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 2) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 5:
            line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
            if (sliderVal == 1) {
              strDir = 0;
              currentIndex = 0;
            } else if (sliderVal > 1) {
              currentIndex = 0;
            }
            else {
              currentIndex = 0;
            }
            break;
        }
      }
      //When click it again..
      else if (strDir === 0) {
        // line angle change
        switch (currentIndex) {
          case 0:
            line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");
            if (sliderVal == 6) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 6) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 1:
            line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");
            if (sliderVal == 5) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 5) {
              currentIndex = 0;
            }
            else {

              currentIndex++;
            }
            break;
          case 2:
            line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");
            if (sliderVal == 4) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 4) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 3:
            line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");
            if (sliderVal == 3) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 3) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 4:
            line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
            if (sliderVal == 2) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 2) {
              currentIndex = 0;
            }
            else {
              currentIndex++;
            }
            break;
          case 5:
            line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");
            if (sliderVal == 1) {
              strDir = 1;
              currentIndex = 0;
            } else if (sliderVal > 1) {
              currentIndex = 0;
            }
            else {
              currentIndex = 0;
            }
            break;
        }
      }
    }

    // Play the audio
    audio.play();
  }

  function resetLines() {
    line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");
    line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
    line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");
    line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");
    line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");
    line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");
  }

  //Play individual string
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

  var nTimer = null;

  const setNewTimer = (value = 1000) => {
    if (Number(sliderVal) > 0) {
      nTimer = setInterval(function () {
        playAudio();
      }, value)
    }
  }
});   // Document Ends