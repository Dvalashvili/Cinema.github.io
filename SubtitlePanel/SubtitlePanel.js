var tracks = $('#Video').textTracks

for (var i = 0; i < tracks.length; i++) {
  var track = tracks[i]
}

let cues
track.oncuechange = function() {
  // console.log("CHANGE");
  cues = track.activeCues; // array of current cues
  // console.log("1");
  if (track.activeCues.length > 0) {
    subcuetext = track.activeCues[0].text.replace('\n', '<br>')

    setTimeout(function() {
      SCTS.innerHTML = subcuetext
    }, 1)
  } else {
    subcuetext = ''
    setTimeout(function() {
      SCTS.innerHTML = subcuetext
    }, 1)
  }
}

var subcuetext = ''



// cueS

function GLSCS() {
  localStorage.setItem('cueS', JSON.stringify(sSA));

  g = localStorage.getItem('cueS');
  
//   console.log(g);
}

if (localStorage.hasOwnProperty('cueS')) {
    sSA = JSON.parse(localStorage.getItem('cueS'))
    
} else {
    localStorage.setItem('cueS', JSON.stringify(sSA));
}
// console.log(localStorage.getItem('cueS'));
GLSCS()

cAriaChecked()
function cAriaChecked() {
    removeMIA310()
    removeMIA311()
    removeMIA312()
    removeMIA313()
    removeMIA314()
    removeMIA315()
    removeMIA316()
    removeMIA317()
    removeMIA318()

    menuitemC30.innerText = sSA[0]
    menuitemC31.innerText = sSA[1]
    menuitemC32.innerText = sSA[2] + "%"
    menuitemC33.innerText = sSA[3]
    menuitemC34.innerText = sSA[4] + "%"
    menuitemC35.innerText = sSA[5]
    menuitemC36.innerText = sSA[6] + "%"
    menuitemC37.innerText = sSA[7]
    menuitemC38.innerText = sSA[8] + "%"

    $(`#panelmenu310item${sfAr.indexOf(sSA[0])}`).ariaChecked = true
    $(`#panelmenu311item${scAr.indexOf(sSA[1])}`).ariaChecked = true
    $(`#panelmenu312item${sfsAr.indexOf(sSA[2])}`).ariaChecked = true
    $(`#panelmenu313item${scAr.indexOf(sSA[3])}`).ariaChecked = true
    $(`#panelmenu314item${soAr.indexOf(sSA[4])}`).ariaChecked = true
    $(`#panelmenu315item${scAr.indexOf(sSA[5])}`).ariaChecked = true
    $(`#panelmenu316item${soAr.indexOf(sSA[6])}`).ariaChecked = true
    $(`#panelmenu317item${seAr.indexOf(sSA[7])}`).ariaChecked = true
    $(`#panelmenu318item${soAr.indexOf(sSA[8]) - 1}`).ariaChecked = true
}
// CUE(cue) Style
function changeCueStyle() {
  setTimeout(() => {
    setCueStyle()

    GLSCS()
  }, 100);
//   console.log("Changed!");
}

setCueStyle()

function setCueStyle() {
  SCTS.style.fontFamyly = sSA[0]
  SCTS.style.color = ToRGBa(sSA[1], sSA[8])
  SCTS.style.fontSize = sSA[2] + 50 + "%"

  SCTS.style.backgroundColor = ToRGBa(sSA[3], sSA[4])

  subcuespan.style.backgroundColor = ToRGBa(sSA[5], sSA[6])

  SCTS.style.textShadow = ToTS(sSA[7])
  // sSAr

}

function ToRGBa(c, o) {
  if (c == scAr[0]) {
    return `rgba(255, 255, 255, ${o}%)`
  }
  if (c == scAr[1]) {
    return `rgba(255, 255, 0, ${o}%)`
  }
  if (c == scAr[2]) {
    return `rgba(0, 255, 0, ${o}%)`
  }
  if (c == scAr[3]) {
    return `rgba(0, 255, 255, ${o}%)`
  }
  if (c == scAr[4]) {
    return `rgba(0, 0, 255, ${o}%)`
  }
  if (c == scAr[5]) {
    return `rgba(255, 0, 255, ${o}%)`
  }
  if (c == scAr[6]) {
    return `rgba(255, 0, 0, ${o}%)`
  }
  if (c == scAr[7]) {
    return `rgba(0, 0, 0, ${o}%)`
  }
}

function ToTS(s) {
  if (s == seAr[0]) {
    return `none`
  }
  if (s == seAr[1]) {
    return `1px 1px 4px rgb(0, 0, 0), -1px -1px 4px rgb(0, 0, 0), rgb(0 0 0) -1px 1px 4px, rgb(0 0 0) 1px -1px 4px`
  }
  if (s == seAr[2]) {
    return `1px 1px 0px rgb(0, 0, 0), 2px 2px 0px rgb(0, 0, 0)`
  }
  if (s == seAr[3]) {
    return `1px 1px 0px rgb(255, 255, 255), 2px 2px 0px rgb(255, 255, 255)`
  }
  if (s == seAr[4]) {
    return `-1px -1px 0px rgb(0, 0, 0), 1px -1px 0px rgb(0, 0, 0), -1px 1px 0px rgb(0, 0, 0), 1px 1px 0px rgb(0, 0, 0)`
  }
}


function ResetCueStyle() {
//   console.log("Reseted!");
  sSA = [sfAr[3], scAr[0], sfsAr[2], scAr[7], soAr[3], scAr[7], soAr[0], seAr[0], soAr[4]]
  setCueStyle()
  GLSCS()
  cAriaChecked()
}
