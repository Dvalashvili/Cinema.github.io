var Allowed = true
window.onkeydown = function(e) {
    checkPBC(e)
    if (Allowed) {
        if (e.which == 75 || e.which == 32) {
            togglePlayPause()
        }
    
        if (e.which == 67) {
            toggleSubtitle()
        }
        if (e.which == 77 && !safeMute) {
            toggleMute()
        }
        if (e.which == 70) {
            toggleFullScreen()
        }
        if (e.which == 84) {
            toggleSize()
        }
        // if (e.which == 73) {
        //     for miniplayer
        // }
        if (e.which == 80) {
            togglePictureInPicture()
        }
    
        if (e.which >= 48 && e.which <= 57) {
            VP.currentTime = (VP.duration / 10) * (e.which - 48)
        }
        if (e.which == 188 && VP.paused) {
            VP.currentTime -= 1 / videoFrameRate
        }
        if (e.which == 190 && VP.paused) {
            VP.currentTime += 1 / videoFrameRate
        }
        if (e.which == 39) {
            VP.currentTime += 5
        }
        if (e.which == 37) {
            VP.currentTime -= 5
        }
        if (e.which == 76) {
            VP.currentTime += 10
        }
        if (e.which == 74) {
            VP.currentTime -= 10
        }
    
        if (e.which == 38) {
            volumeIndex++
        }
        if (e.which == 40) {
            volumeIndex--
        }
    
        if (e.which == 13) {
            document.activeElement.click()
        }
    
    
        if (e.which == 72 && !togglekeyHA) {
            if (playerIsClear) {
                playerIsClear = false
    
                ControlPanel.style.display = 'block'
                SettingPanel.style.display = 'flex'
                mainTestIndex.style.display = 'block'
    
                setTimeout(() => {
                    ControlPanel.style.opacity = 1
                    SettingPanel.style.opacity = 1
                    mainTestIndex.style.opacity = 1
                }, 0);
            } else {
                playerIsClear = true
    
                ControlPanel.style.transitionDuration = '.2s'
                SettingPanel.style.transitionDuration = '.2s'
                mainTestIndex.style.transitionDuration = '.2s'
    
                ControlPanel.style.opacity = 0
                SettingPanel.style.opacity = 0
                mainTestIndex.style.opacity = 0
    
                setTimeout(() => {
                    ControlPanel.style.display = 'none'
                    SettingPanel.style.display = 'none'
                    mainTestIndex.style.display = 'none'
    
                }, 1000);
                
            }
        }
    
        if (togglekeyHA) {
            // console.log("Wait...")
        } else {
        
            togglekeyHA = true
            
            setTimeout(() => {
                togglekeyHA = false
                // console.log("Ready")
    
            }, 200);
            
        }
        afterKeyDown()


        if (e.which == 103) {
            delay = delay - 10
            console.log("-");
            console.log(delay)
        }
        if (e.which == 105) {
            delay = delay + 10
            console.log("+");
            console.log(delay)
        }
        if (e.which == 100) {
            delay = delay - 100
            console.log("-");
            console.log(delay)
        }
        if (e.which == 102) {
            delay = delay + 100
            console.log("+");
            console.log(delay)
        }
        if (e.which == 97) {
            delay = delay - 1000
            console.log("-");
            console.log(delay)
        }
        if (e.which == 99) {
            delay = delay + 1000
            console.log("+");
            console.log(delay)
        }
    }
    
}

videoFrameRate = 23.98

setTimeout(() => {
    console.log(new Event(onmouseover));
}, 4000);

function afterKeyDown() {
    if (volumeIndex > 20) {
        volumeIndex = 20
    }
    if (volumeIndex < 0) {
        volumeIndex = 0
    }

    if (volumeIndex == 0) {
        VP.muted = true
    } else {
        VP.muted = false
    }

    VP.volume = volumeIndex / 20
    $('#volume-slider-handle').style.left =  (CArr[3][0] - CArr[3][1]) * VP.volume + "px"
    $("#volume-panel").setAttribute('aria-valuenow', Math.round(VP.volume * 100))
    if (!mouseLeave3) {
        $("#titleDiv").innerText = $("#volume-panel").getAttribute('aria-valuenow') + "%"
    }
    
    // console.log(volumeIndex);
}


$('#volume-slider').onfocus = function(e) {
    console.log(e);
}

var volumeIndex = VP.volume * 20

togglekeyHA = false

var playerIsClear = false




// For Alert && Console.Log
function L(e) {
    console.log(e)
}
function A(e) {
    alert(e)
}




// party background color
var KeyWord = ''
var isAWESOME = false
function toggleAWESOME() {
    if (isAWESOME) {
        isAWESOME = false
        PlayedBar.className = ''
    } else {
        isAWESOME = true
        PlayedBar.className = 'PBC'
    }
}

var safeMute = false

function checkPBC(e) {
    KeyWord = KeyWord + e.key
    KeyWord = KeyWord.slice(-7)

    if (KeyWord.indexOf('awesome') == 0) {
        toggleAWESOME()
    }
    if (KeyWord.slice(-5).indexOf('aweso') == 0 || KeyWord.slice(-6).indexOf('awesom') == 0) {
        safeMute = true
    } else {
        safeMute = false
    }
}