$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

$('#Player').style.backgroundColor = 'black'
// $$('div').forEach(div => div.style.background = 'orange')

var html = document.querySelector("html")
var body = document.querySelector("body")

var VP = document.getElementById("Video")
var AP = document.getElementById("Audio")
// VP.load()
// AP.load()

window.onresize = function() {
    resolutionChange()
}

RealVideoSize = false

setTimeout(() => {
    resolutionChange()
}, 2000);

function resolutionChange() {

    // setTimeout(() => {
    //     setPreviewSize()
    // }, 1000);
    

    offSetting()

    // forPlayerH()

    btnCounter()

    fullScreenSizeF()
    VPreview.src = PreviewURL

    setTimeout(() => {

        if (originalSizeOn) {
            realSize()
            // console.log("realSize");
        } else {
            defaultSize()
            // console.log("defaultSize");
        }
        
        // forTestF()

    }, 500)
}


function defaultSize() {
    VP.style.height = 'auto'
    VP.style.width = Player.offsetWidth + "px"

    if (Player.offsetWidth / (VP.videoWidth / VP.videoHeight) > Player.offsetHeight) {
        VP.style.height = Player.offsetHeight + "px"
        VP.style.width = 'auto'
    }
    if (Player.offsetWidth / (VP.videoWidth / VP.videoHeight) < Player.offsetHeight) {
        VP.style.height = 'auto'
        VP.style.width = Player.offsetWidth + "px"
    }


    if (!document.fullscreenElement) {
        VP.style.width = "100%"
        VP.style.height = 'auto'
        Player.style.height = Video.offsetHeight + "px"  
    }

}
function realSize() {
    $("#Video").style.width = ""
    $("#Video").style.height = ""
    VideoWidth = VP.videoWidth
    VideoHeight = VP.videoHeight
    // console.log(VideoWidth + "x" + VideoHeight)
    $("#Video").style.width = VideoWidth
    $("#Video").style.height = VideoHeight

    Player.style.height = Video.offsetHeight + "px"
}

// ViewSize = 100
// function setPreviewSize() {
    
//     if (Player.offsetHeight > Player.offsetWidth) {
//         if (!originalSizeOn) {
//             PlayerViewSize.style.width = Player.offsetWidth / (Player.offsetHeight / ViewSize) + 'px'
//             PlayerViewSize.style.height = ViewSize + "px"
    
//             VideoViewSize.style.width = PlayerViewSize.offsetWidth + "px"
//             VideoViewSize.style.height = PlayerViewSize.offsetHeight + "px"
//         } else {
//             PlayerViewSize.style.width = Player.offsetWidth / (Player.offsetHeight / ViewSize) + 'px'
//             PlayerViewSize.style.height = ViewSize + "px"
    
//             VideoViewSize.style.width = VP.videoWidth / (Player.offsetHeight / ViewSize) + "px"
//             VideoViewSize.style.height = VP.videoHeight / (Player.offsetHeight / ViewSize) + "px"
//             console.log();
//         }
//     } else {
//         if (!originalSizeOn) {
//             PlayerViewSize.style.width = ViewSize + 'px'
//             PlayerViewSize.style.height = Player.offsetHeight / (Player.offsetWidth / ViewSize) + "px"
    
//             VideoViewSize.style.width = PlayerViewSize.offsetWidth + "px"
//             VideoViewSize.style.height = PlayerViewSize.offsetHeight + "px"
//         } else {
//             PlayerViewSize.style.width = ViewSize + 'px'
//             PlayerViewSize.style.height = Player.offsetHeight / (Player.offsetWidth / ViewSize) + "px"
    
//             VideoViewSize.style.width = VP.videoWidth / (Player.offsetWidth / ViewSize) + "px"
//             VideoViewSize.style.height = VP.videoHeight / (Player.offsetWidth / ViewSize) + "px"
//             console.log();
//         }
//     }

// }

// 1600 = 100
// 1600 / 100 = 16   //   900 / 16 = 56.25
// 
// 
// 16
// 100 X 56.25
// 1600 900
// 1920 / 16 = 120   //   800 / 16 = 50
// 1920 800

function forTestF() {
    // console.clear()
    // console.log(Player.offsetHeight)
    // console.log(Player.offsetWidth)
    console.log(Player.offsetHeight + ' x ' + Player.offsetWidth + " Player")
    console.log(VP.offsetHeight + ' x ' + VP.offsetWidth + " Video")
    console.log(VP.videoHeight + ' x ' + VP.videoWidth + " resolution")

    console.log(VP.videoWidth / VP.videoHeight)
    // console.log(Player.offsetWidth / (VP.videoWidth / VP.videoHeight))

    console.log(Player.offsetHeight * (VP.videoWidth / VP.videoHeight))

    testI.innerHTML = Player.offsetHeight + ' x ' + Player.offsetWidth + " Player" + '<br>' + VP.offsetHeight + ' x ' + VP.offsetWidth + " Video" + '<br>' + VP.videoHeight + ' x ' + VP.videoWidth + " resolution"
}



var canPlayArray = [false, false]

VP.oncanplay = function() {
    $('#VideoCanPlay').style.backgroundColor = "Green"
    console.log("can VP")
    canPlayArray[0] = true
}
AP.oncanplay = function() {
    $('#AudioCanPlay').style.backgroundColor = "Green"
    console.log("can AP")
    canPlayArray[1] = true
}


var currentD

VP.currentTime = localStorage.getItem('VPCT');

function GLSVCT() {
    localStorage.setItem('VPCT', Video.currentTime);
    
    getLSD = localStorage.getItem('VPCT');

    // console.log(getLSD);
}

VP.ontimeupdate = function timeUpdate() {
    GLSVCT()

    correctionF()

    $('#testI').innerText = `${VP.currentTime}\n${AP.currentTime}\n${Math.floor((VP.currentTime - AP.currentTime) * 1000)} ms`

    DT = VP.duration
    CT = VP.currentTime

    DH = Math.floor(DT / 3600)
    DM = Math.floor((DT / 3600 - DH) * 60)
    DS = Math.floor(((DT / 3600 - DH) * 60 - DM) * 60)
    if (DM < 10 && DH >= 1) {
        DM = `0${DM}`
    }
    if (DS < 10) {
        DS = `0${DS}`
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


    if (DT < 3600) {
        dt = `${DM}:${DS}`
    } else {
        dt = `${DH}:${DM}:${DS}`
    }

    if (CT < 3600) {
        ct = `${CM}:${CS}`
    } else {
        ct = `${CH}:${CM}:${CS}`
    }

    $('.time-current').innerText = ct
    $('.time-duration').innerText = dt

    PlayedBar.style.width = 100 / (DT / CT) + "%"
}




function togglePlayPause() {
    mediaSR()
    $('#AudioCanPlay').style.backgroundColor = "red"
    $('#VideoCanPlay').style.backgroundColor = "red"
    canPlayArray[0] = false
    canPlayArray[1] = false


    // console.clear()
    if (VP.paused) {
        VP.play()
    } else {
        VP.pause()
    }
    audioControl()
}


function audioControl() {
    if (AudioOn) {
        if (VP.paused) {
            AP.pause()
        } else {
            AP.play()
        }
    }
}


VP.muted = false

function mutebtnicon() {
    VP.muted ? $('#muted').setAttribute("d", "M 8 10.25 L 24.75 27 L 26 25.75 L 9.25 9 Z") : $('#muted').setAttribute("d", "M 8 10.25 L 8 10.25 L 9.25 9 L 9.25 9 Z")
    
    VP.muted ? $('#mute-full-svg').setAttribute("d", "M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z") : VP.volume > 0.5 ? $('#mute-full-svg').setAttribute("d", "M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z") : $('#mute-full-svg').setAttribute("d", "M 19 11.29 C 21.89 12.15 24 14.83 24 18 C 24 21.17 21.89 23.85 19 24.71 L 19 24.71 C 21.89 23.85 24 21.17 24 18 C 24 14.83 21.89 12.15 19 11.29 L 19 11.29 Z")



    VP.muted ? $('#cut-path').setAttribute("d", "M 0 0 L 36 0 L 36 36 L 0 36 Z M 10.52 7.73 L 9.25 9 L 25.98 25.73 L 27.25 24.46 Z") : $('#cut-path').setAttribute("d", "M 0 0 L 36 0 L 36 36 L 0 36 Z M 10.52 7.73 L 9.25 9 L 9.25 9 L 10.52 7.73 Z")
}
// cut-path
function toggleMute() {

    VP.muted ? $("#mute-button").setAttribute('title', 'Mute (m)') : $("#mute-button").setAttribute('title', 'Unmute (m)')
    VP.muted ? $("#titleDiv").innerText = 'Mute (m)' : $("#titleDiv").innerText = 'Unmute (m)'
    

    VP.muted ? $('#volume-slider-handle').style.left = ((CArr[3][0] - CArr[3][1]) * VP.volume) + "px" : $('#volume-slider-handle').style.left = "0px"
    VP.muted ? volumeIndex = 0 : volumeIndex = Math.round(VP.volume * 100 / 5)

    VP.muted ? VP.muted = false : VP.muted = true
    AP.muted = VP.muted
    
}



function getPlayerIndex() {
    is1.innerText = `Video Player Volume: (${VP.volume})`
    is2.innerText = `Video Player Muted: (${VP.muted})`
    is3.innerText = `Audio Player Volume: (${AP.volume})`
    is4.innerText = `Audio Player Muted: (${AP.muted})`
}


var fullS
document.onfullscreenchange = function() {

    // !document.fullscreenElement ? trueF2() : falseF2()

    if (!document.fullscreenElement) {
        falseF()
    } else {
        trueF()
    }



    
    // !document.fullscreenElement ? fIndex = 0 : fIndex = 1
    fIndex = 0
    // console.log(fIndex + " index");
    fullScreenSizeF()
    
    resolutionChange()

    // TEST TEST TEST
    setTimeout(() => {

        if (fullS) {
            console.log("fullS" + " " + fullS)
            fIndex = 0
            fullScreenSizeF()
        }
        else {
            console.log("fullS" + " " + fullS)
            fIndex = 1
            fullScreenSizeF()
        }

    }, 500);
    // TEST TEST TEST

    $('#volume-slider-handle').style.left =  (CArr[3][0] - CArr[3][1]) * VP.volume + "px"



}

function trueF() {
    $('#fullscreen-1').style.display = 'none'
    $('#fullscreen-2').style.display = 'block'
    fullS = true

    $('#size-button').style.display = "none"


    $("#fullscreen-button").setAttribute('title', 'Exit full screen (f)')
    $("#titleDiv").innerText = 'Exit full screen (f)'
}
function falseF() {
    $('#fullscreen-1').style.display = 'block'
    $('#fullscreen-2').style.display = 'none'
    fullS = false

    $('#size-button').style.display = "flex"


    $("#fullscreen-button").setAttribute('title', 'Full screen (f)')
    $("#titleDiv").innerText = 'Full screen (f)'
}


function toggleFullScreen() {

    if (!document.fullscreenElement) {
        Player.requestFullscreen()
        falseF()
    } else {
        document.exitFullscreen()
        trueF()
    }

}



function togglePictureInPicture() {
    if (document.pictureInPictureElement != null) {
        document.exitPictureInPicture();
    } else {
        if (document.pictureInPictureEnabled) {
            $('video').requestPictureInPicture();
        }
    }
}

var pip = false
VP.onenterpictureinpicture = function(e) {
    // console.log(e)
    pip = true
}
VP.onleavepictureinpicture = function(e) {
    // console.log(e)
    pip = false
}



function VPonPlayPause() {
    if (pip) {
        audioControl()
    }
}



var delay = 300

AudioOn = false

if (!AudioOn) {
    AP.src = ''
}



function correctionF() {

    if (AudioOn) {
        currentD = Math.floor((VP.currentTime - AP.currentTime) * 1000) + delay
        if (currentD > 100) {
            AP.playbackRate = VP.playbackRate + 0.1875
            AP.currentTime = VP.currentTime + (delay / 1000)
            // console.log('+++')
        }
        if (currentD < -100) {
            AP.playbackRate = VP.playbackRate - 0.1875
            AP.currentTime = VP.currentTime + (delay / 1000)
            // console.log('---')
        }


        if (currentD > -100 && currentD < 100) {
            
            if (currentD > 50) {
                AP.playbackRate = VP.playbackRate + 0.1
                // console.log('++')
            }
            if (currentD < -50) {
                AP.playbackRate = VP.playbackRate - 0.1
                // console.log('--')
            }
            if (currentD > -50 && currentD < 50) {
            
                if (currentD > 5) {
                    AP.playbackRate = VP.playbackRate + 0.02
                    // console.log('+')
                }
                if (currentD < -5) {
                    AP.playbackRate = VP.playbackRate - 0.02
                    // console.log('-')
                }
    
                if (currentD > -5 && currentD < 5) {
                    // AP.playbackRate = 1
                    // console.log('=')

                    if (currentD >= 1) {
                        AP.playbackRate = VP.playbackRate + 0.001
                        // console.log(',+')
                    }
                    if (currentD <= -1) {
                        AP.playbackRate = VP.playbackRate - 0.001
                        // console.log(',-')
                    }

                    if (currentD == 0) {
                        AP.playbackRate = VP.playbackRate
                        // console.log('===')
                    }

                }
            }
        } 
    }    
}

var subtitleDisplay = true
function toggleSubtitle() {

    panelmenu3item0.ariaChecked = false
    panelmenu3item1.ariaChecked = false
    panelmenu3item2.ariaChecked = false

    if (subtitleDisplay) {
        subtitleDisplay = false

        panelmenu3item0.ariaChecked = true
        subtitle.src = 'Source/Subtitle/0.vtt'
        subtitle.lang = ''
        SCTS.innerHTML = ''
        menuitemC3.innerText = ssAr[0]
        
        $('#subtitles-button').setAttribute('aria-pressed', false)
        $('#cc-red').setAttribute('d', 'M 18 28 L 18 28 C 18 28 18 30 18 30 L 18 30 C 18 30 18 28 18 28 Z')
    } else {
        subtitleDisplay = true

        panelmenu3item1.ariaChecked = true
        subtitle.src = 'Source/Subtitle/en.vtt'
        subtitle.lang = 'en'
        menuitemC3.innerText = ssAr[1]
        
        $('#subtitles-button').setAttribute('aria-pressed', true)
        $('#cc-red').setAttribute('d', 'M 10 28 L 26 28 C 27.5 28 27.5 30 26 30 L 10 30 C 8.5 30 8.5 28 10 28 Z')
    }
}


originalSizeOn = false

function toggleOriginal() {
    // ResetSvgStyle()
    if (originalSizeOn) {
        originalSizeOn = false
        $('#original-svg').setAttribute('d', "M 18 13 L 18 15 L 23 15 L 23 18 L 25 18 L 25 13 Z M 13 18 L 11 18 L 11 23 L 18 23 L 18 21 L 13 21 Z M 26 27 C 29 27 29 27 29 24 L 29 12 C 29 9 29 9 26 9 L 10 9 C 7 9 7 9 7 12 L 7 24 C 7 27 7 27 10 27 Z M 27 25 L 9 25 L 9 11 L 27 11 Z")
    } else {
        originalSizeOn = true
        // $('#original-svg').setAttribute('d', "M 11 13 L 11 15 L 23 15 L 23 21 L 25 21 L 25 13 Z M 13 15 L 11 15 L 11 23 L 25 23 L 25 21 L 13 21 Z M 26 27 C 29 27 29 27 29 24 L 29 12 C 29 9 29 9 26 9 L 10 9 C 7 9 7 9 7 12 L 7 24 C 7 27 7 27 10 27 Z M 27 25 L 9 25 L 9 11 L 27 11 Z")

        $('#original-svg').setAttribute('d', "M 15 15 L 15 17 L 21 17 L 21 21 L 23 21 L 23 15 Z M 15 15 L 13 15 L 13 21 L 21 21 L 21 19 L 15 19 Z M 26 27 C 29 27 29 27 29 24 L 29 12 C 29 9 29 9 26 9 L 10 9 C 7 9 7 9 7 12 L 7 24 C 7 27 7 27 10 27 Z M 27 25 L 9 25 L 9 11 L 27 11 Z")
    }
    resolutionChange()
}

var theater = false 
function toggleSize() {
    // ResetSvgStyle()
    if (theater) {
        theater = false 
        $('Player').style.marginLeft = "12%"
        $('Player').style.marginRight = "12%"
        $('#size-svg').setAttribute('d', "m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z")
    } else {
        theater = true
        $('Player').style.marginLeft = "0%"
        $('Player').style.marginRight = "0%"
        $('#size-svg').setAttribute('d', "m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z")
    }
    resolutionChange()
}




const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

function isTouchDevice() {
    return window.ontouchstart !== undefined;
}

screen.orientation.onchange = function() {
    if (window.screen.orientation.angle == 0) {

    } else {
        Player.requestFullscreen()
    }
}


mediaSR()
function mediaSR() {
    
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'Morbius | მორბიუსი',
            artist: 'MARVEL | SONY',
            album: '',
            artwork: [
                { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
                { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
                { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
                { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
                { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
                { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
            ]
        });
      
        navigator.mediaSession.setActionHandler('play', function() { VP.play() });
        navigator.mediaSession.setActionHandler('pause', function() { VP.pause() });
        // navigator.mediaSession.setActionHandler('stop', function() { /* Code excerpted. */ });
        navigator.mediaSession.setActionHandler('seekbackward', function() { VP.currentTime -= 10 });
        navigator.mediaSession.setActionHandler('seekforward', function() { VP.currentTime += 10 });
        // navigator.mediaSession.setActionHandler('seekto', function() { /* Code excerpted. */ });
        // navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
        // navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
        // navigator.mediaSession.setActionHandler('skipad', function() { /* Code excerpted. */ });
    }

}