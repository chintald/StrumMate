$(document).ready(function () {
  let line = document.getElementById("line");
  line.setAttribute("transform", "rotate(" + 180 + ", 100, 100)");

  // String position initialization
  for (let i = 1; i <= 6; i++) {
    let line = document.getElementById(`line${i}`);
    line.setAttribute("transform", `rotate(${180}, 100, ${100 + (i - 1) * 4})`);
  }

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
  const btn7 = document.getElementById("btn7");

  let isFromTop = true;
  let interval = 1000;
  let audioFiles = [];
  // Get a reference to the audio element
  const audio = new Audio();

  // Define a variable to keep track of the current audio file index
  let currentIndex = 0;
  let sliderVal = 0;

  // Buttons click listener
  const buttons = document.querySelectorAll('.tone-button');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      playSingleTone(index + 1);
    });
  });

  //set initial position for Top/Bottom button
  btn7.onclick = function () {
    isFromTop = !isFromTop;
    btn7.innerHTML = `Current Position: ${isFromTop ? 'Top' : 'Bottom'}`;
    nTimer && clearInterval(nTimer);
    setNewTimer(interval);
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
  let strings = [
    { pos: 0, line: line1, note: str6DefNoteEHeavy },
    { pos: 0, line: line2, note: str5DefNoteA },
    { pos: 0, line: line3, note: str4DefNoteD },
    { pos: 0, line: line4, note: str3DefNoteG },
    { pos: 0, line: line5, note: str2DefNoteB },
    { pos: 0, line: line6, note: str1DefNoteESoft },
  ];

  function toggleStringPosition(strNum) {
    let str = strings[strNum - 1];
    if (str.pos === 0) {
      str.pos = 1;
      str.line.setAttribute("transform", "rotate(" + 185 + ", 100, " + (100 + (strNum - 1) * 4) + ")");
    } else if (str.pos === 1) {
      str.pos = 0;
      str.line.setAttribute("transform", "rotate(" + 180 + ", 100, " + (100 + (strNum - 1) * 4) + ")");
    }
  }

  // Play individual string
  function playSingleTone(strNum) {
    toggleStringPosition(strNum);
    let str = strings[strNum - 1];
    str.note.currentTime = 0;
    str.note.play();
    setTimeout(function () {
      str.note.pause();
      str.note.currentTime = 0;
    }, 1100);
  }

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
          if (strings[0].pos === 0) {
            strings[0].pos = 1;
            line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
          } else if (strings[0].pos === 1) {
            strings[0].pos = 0;
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
          if (strings[1].pos === 0) {
            strings[1].pos = 1;
            line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
          } else if (strings[1].pos === 1) {
            strings[1].pos = 0;
            line2.setAttribute("transform", "rotate(" + 180 + ", 100, 104)");
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
          if (strings[2].pos === 0) {
            strings[2].pos = 1;
            line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
          } else if (strings[2].pos === 1) {
            strings[2].pos = 0;
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
          if (strings[3].pos === 0) {
            strings[3].pos = 1;
            line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
          } else if (strings[3].pos === 1) {
            strings[3].pos = 0;
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
          if (strings[4].pos === 0) {
            strings[4].pos = 1;
            line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
          } else if (strings[4].pos === 1) {
            strings[4].pos = 0;
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
          if (strings[5].pos === 0) {
            strings[5].pos = 1;
            line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
          } else if (strings[5].pos === 1) {
            strings[5].pos = 0;
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
          if (strings[5].pos === 0) {
            strings[5].pos = 1;
            line6.setAttribute("transform", "rotate(" + 185 + ", 100, 120)");
          } else if (strings[5].pos === 1) {
            strings[5].pos = 0;
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
          if (strings[4].pos === 0) {
            strings[4].pos = 1;
            line5.setAttribute("transform", "rotate(" + 185 + ", 100, 116)");
          } else if (strings[4].pos === 1) {
            strings[4].pos = 0;
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
          if (strings[3].pos === 0) {
            strings[3].pos = 1;
            line4.setAttribute("transform", "rotate(" + 185 + ", 100, 112)");
          } else if (strings[3].pos === 1) {
            strings[3].pos = 0;
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
          if (strings[2].pos === 0) {
            strings[2].pos = 1;
            line3.setAttribute("transform", "rotate(" + 185 + ", 100, 108)");
          } else if (strings[2].pos === 1) {
            strings[2].pos = 0;
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
          if (strings[1].pos === 0) {
            strings[1].pos = 1;
            line2.setAttribute("transform", "rotate(" + 185 + ", 100, 104)");
          } else if (strings[1].pos === 1) {
            strings[1].pos = 0;
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
          if (strings[0].pos === 0) {
            strings[0].pos = 1;
            line1.setAttribute("transform", "rotate(" + 185 + ", 100, 100)");
          } else if (strings[0].pos === 1) {
            strings[0].pos = 0;
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

  let nTimer = null;

  const setNewTimer = (value = 1000) => {
    if (Number(sliderVal) > 0) {
      nTimer = setInterval(function () {
        playAudio();
      }, value);
    }
  };
}); // Document Ends
