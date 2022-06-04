var mouseDown = false
var mouseLeave = true

var mouseDown2 = false
var mouseLeave2 = true

var mouseLeave3 = true

var defaultHeight = 3
var hoverHeight = 5

var ThumbTransform = 6.5



var Progress = $("#Progress")

function progressDefault() {
    PlayedBar.style.height = `${defaultHeight}px`
    FullBar.style.height = `${defaultHeight}px`
    SeekBar.style.height = `${defaultHeight}px`
    ThumbBall.style.transform = `translateX(${ThumbTransform}px) scale(0)`

    setTimeout(() => {
        SeekBar.style.opacity = "0%"
        setTimeout(() => {
            SeekBar.style.display = "none"
        }, 100);
    }, 1);

    SeekPanel.style.opacity = "0%"

}
function progressHover() {
    PlayedBar.style.height = `${hoverHeight}px`
    FullBar.style.height = `${hoverHeight}px`
    SeekBar.style.height = `${hoverHeight}px`
    ThumbBall.style.transform = `translateX(${ThumbTransform}px) scale(1)`

    setTimeout(() => {
        setTimeout(() => {
            SeekBar.style.opacity = "100%"
        }, 1);
        SeekBar.style.display = "block"
    }, 100);

    SeekPanel.style.opacity = "100%"

}

Progress.onmouseleave = function() {
    if (mouseDown == false) {
        progressDefault()
    }
    mouseLeave = true
}
Progress.onmouseenter = function() {
    
    progressHover()
    mouseLeave = false
}
// for volume ↓ ▼
$('#volume-slider').onmouseleave = function() {
    if (mouseDown2 == false) {

    }
    mouseLeave2 = true
}
$('#volume-slider').onmouseenter = function() {
    mouseLeave3 = false
}
//  //  //  //  //  //  //  //
$('#volume-area').onmouseleave = function() {
    mouseLeave3 = true
    // console.log(mouseLeave3)
    if (!mouseDown2) {
        $('#volume-panel').style.width = '0px'
    }
    
}
$('#volume-area').onmouseenter = function() {
    mouseLeave3 = false
    $('#volume-panel').style.width = `${CArr[3][0]}px`
    $('#volume-slider-handle').style.left =  (CArr[3][0] - CArr[3][1]) * VP.volume + "px"
}
// for volume ↑ ▲





if (isTouchDevice()) {
    window.ontouchend = (e) => WindowOnEndUp(e.touches[0])
} else {
    window.onmouseup = (e) => WindowOnEndUp(e)
}

function WindowOnEndUp(e) {
    slider1Mousedown = false
    mouseDown = false
    mouseDown2 = false

    progressDefault()
    if (!mouseDown2 && mouseLeave3) {
        $('#volume-panel').style.width = ''
    }

    setTimeout(() => {
        body.style = null
    }, 100);

    html.style = null
}




touchD = null

if (isTouchDevice()) {
    Progress.ontouchstart = (e) => ProgressOnStartDown(e.touches[0])
    touchD = true
} else {
    Progress.onmousedown = (e) => ProgressOnStartDown(e)
    touchD = false
}

function ProgressOnStartDown(e) {
    $('#AudioCanPlay').style.backgroundColor = "red"
    $('#VideoCanPlay').style.backgroundColor = "red"
    canPlayArray[0] = false
    canPlayArray[1] = false
    mouseDown = true

    progressHover()

    setTimeout(() => {
        body.style.pointerEvents = "none"
    }, 100);

    html.style.cursor = "pointer"
    // Player.style.cursor = "pointer"
    
    VP.currentTime = (VP.duration / 100) * ((e.clientX - e.target.getBoundingClientRect().left) / (Progress.offsetWidth / 100))
    if (AudioOn) {
        AP.currentTime = VP.currentTime
    }
    PlayedBar.style.width = (e.clientX - e.target.getBoundingClientRect().left) / (Progress.offsetWidth / 100) + "%"
}

// for volume seek ↓ ▼

if (isTouchDevice()) {
    $('#volume-slider').ontouchstart = (e) => VolumeSliderOnStartDown(e.touches[0])
} else {
    $('#volume-slider').onmousedown = (e) => VolumeSliderOnStartDown(e)
}

function VolumeSliderOnStartDown(e) {
    mouseDown2 = true

    $('#volume-panel').style.width = `${CArr[3][0]}px`

    setTimeout(() => {
        body.style.pointerEvents = "none"
    }, 100);

    html.style.cursor = "pointer"
    // Player.style.cursor = "pointer"
    
    
    VP.volume = (1 / CArr[3][0]) * (e.clientX - e.target.getBoundingClientRect().left)
    AP.volume = VP.volume
    $('#volume-slider-handle').style.left =  (CArr[3][0] - CArr[3][1]) * VP.volume + "px"
}
// for volume ↑ ▲


slider1Mousedown = false




if (isTouchDevice()) {
    window.ontouchmove = (e) => WindowOnMove(e.touches[0])
} else {
    window.onmousemove = (e) => WindowOnMove(e)
}



var playerIsHover = false

var Timeout1

function ControlHideUnhideF(e) {
    if (e && !VP.paused && !sIsOpen && !stayControl) {
        showPlayerItems()
    } else if (VP.paused || sIsOpen || stayControl) {
        showFPlayerItems()
    } else {
        hidePlayerItems()
    }
}


function hidePlayerItems() {
    $("#ControlPanel").style.opacity = 0
    $("#ControlPanel").style.pointerEvents = 'none'
    $("#Player").style.cursor = 'none'

    $("#subtitlePanel").style.bottom = "0px"
}
function showPlayerItems() {
    $("#ControlPanel").style.opacity = 1
    $("#ControlPanel").style.pointerEvents = 'all'
    $("#Player").style.cursor = 'auto'

    $("#subtitlePanel").style.bottom = `${CArr[2][1]}px`

    Timeout1 = setTimeout(() => {
        console.log("TIME")
        $("#ControlPanel").style.opacity = 0
        $("#ControlPanel").style.pointerEvents = 'none'
        $("#Player").style.cursor = 'none'

        $("#subtitlePanel").style.bottom = "0px"
    }, 4000);
}
function showFPlayerItems() {
    $("#ControlPanel").style.opacity = 1
    $("#ControlPanel").style.pointerEvents = 'all'
    $("#Player").style.cursor = 'auto'

    $("#subtitlePanel").style.bottom = `${CArr[2][1]}px`
}

document.onmouseleave = () => {
    // console.log('out')
    DMLeave = true
    if (!VP.paused && !sIsOpen) {
        hidePlayerItems()
    }
    
}
document.onmouseenter = () => {
    // console.log('in')
    DMLeave = false
}

DMLeave = null

function PlayerMoveF(e) {

    if (e.path.includes($('#Player'))) {
        playerIsHover = true
    } else {
        playerIsHover = false
    }
    clearTimeout(Timeout1)
    ControlHideUnhideF(playerIsHover)
}

function PlayerMoveF2(e) {

    if (e.target.id == 'PlayerContent') {
        playerIsHover = true
    } else {
        playerIsHover = false
    }
    clearTimeout(Timeout1)
    ControlHideUnhideF(playerIsHover)
}


function WindowOnMove(e) {

    if (touchD) {
        PlayerMoveF2(e)
    } else {
        PlayerMoveF(e)
    }
    
    BTNtitleHover(e.path[0])
    
    // for progress seek ↓ ▼
    if (mouseDown == true) {
        $('#AudioCanPlay').style.backgroundColor = "red"
        $('#VideoCanPlay').style.backgroundColor = "red"
        canPlayArray[0] = false
        canPlayArray[1] = false

        VP.currentTime = (VP.duration / 100) * ((e.clientX - Progress.getBoundingClientRect().left) / (Progress.offsetWidth / 100))
        if (AudioOn) {
            AP.currentTime = VP.currentTime
        }
        PlayedBar.style.width = (e.clientX - Progress.getBoundingClientRect().left) / (Progress.offsetWidth / 100) + "%"
        seekF(e)
        showFPlayerItems()
    }
    if (mouseLeave == false) {
        seekF(e)
    }
    // for progress seek ↑ ▲

    // // // // // // // // // // // //

    // for volume ↓ ▼
    if (mouseDown2 == true) {
        seekF2(e)
        VP.volume = seekvindex
        AP.volume = VP.volume
        $('#volume-slider-handle').style.left = (CArr[3][0] - CArr[3][1]) * VP.volume + "px"
        showFPlayerItems()
    }
    if (mouseLeave2 == false) {
        // seekF2(e)
    }
    // for volume ↑ ▲

    // // // // // // // // // // // //

    // for playbackRate↓ ▼
    // slider1Mousedown = false
    if (slider1Mousedown) {
        showFPlayerItems()
        
        panelmenu2item0.style.display = 'flex'
        removeMIA21()
        panelmenu2item0.ariaChecked = true
        

        slider1Xindex = (e.clientX - slider1.getBoundingClientRect().left)
        if (slider1Xindex < 0) {
            slider1Xindex = 0
        }
        if (slider1Xindex > 150) {
            slider1Xindex = 150
        }

        slider1Xindex = Math.ceil(slider1Xindex * 0.2333333333333333)


        slider1Xindex = slider1Xindex + 5

        // console.log(Math.floor(((2 / 40) * slider1Xindex) * 100) / 100);
        slider1Index.innerText = Math.floor(((2 / 40) * slider1Xindex) * 100) / 100 + 'x'
        menuitemC2.innerText = `Custom(${Math.floor(((2 / 40) * slider1Xindex) * 100) / 100})`
        spAr[0] = Math.floor(((2 / 40) * slider1Xindex) * 100) / 100
        VP.playbackRate = spAr[0]
        menuitemC2.innerText = `Costom(${spAr[0]})`
        panelmenu2item0.innerText = `Costom(${spAr[0]})`

        slider1Xindex = slider1Xindex - 5


        slider1Xindex = (130 / 35) * slider1Xindex


        slider1Thumb.style.transform = `translateX(${slider1Xindex}px) translateY(-8px)`
        // console.log(slider1Xindex);
        cMIS()
    }
    function removeMIA21() {
        panelmenu2item0.ariaChecked = false
        panelmenu2item1.ariaChecked = false
        panelmenu2item2.ariaChecked = false
        panelmenu2item3.ariaChecked = false
        panelmenu2item4.ariaChecked = false
        panelmenu2item5.ariaChecked = false
        panelmenu2item6.ariaChecked = false
        panelmenu2item7.ariaChecked = false
        panelmenu2item8.ariaChecked = false
    }
    

    // for playbackRate↑ ▲

}

// for volume seek ↓ ▼
function seekF2(e) {
    seekvindex = (1 / CArr[3][0]) * (e.clientX - $('#volume-slider').getBoundingClientRect().left)
    if (seekvindex > 1) {
        seekvindex = 1
    }
    if (seekvindex < 0) {
        seekvindex = 0
    }
}
// for volume seek ↑ ▲


// for progress seek ↓ ▼
function seekF(e) {
    
    seektimeTransform(e)

    seekctindex = (VP.duration / 100) * ((e.clientX - Progress.getBoundingClientRect().left) / (Progress.offsetWidth / 100))
    SeekBar.style.width = (e.clientX - Progress.getBoundingClientRect().left) / (Progress.offsetWidth / 100) + "%"
    if (seekctindex > VP.duration) {
        seekctindex = VP.duration
        SeekBar.style.width = `${100}%`
    }
    if (seekctindex < 0) {
        seekctindex = 0
        SeekBar.style.width = `${0}%`
    }
    
    seekTimeF(seekctindex)
}

function seekTimeF(e) {
    CT = e
    if (e > VP.duration) {
        e = VP.duration
    }
    if (e < 0) {
        e = 0
    }

    CH = Math.floor(CT / 3600)
    CM = Math.floor((CT / 3600 - CH) * 60)
    CS = Math.floor(((CT / 3600 - CH) * 60 - CM) * 60)

    if (CM < 10 && CH >= 1) {
        CM = `0${CM}`
    }
    if (CS < 10) {
        CS = `0${CS}`
    }
    
    if (CT < 3600) {
        SeekTime.innerText = `${CM}:${CS}`
    } else {
        SeekTime.innerText = `${CH}:${CM}:${CS}`
    }

    // SeekTime.style.left = SeekTime.offsetWidth / 2 + "px"
}
// for progress seek ↑ ▲



// TEST
$('#prev-button').style.display = "none"
// $('#play-button').style.display = "none"
$('#next-button').style.display = "none"
// $('#mute-button').style.display = "none"

// $('#subtitles-button').style.display = "none"
// $('#settings-button').style.display = "none"
$('#multicam-button').style.display = "none"
$('#miniplayer-button').style.display = "none"
// $('#pip-button').style.display = "none"
// $('#original-button').style.display = "none"
// $('#size-button').style.display = "none"
$('#remote-button').style.display = "none"
// $('#fullscreen-button').style.display = "none"
// TEST


toggleSettingsA = false
$$('.button').forEach(e => e.onclick = function() {
    if (e.id == 'prev-button') {
        console.log(e)
    }
    if (e.id == 'play-button') {
        togglePlayPause()
    }
    if (e.id == 'next-button') {
        console.log(e)
    }
    if (e.id == 'mute-button') {
        toggleMute()
    }
    if (e.id == 'subtitles-button') {
        toggleSubtitle();
    }
    if (e.id == 'settings-button') {
        toggleSettings()

        if (toggleSettingsA) {

        } else {

            toggleSettingsA = true
            
            setTimeout(() => {
                toggleSettingsA = false
            }, 200);
            
        }
    }
    if (e.id == 'multicam-button') {
        console.log(e)
    }
    if (e.id == 'miniplayer-button') {
        console.log(e)
    }
    if (e.id == 'pip-button') {
        togglePictureInPicture()
    }
    if (e.id == 'original-button') {
        toggleOriginal()
    }
    if (e.id == 'size-button') {
        toggleSize()
    }
    if (e.id == 'remote-button') {
        console.log(e)
    }
    if (e.id == 'fullscreen-button') {
        toggleFullScreen()
    }
})




// Play Pause Replay Button
VP.onplay = () => {
    // ResetSvgStyle()
    $('#play-button').children[0].children[0].setAttribute("d", "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z")
    VPonPlayPause()
    showPlayerItems()

    navigator.mediaSession.playbackState = 'playing'
    mediaSR()

    $("#play-button").setAttribute('title', 'Pause (k)')
    $("#titleDiv").innerText = 'Pause (k)'
}
VP.onpause = () => {
    // ResetSvgStyle()
    $('#play-button').children[0].children[0].setAttribute("d", "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z")
    VPonPlayPause()
    showFPlayerItems()

    navigator.mediaSession.playbackState = 'paused'
    mediaSR()

    $("#play-button").setAttribute('title', 'Play (k)')
    $("#titleDiv").innerText = 'Play (k)'
}

AP.onplay = () => {
    // ResetSvgStyle()
    $('#play-button').children[0].children[0].setAttribute("d", "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z")

    showPlayerItems()
    // onPlay2()
}
AP.onpause = () => {
    // ResetSvgStyle()
    $('#play-button').children[0].children[0].setAttribute("d", "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z")

    showFPlayerItems()
    // onPause2()
}


VP.onended = () => $('#play-button').children[0].children[0].setAttribute("d", "M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z")
// Play Pause Replay Button

// Mute Unmute Button

VP.onvolumechange = () => {
    // ResetSvgStyle()

    if (mouseDown2) {
        
        $("#volume-panel").setAttribute('aria-valuenow', Math.floor(VP.volume * 100))

        if (VP.muted) {
            $('#muted').setAttribute("d", "M 8 10.25 L 24.75 27 L 26 25.75 L 9.25 9 Z")
            $('#mute-full-svg').setAttribute("d", "M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z")
        } else {
            if (VP.volume > 0.5) {
                $('#mute-full-svg').setAttribute("d", "M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z")
            }
            $("#volume-panel").setAttribute('title', Math.round(VP.volume * 100) + "%")
        }
    
        if (VP.volume == 0) {
            VP.muted = true
            AP.muted = true
            $("#mute-button").setAttribute('title', 'Unmute (m)')
        } else {
            $('#mute-full-svg').setAttribute("d", "M 19 11.29 C 21.89 12.15 24 14.83 24 18 C 24 21.17 21.89 23.85 19 24.71 L 19 24.71 C 21.89 23.85 24 21.17 24 18 C 24 14.83 21.89 12.15 19 11.29 L 19 11.29 Z")
            VP.muted = false
            AP.muted = false
            $("#mute-button").setAttribute('title', 'Mute (m)')
        }
        
    }

    mutebtnicon()
    volumeIndex = Math.round(VP.volume * 100 / 5)
    VP.muted ? $("#mute-button").setAttribute('title', 'Unmute (m)') : $("#mute-button").setAttribute('title', 'Mute (m)')
    
}

// Mute Unmute Button








var fIndex = 1

var CArr = []
fullScreenSizeF()
function fullScreenSizeF() {
    if (fIndex == 0) {
        CArr = [[4.8, 8, 20], [24, 19], [54, 78], [78, 18, 'b'], [1, 240]]
    }

    if (fIndex == 1) {
        CArr = [[3, 5, 13], [16, 11], [48, 64], [52, 12, 'a'], [0, 160]]
    }

    if (fIndex == 2) {
        CArr = [[3, 5, 13], [16, 11], [36, 52], [52, 12, 'a'], [0, 160]]
    }

    defaultHeight = CArr[0][0]
    hoverHeight = CArr[0][1]
    ThumbSize = CArr[0][2]
    ThumbTransform = CArr[0][2] / 2
    
    ProgressBar.style.height = `${CArr[1][0]}px`
    Progress.style.paddingTop = `${CArr[1][1]}px`
    
    Controls.style.height = `${CArr[2][0]}px`
    
    $$('.button').forEach(e => {
        e.style.setProperty('width', `${CArr[2][0]}px`)
    })

    ControlPanel.style.bottom = `${CArr[2][1]}px`
    SettingPanel.style.bottom = `${CArr[2][1]}px`
    SeekPanel.style.bottom = `${CArr[2][1]}px`
    TitlePanel.style.bottom = `${CArr[2][1]}px`

    ThumbBall.style.width = ThumbSize + "px"
    ThumbBall.style.height = ThumbSize + "px"

    // $('#volume-panel').style.width = `${CArr[3][0]}px`
    $('#volume-slider-handle').style.width = `${CArr[3][1]}px`
    $('#volume-slider-handle').style.height = `${CArr[3][1]}px`
    $('#volume-slider-handle').style.marginTop = `-${CArr[3][1] / 2}px`
    $('#volume-slider-handle').className = `v-s-h v-s-h_${CArr[3][2]}`
    // $('#volume-slider-handle').style.left =  (CArr[3][0] - CArr[3][1]) * VP.volume + "px"
    progressDefault()
    
    previewRefresh()
}
function previewRefresh() {
    PreviewSize = CArr[4][1]
    PrevieWVideoQ = CArr[4][0]
    PreviewURL = ''.concat('Source/PreviewVideo/1080Preview',PrevieWVideoQ ,'.mp4')
}




var btnCount = 0
function btnCounter() {

    btnCount = 0

    $$('.button').forEach(e => {
        let localValue = e.valueOf().style.display
        if (localValue == "") {
            btnCount++
        }
    })

    getControlSize()
}

function getControlSize() {

    if ((btnCount * 48) + $("#time-display").offsetWidth + $("#chapter-container").offsetWidth + CArr[3][0] > $("#Controls").offsetWidth) {
        fIndex = 2
    }
    else {
        if (fullS) {
            fIndex = 0
        } else {
            fIndex = 1
        }
        
    }
}


// Big 0
// 24
// 54

// Normal 1
// 16
// 48

// Small 2
// 16
// 36






$('#fullscreen-button').onmouseenter = () => {
    $('.ytp-fullscreen-button-corner-a0').style.transform = 'translateX(-2.5%) translateY(-2.5%)'
    $('.ytp-fullscreen-button-corner-a1').style.transform = 'translateX(2.5%) translateY(-2.5%)'
    $('.ytp-fullscreen-button-corner-a2').style.transform = 'translateX(2.5%) translateY(2.5%)'
    $('.ytp-fullscreen-button-corner-a3').style.transform = 'translateX(-2.5%) translateY(2.5%)'

    setTimeout(() => {
        $('.ytp-fullscreen-button-corner-a0').style.transform = 'translateX(0%) translateY(0%)'
        $('.ytp-fullscreen-button-corner-a1').style.transform = 'translateX(0%) translateY(0%)'
        $('.ytp-fullscreen-button-corner-a2').style.transform = 'translateX(0%) translateY(0%)'
        $('.ytp-fullscreen-button-corner-a3').style.transform = 'translateX(0%) translateY(0%)'
    }, 250);

    $('.ytp-fullscreen-button-corner-b0').style.transform = 'translateX(-2.5%) translateY(-2.5%)'
    $('.ytp-fullscreen-button-corner-b1').style.transform = 'translateX(2.5%) translateY(-2.5%)'
    $('.ytp-fullscreen-button-corner-b2').style.transform = 'translateX(2.5%) translateY(2.5%)'
    $('.ytp-fullscreen-button-corner-b3').style.transform = 'translateX(-2.5%) translateY(2.5%)'

    setTimeout(() => {
        $('.ytp-fullscreen-button-corner-b0').style.transform = 'translateX(0%) translateY(0%)'
        $('.ytp-fullscreen-button-corner-b1').style.transform = 'translateX(0%) translateY(0%)'
        $('.ytp-fullscreen-button-corner-b2').style.transform = 'translateX(0%) translateY(0%)'
        $('.ytp-fullscreen-button-corner-b3').style.transform = 'translateX(0%) translateY(0%)'
    }, 250);
}
