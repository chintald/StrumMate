$(document).ready(function () {
  let line = document.getElementById("line");
  line.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");

  let line1 = document.getElementById("line1");
  line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");

  let line2 = document.getElementById("line2");
  line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");

  let line3 = document.getElementById("line3");
  line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");

  let line4 = document.getElementById("line4");
  line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");

  let line5 = document.getElementById("line5");
  line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");

  let line6 = document.getElementById("line6");
  line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");

  let string_pos = [0, 0, 0, 0, 0, 0];
  // Code for Music

  const defaultPath = "steel_string_guitar_sounds";
  const string6DefaultNoteEHeavy = defaultPath + "\\E3_default_up_cut.mp3";
  const string5DefaultNoteA = defaultPath + "\\A2_default_cut.mp3";
  const string4DefaultNoteD = defaultPath + "\\D3_default_cut.mp3";
  const string3DefaultNoteG = defaultPath + "\\G3_default_cut.mp3";
  const string2DefaultNoteB = defaultPath + "\\B3_default_cut.mp3";
  const string1DefaultNoteESoft = defaultPath + "\\Eb4_default_down_cut.mp3";

  let str1DefNoteESoft = new Audio(string1DefaultNoteESoft);
  let str2DefNoteB = new Audio(string2DefaultNoteB);
  let str3DefNoteG = new Audio(string3DefaultNoteG);
  let str4DefNoteD = new Audio(string4DefaultNoteD);
  let str5DefNoteA = new Audio(string5DefaultNoteA);
  let str6DefNoteEHeavy = new Audio(string6DefaultNoteEHeavy);

  const slider1 = document.getElementById("slider1");
  const slider2 = document.getElementById("slider2");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");
  const btn7 = document.getElementById("btn7");

  let isFromTop = true;
  let interval = 1000;
  let audioFiles = [];
  // Get a reference to the audio element
  const audio = new Audio();
  // Define a variable to keep track of the current audio file index
  let currentIndex = 0;
  let sliderVal = 0;

  btn1.onclick = function () {
    playSingleTone(1);
  };
  btn2.onclick = function () {
    playSingleTone(2);
  };
  btn3.onclick = function () {
    playSingleTone(3);
  };
  btn4.onclick = function () {
    playSingleTone(4);
  };
  btn5.onclick = function () {
    playSingleTone(5);
  };
  btn6.onclick = function () {
    playSingleTone(6);
  };

  //set initial position
  btn7.onclick = function () {
    if (isFromTop === true) {
      isFromTop = false;
      btn7.innerHTML = "Current Position: Bottom";
      nTimer && clearInterval(nTimer);
      setNewTimer(interval);
    } else {
      isFromTop = true;
      btn7.innerHTML = "Current Position: Top";
      nTimer && clearInterval(nTimer);
      setNewTimer(interval);
    }
  };

  // Preload the audio files
  audioFiles.forEach((file) => {
    const audio = new Audio();
    audio.src = file;
    audio.load();
  });

  //Slider listeners
  slider1.addEventListener("input", function () {
    sliderVal = this.value;
    if (this.value == 0) {
      currentIndex = 0;
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
    if (isFromTop) {
      audioFiles = [
        string6DefaultNoteEHeavy,
        string5DefaultNoteA,
        string4DefaultNoteD,
        string3DefaultNoteG,
        string2DefaultNoteB,
        string1DefaultNoteESoft,
      ];
    } else {
      audioFiles = [
        string1DefaultNoteESoft,
        string2DefaultNoteB,
        string3DefaultNoteG,
        string4DefaultNoteD,
        string5DefaultNoteA,
        string6DefaultNoteEHeavy,
      ];
    }

    // Set the source of the audio element
    audio.src = audioFiles[currentIndex];
    if (isFromTop) {
      // line angle change
      switch (currentIndex) {
        case 0:
          if (string_pos[0] === 0) {
            string_pos[0] = 1;
            line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
          } else if (string_pos[0] === 1) {
            string_pos[0] = 0;
            line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");
          }
          if (sliderVal == 6) {
            currentIndex = 0;
          } else if (sliderVal > 6) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 1:
          if (string_pos[1] === 0) {
            string_pos[1] = 1;
            line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
          } else if (string_pos[1] === 1) {
            string_pos[1] = 0;
            line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
          }
          // line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
          if (sliderVal == 5) {
            currentIndex = 0;
          } else if (sliderVal > 5) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 2:
          if (string_pos[2] === 0) {
            string_pos[2] = 1;
            line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
          } else if (string_pos[2] === 1) {
            string_pos[2] = 0;
            line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");
          }
          if (sliderVal == 4) {
            currentIndex = 0;
          } else if (sliderVal > 4) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 3:
          if (string_pos[3] === 0) {
            string_pos[3] = 1;
            line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
          } else if (string_pos[3] === 1) {
            string_pos[3] = 0;
            line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");
          }
          if (sliderVal == 3) {
            currentIndex = 0;
          } else if (sliderVal > 3) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 4:
          if (string_pos[4] === 0) {
            string_pos[4] = 1;
            line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
          } else if (string_pos[4] === 1) {
            string_pos[4] = 0;
            line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");
          }
          if (sliderVal == 2) {
            currentIndex = 0;
          } else if (sliderVal > 2) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 5:
          if (string_pos[5] === 0) {
            string_pos[5] = 1;
            line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
          } else if (string_pos[5] === 1) {
            string_pos[5] = 0;
            line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");
          }
          if (sliderVal == 1) {
            currentIndex = 0;
          } else if (sliderVal > 1) {
            currentIndex = 0;
          } else {
            currentIndex = 0;
          }
          break;
      }
    } else {
      
      // line angle change
      switch (currentIndex) {
        case 0:
          if (string_pos[5] === 0) {
            string_pos[5] = 1;
            line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
          } else if (string_pos[5] === 1) {
            string_pos[5] = 0;
            line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");
          }
          if (sliderVal == 6) {
            currentIndex = 0;
          } else if (sliderVal > 6) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 1:
          if (string_pos[4] === 0) {
            string_pos[4] = 1;
            line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
          } else if (string_pos[4] === 1) {
            string_pos[4] = 0;
            line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");
          }
          if (sliderVal == 5) {
            currentIndex = 0;
          } else if (sliderVal > 5) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 2:
          if (string_pos[3] === 0) {
            string_pos[3] = 1;
            line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
          } else if (string_pos[3] === 1) {
            string_pos[3] = 0;
            line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");
          }
          if (sliderVal == 4) {
            currentIndex = 0;
          } else if (sliderVal > 4) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 3:
          if (string_pos[2] === 0) {
            string_pos[2] = 1;
            line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
          } else if (string_pos[2] === 1) {
            string_pos[2] = 0;
            line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");
          }
          if (sliderVal == 3) {
            currentIndex = 0;
          } else if (sliderVal > 3) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 4:
          if (string_pos[1] === 0) {
            string_pos[1] = 1;
            line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
          } else if (string_pos[1] === 1) {
            string_pos[1] = 0;
            line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
          }
          if (sliderVal == 2) {
            currentIndex = 0;
          } else if (sliderVal > 2) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          break;
        case 5:
          if (string_pos[0] === 0) {
            string_pos[0] = 1;
            line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
          } else if (string_pos[0] === 1) {
            string_pos[0] = 0;
            line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");
          }
          if (sliderVal == 1) {
            currentIndex = 0;
          } else if (sliderVal > 1) {
            currentIndex = 0;
          } else {
            currentIndex = 0;
          }
          break;
      }
    }

    // Play the audio
    audio.play();
  }

  //Play individual string
  function playSingleTone(strNum) {
    switch (strNum) {
      case 1:
        if (string_pos[0] === 0) {
          string_pos[0] = 1;
          line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
        } else if (string_pos[0] === 1) {
          string_pos[0] = 0;
          line1.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");
        }

        str6DefNoteEHeavy.currentTime = 0;
        str6DefNoteEHeavy.play();
        setTimeout(function () {
          str6DefNoteEHeavy.pause();
          str6DefNoteEHeavy.currentTime = 0;
        }, 1100);
        break;

      case 2:
        if (string_pos[1] === 0) {
          string_pos[1] = 1;
          line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
        } else if (string_pos[1] === 1) {
          string_pos[1] = 0;
          line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
        }
        str5DefNoteA.currentTime = 0;
        str5DefNoteA.play();
        setTimeout(function () {
          str5DefNoteA.pause();
          str5DefNoteA.currentTime = 0;
        }, 1100);
        break;

      case 3:
        if (string_pos[2] === 0) {
          string_pos[2] = 1;
          line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
        } else if (string_pos[2] === 1) {
          string_pos[2] = 0;
          line3.setAttribute("transform", "rotate(" + 180 + ", 100, 108)");
        }
        str4DefNoteD.currentTime = 0;
        str4DefNoteD.play();
        setTimeout(function () {
          str4DefNoteD.pause();
          str4DefNoteD.currentTime = 0;
        }, 1100);
        break;

      case 4:
        if (string_pos[3] === 0) {
          string_pos[3] = 1;
          line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
        } else if (string_pos[3] === 1) {
          string_pos[3] = 0;
          line4.setAttribute("transform", "rotate(" + 180 + ", 100, 112)");
        }
        str3DefNoteG.currentTime = 0;
        str3DefNoteG.play();
        setTimeout(function () {
          str3DefNoteG.pause();
          str3DefNoteG.currentTime = 0;
        }, 1100);
        break;

      case 5:
        if (string_pos[4] === 0) {
          string_pos[4] = 1;
          line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
        } else if (string_pos[4] === 1) {
          string_pos[4] = 0;
          line5.setAttribute("transform", "rotate(" + 180 + ", 100, 116)");
        }
        str2DefNoteB.currentTime = 0;
        str2DefNoteB.play();
        setTimeout(function () {
          str2DefNoteB.pause();
          str2DefNoteB.currentTime = 0;
        }, 1100);
        break;

      case 6:
        if (string_pos[5] === 0) {
          string_pos[5] = 1;
          line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
        } else if (string_pos[5] === 1) {
          string_pos[5] = 0;
          line6.setAttribute("transform", "rotate(" + 180 + ", 100, 120)");
        }
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

  let nTimer = null;

  const setNewTimer = (value = 1000) => {
    if (Number(sliderVal) > 0) {
      nTimer = setInterval(function () {
        playAudio();
      }, value);
    }
  };
}); // Document Ends
