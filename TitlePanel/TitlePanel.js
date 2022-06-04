var BTNidArray = []
$$(".button").forEach(e => {
    BTNidArray.push(e.id)
});


var TiArr = [['Replay', 'PREVIOUS (SHRIFT+P)'],['Play (k)', 'Pause (k)'],['NEXT (SHRIFT+N)'],['Mute (m)', 'Unmute (m)'],['Autoplay is off', 'Autoplay is on'],['Subtitles/closed captions (c)'],['Settings'],['Switch camera'],['Miniplayer (i)'],['Picture in Picture'],['Default view (t)'],['Play on TV'],['Full screen (f)', 'Exit full screen (f)']]

function BTNtitleHover(el) {
    stayControl = true
    if (BTNidArray.includes(el.id) && !sIsOpen) {

        $("#TitlePanel").style.opacity = '1'
        $("#titleDiv").innerText = el.title

    } else if (el.id == 'volume-slider') {

        $("#TitlePanel").style.opacity = '1'
        $("#titleDiv").innerText = $("#volume-panel").getAttribute('aria-valuenow') + "%"

    } else {
        stayControl = false
        $("#TitlePanel").style.opacity = '0'

    }

    centreTitlePo = el.getBoundingClientRect().left + (el.offsetWidth / 2) - ($("#titleDiv").offsetWidth / 2)
    titleLeftPlayer = $("#titleDiv").getBoundingClientRect().left - $("#Player").getBoundingClientRect().left
    playerWid = $("#Player").getBoundingClientRect().width

    // if (titleLeftPlayer < 12) {
    //     $("#titleDiv").style.left = '12px'
    //     console.log('<');
    // }

    // if ($('#Player').offsetWidth - $("#titleDiv").offsetWidth - 12 < titleLeftPlayer) {
    //     $("#titleDiv").style.left = playerWid - $("#titleDiv").offsetWidth - 12 + 'px'
    //     console.log('>');
    // } else {
    //     $("#titleDiv").style.left = centreTitlePo - $('#Player').getBoundingClientRect().left + 'px'
    //     console.log('=');
    // }

    $("#titleDiv").style.left = centreTitlePo - $('#Player').getBoundingClientRect().left + 'px'
    
}

