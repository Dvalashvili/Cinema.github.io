// Setting Array
var sAr = ['Annotations', 'Playback speed', 'Subtitles/CC', 'Quality']


// ==================================================
// Setting (Playback speed) Array
var spAr = ['Custom', 0.25, 0.5, 0.75, 'Normal', 1.25, 1.5, 1.75, 2]
// ==================================================



// ==================================================
// Setting (Subtitles/CC) Array
var ssAr = ['Off', 'English', 'Georgian']
// ==================================================


// --------------------------------------------------
// __________________________________________________
// Setting (Subtitles/CC) [*Style] Array
var sSAr = ['Font family', 'Font color', 'Font size', 'Background color', 'Background opacity', 'Window color', 'Window opacity', 'Character edge style', 'Font opacity', 'Reset']
// __________________________________________________

// Setting (Subtitles/CC) [Family] Array
var sfAr = ['Monospaced Serif', 'Proportional Serif', 'Monospaced Sans-Serif', 'Proportional Sans-Serif', 'Casual', 'Cursive', 'Small Capitals']

// Setting (Subtitles/CC) [Color] Array
var scAr = ['White', 'Yellow', 'Green', 'Cyan', 'Blue', 'Magenta', 'Red', 'Black']

// Setting (Subtitles/CC) [Size] Array
var sfsAr = [50, 75, 100, 150, 200, 300, 400]

// Setting (Subtitles/CC [Opacity] Array
var soAr = [0, 25, 50, 75, 100]

// Setting (Subtitles/CC) [Edge] Array
var seAr = ['None', 'Drop Shadow', 'Raised', 'Depresed', 'Outline']
// --------------------------------------------------


// ==================================================
// Setting (Quality Array)
var sqAr = [2160, 1440, 1080, 720, 480, 360, 240, 144, 'Auto']
// ==================================================





// ==================================================
// Subtitle Style Array
var sSA = [sfAr[3], scAr[0], sfsAr[2], scAr[7], soAr[3], scAr[7], soAr[0], seAr[0], soAr[4]]
// Subtitle Style Array
// ==================================================



fetch('Source/JSON/data.json').then(response => response.json()).then(data => getData(data));
function getData(data) {
    jsonD = data
    // console.log(jsonD);
}

// fetch('https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg').then(e => console.log(e))

// fetch('Source/JSON/data.json')
// .then(resp => resp.blob())
// .then(blob => {
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.style.display = 'none';
//     a.href = url;
//     // the filename you want
//     a.download = 'todo-1.json';
//     document.body.appendChild(a);
//     a.click();
//     window.URL.revokeObjectURL(url);
//     alert('your file has downloaded!'); // or you know, something with better UX...
// })
// .catch(() => alert('oh no!'));


// fetch('Source/JSON/data.json')
// .then(resp => resp.blob())
// .then(blob => console.log(blob.stream()))

// TEST
var Arr = [sAr, ['None', spAr, [ssAr, [sSAr, [sfAr, scAr, soAr, seAr]]], sqAr]]

// 
// 
sIsHover = false
window.onclick = () => {
    checkHoverSPanel()
}



function checkHoverSPanel() {
    if (!sIsHover && sIsOpen && !toggleSettingsA) {
        toggleSettings()
    }
}
SPanel.onmouseenter = () => {
    sIsHover = true
    // console.log(sIsHover);
}
SPanel.onmouseleave = () => {
    sIsHover = false
    // console.log(sIsHover);
}


sIsOpen = false

var toggleSettingsA = false

function toggleSettings() {

    forPlayerH()

    if (!toggleSettingsA) {
        if (sIsOpen) {
            offSetting()
        } else {
            onSetting()
        }
    }
}


function onSetting() {
    sIsOpen = true
    $("#TitlePanel").style.opacity = '0'
    $('#settingsBntSvg').style.transform = 'rotate(45deg)'
    // $('#settings-svg-path').setAttribute('d', "M 23.9 18.8 C 24 18.5 24 18.3 24 18 C 24 17.7 24 17.5 23.9 17.2 L 25.6 15.9 C 25.8 15.8 25.8 15.6 25.7 15.4 L 24.1 12.6 C 24 12.5 23.8 12.4 23.6 12.5 L 21.6 13.3 C 21.2 12.9 20.8 12.7 20.3 12.5 L 20 10.4 C 20 10.2 19.8 10 19.6 10 L 16.4 10 C 16.2 10 16 10.2 16 10.4 L 15.7 12.5 C 15.2 12.7 14.8 12.9 14.4 13.3 L 12.4 12.5 C 12.2 12.4 12 12.5 11.9 12.6 L 10.3 15.4 C 10.2 15.6 10.2 15.8 10.4 15.9 L 12.1 17.2 C 12 17.5 12 17.7 12 18 C 12 18.3 12 18.5 12.1 18.8 L 10.4 20.1 C 10.2 20.2 10.2 20.4 10.3 20.6 L 11.9 23.4 C 12 23.5 12.2 23.6 12.4 23.5 L 14.4 22.7 C 14.8 23.1 15.2 23.3 15.7 23.5 L 16 25.6 C 16 25.8 16.2 26 16.4 26 L 19.6 26 C 19.8 26 20 25.8 20 25.6 L 20.3 23.5 C 20.8 23.3 21.2 23.1 21.6 22.7 L 23.6 23.5 C 23.8 23.6 24 23.5 24.1 23.4 L 25.7 20.6 C 25.8 20.4 25.8 20.2 25.6 20.1 L 23.9 18.8 L 23.9 18.8 Z")
    // createStartSetting()

    setTimeout(() => {
        cMIS()
        SPanel.style.width = `${menuitem2.offsetWidth}px`
    }, 10);

    $("#SPanel").style.transition = "0ms"
    $("#SPanel").style.width = `${pm0.offsetWidth}px`
    $("#SPanel").style.height = `${pm0.offsetHeight}px`
    g1svg.style.display = 'none'
    setTimeout(() => {
        $("#SPanel").style.transition = "200ms"
        $("#SPanel").style.opacity = "100%"
    }, 100);
}

function offSetting() {
    $('#settingsBntSvg').style.transform = 'rotate(0deg)'
    // $('#settings-svg-path').setAttribute('d', "M 21.6 22.7 C 21.9 22.6 22 22.4 22.2 22.2 S 22.6 21.8 22.7 21.6 L 24.8 21.9 C 25 22 25.2 21.8 25.2 21.6 L 26 18.5 C 26 18.4 25.9 18.1 25.7 18.1 L 23.7 17.3 C 23.7 16.7 23.6 16.3 23.3 15.8 L 24.6 14.1 C 24.7 14 24.7 13.7 24.6 13.5 L 22.3 11.2 C 22.2 11.1 21.9 11.1 21.7 11.2 L 20 12.5 C 19.5 12.3 19.1 12.1 18.5 12.1 L 17.7 10.1 C 17.6 9.9 17.4 9.8 17.3 9.8 L 14.2 10.6 C 14 10.7 13.8 10.8 13.9 11 L 14.2 13.1 C 13.9 13.2 13.8 13.4 13.6 13.6 S 13.2 14 13.1 14.2 L 11 13.9 C 10.8 13.8 10.6 14 10.6 14.2 L 9.8 17.3 C 9.8 17.4 9.9 17.7 10.1 17.7 L 12.1 18.5 C 12.1 19.1 12.2 19.5 12.5 20 L 11.2 22 C 11.1 22.1 11.1 22.4 11.2 22.6 L 13.5 24.9 C 13.6 25 13.9 25 14.1 24.9 L 15.8 23.6 C 16.3 23.8 16.7 24 17.3 24 L 18.1 26 C 18.2 26.2 18.4 26.3 18.5 26.3 L 21.6 25.5 C 21.8 25.4 22 25.3 21.9 25.1 L 21.6 22.7 L 21.6 22.7 Z")
    sIsOpen = false

    $("#TitlePanel").style.opacity = '1'
    // removeChilds()
    backToMainSetting()

    $("#SPanel").style.opacity = "0%"
    setTimeout(() => {

        setTimeout(() => {
            g1svg.style.display = ''
        }, 100);

        $("#SPanel").style.width = '0px'
        $("#SPanel").style.height = '0px'
    }, 100);

    forPlayerH()
}

var playerHeight

function forPlayerH() {
    $$('.PanelMenus').forEach(e => e.style.height = '')
    playerHeighy = Player.offsetHeight
    // console.log(playerHeighy + " px");
}

SetArray = {"k": true, "p": true, "s": true, "q": true}

createStartSetting()

function removeChilds() {
    while ($('#SPanel').children.length > 0) {
        document.getElementById("SPanel").lastElementChild.remove()
        // console.log("Removed");
    }
}

function createE(tagName, idName, className) { 
    el1 = document.createElement(tagName)
    if (idName == 0 || undefined) {
    } else {
        el1.setAttribute('id', idName)
    }

    if (className == 0 || undefined) {
    } else {
        el1.setAttribute('class', className)
    }

    return el1
}
// <div id="PanelMenu0" style="width: 0px; height: 0px; transform: translateX(0%);">PanelMenu0</div>
function createStartSetting() {
    pm0 = createE('div', 'PanelMenu0', 'PanelMenus')
    pm0.style.padding = "8px 0px"
    $("#SPanel").appendChild(pm0)

        
    
    if (SetArray.k) {
        pm0.appendChild(createE('div', 'menuitem1', 'menuitem'))
        // 
        menuitem1.appendChild(createE('div', '', 'menuitem-icon')).appendChild(createE('svg', 'svg1', 'settingSVG'))
        svg1.setAttribute('height', '24')
        svg1.setAttribute('viewBox', '0 0 24 24')
        svg1.setAttribute('width', '24')
        svg1.appendChild(createE('path', 'path1', '0'))

        document.getElementById("menuitem1").innerHTML += "";
        
        path1.setAttribute('d', 'M 17.5 7 C 19.43 7 21 8.57 21 10.5 C 21 11.5 20.47 15 20.15 17 H 18.13 L 18.37 15.11 L 18.51 14.02 L 17.41 13.99 C 15.5 13.94 14 12.4 14 10.5 C 14 8.57 15.57 7 17.5 7 M 6.5 7 C 8.43 7 10 8.57 10 10.5 C 10 11.5 9.47 15 9.15 17 H 7.13 L 7.37 15.11 L 7.51 14.02 L 6.41 13.99 C 4.5 13.94 3 12.4 3 10.5 C 3 8.57 4.57 7 6.5 7 M 17.5 6 C 15.01 6 13 8.01 13 10.5 C 13 12.94 14.95 14.92 17.38 14.99 L 17 18 H 21 C 21 18 22 12 22 10.5 C 22 8.01 19.99 6 17.5 6 L 17.5 6 Z M 6.5 6 C 4.01 6 2 8.01 2 10.5 C 2 12.94 3.95 14.92 6.38 14.99 L 6 18 H 10 C 10 18 11 12 11 10.5 C 11 8.01 8.99 6 6.5 6 L 6.5 6 Z')
        path1.setAttribute('fill', 'white')

        // 
        menuitem1.appendChild(createE('div', 'menuitemL1', 'menuitem-label')).innerText = sAr[0]
        menuitem1.appendChild(createE('div', 'menuitemC1', 'menuitem-content'))
    }
    if (SetArray.p) {
        pm0.appendChild(createE('div', 'menuitem2', 'menuitem'))
        // 
        menuitem2.appendChild(createE('div', '', 'menuitem-icon')).appendChild(createE('svg', 'svg2', 'settingSVG'))

        svg2.setAttribute('height', '24')
        svg2.setAttribute('viewBox', '0 0 24 24')
        svg2.setAttribute('width', '24')
        svg2.appendChild(createE('path', 'path2', '0'))

        document.getElementById("menuitem2").innerHTML += "";
        
        path2.setAttribute('d', 'M 10 8 V 16 L 16 12 L 10 8 L 10 8 Z M 6.3 5 L 5.7 4.2 C 7.2 3 9 2.2 11 2 L 11.1 3 C 9.3 3.2 7.7 3.9 6.3 5 Z M 5 6.3 L 4.2 5.7 C 3 7.2 2.2 9 2 11 L 3 11.1 C 3.2 9.3 3.9 7.7 5 6.3 Z M 5 17.7 C 3.9 16.3 3.2 14.6 3 12.9 L 2 13 C 2.2 15 3 16.8 4.2 18.4 L 5 17.7 Z M 11.1 21 C 9.3 20.8 7.7 20.1 6.3 19 L 5.7 19.8 C 7.2 21 9 21.8 11 22 L 11.1 21 Z M 22 12 C 22 6.8 18.1 2.6 13 2 L 12.9 3 C 17.5 3.5 21 7.3 21 12 S 17.5 20.5 12.9 21 L 13 22 C 18.2 21.5 22 17.2 22 12 Z')
        path2.setAttribute('fill', 'white')

        // 
        menuitem2.appendChild(createE('div', 'menuitemL2', 'menuitem-label')).innerText = sAr[1]
        menuitem2.appendChild(createE('div', 'menuitemC2', 'menuitem-content')).innerText = spAr[4]
    }
    if (SetArray.s) {
        pm0.appendChild(createE('div', 'menuitem3', 'menuitem'))
        // 
        menuitem3.appendChild(createE('div', '', 'menuitem-icon')).appendChild(createE('svg', 'svg3', 'settingSVG'))

        svg3.setAttribute('height', '24')
        svg3.setAttribute('viewBox', '0 0 24 24')
        svg3.setAttribute('width', '24')
        svg3.appendChild(createE('path', 'path3', '0'))

        document.getElementById("menuitem3").innerHTML += "";
        
        path3.setAttribute('d', 'M 6 14 V 10 C 6 9.45 6.45 9 7 9 H 10 C 10.55 9 11 9.45 11 10 V 11 H 9.5 V 10.5 H 7.5 V 13.5 H 9.5 V 13 H 11 V 14 C 11 14.55 10.55 15 10 15 H 7 C 6.45 15 6 14.55 6 14 Z M 14 15 H 17 C 17.55 15 18 14.55 18 14 V 13 H 16.5 V 13.5 H 14.5 V 10.5 H 16.5 V 11 H 18 V 10 C 18 9.45 17.55 9 17 9 H 14 C 13.45 9 13 9.45 13 10 V 14 C 13 14.55 13.45 15 14 15 Z M 20 4 H 4 V 20 H 20 V 4 M 21 3 V 21 H 3 V 3.01 C 3 3 3 3 3.01 3 H 21 L 21 3 Z')
        path3.setAttribute('fill', 'white')

        // 
        menuitem3.appendChild(createE('div', 'menuitemL3', 'menuitem-label')).innerText = sAr[2]
        menuitem3.appendChild(createE('div', 'menuitemC3', 'menuitem-content')).innerText = ssAr[1]
    }
    if (SetArray.q) {
        pm0.appendChild(createE('div', 'menuitem4', 'menuitem'))
        // 
        menuitem4.appendChild(createE('div', '', 'menuitem-icon')).appendChild(createE('svg', 'svg4', 'settingSVG'))

        svg4.setAttribute('height', '24')
        svg4.setAttribute('viewBox', '0 0 24 24')
        svg4.setAttribute('width', '24')
        svg4.appendChild(createE('path', 'path4', '0'))

        document.getElementById("menuitem4").innerHTML += "";
        
        path4.setAttribute('d', 'M 15 17 H 21 V 18 H 15 V 17 Z M 11 17 H 3 V 18 H 11 V 20 H 12 V 18 V 17 V 15 H 11 V 17 Z M 14 8 H 15 V 6 V 5 V 3 H 14 V 5 H 3 V 6 H 14 V 8 Z M 18 5 V 6 H 21 V 5 H 18 Z M 6 14 H 7 V 12 V 11 V 9 H 6 V 11 H 3 V 12 H 6 V 14 Z M 10 12 H 21 V 11 H 10 V 12 Z')
        path4.setAttribute('fill', 'white')

        // 
        menuitem4.appendChild(createE('div', 'menuitemL4', 'menuitem-label')).innerText = sAr[3]
        menuitem4.appendChild(createE('div', 'menuitemC4', 'menuitem-content')).innerHTML = `${sqAr[2]}p<sup class="supQ">FHD</sup>`


    }
    
}



function cMIS() {
    menuitemC1.style.width = ''
    menuitemC2.style.width = ''
    menuitemC3.style.width = ''
    menuitemC4.style.width = ''

    menuitemL1.style.width = ''
    menuitemL2.style.width = ''
    menuitemL3.style.width = ''
    menuitemL4.style.width = ''

    menuItemSizeArr = [[menuitemL1.offsetWidth, menuitemL2.offsetWidth, menuitemL3.offsetWidth, menuitemL4.offsetWidth], [menuitemC1.offsetWidth, menuitemC2.offsetWidth, menuitemC3.offsetWidth, menuitemC4.offsetWidth]]

    menuItemLMaxSizeArr = Math.max(...menuItemSizeArr[0]) - 15
    menuItemCMaxSizeArr = Math.max(...menuItemSizeArr[1]) - 15 - 38

    menuitemL1.style.width = `${menuItemLMaxSizeArr}px`
    menuitemL2.style.width = `${menuItemLMaxSizeArr}px`
    menuitemL3.style.width = `${menuItemLMaxSizeArr}px`
    menuitemL4.style.width = `${menuItemLMaxSizeArr}px`

    menuitemC1.style.width = `${menuItemCMaxSizeArr}px`
    menuitemC2.style.width = `${menuItemCMaxSizeArr}px`
    menuitemC3.style.width = `${menuItemCMaxSizeArr}px`
    menuitemC4.style.width = `${menuItemCMaxSizeArr}px`

    // createmenuitemonclick()
}
createmenuitemonclick()

var activeSetting = 0


SettingMargin = 12

function createmenuitemonclick() {
    menuitem1.onclick = function() {
        // pm1.style.transform = 'translateX(100%)'
    }
    menuitem2.onclick = function() {
        pm2.style.transform = 'translateX(0%)'
        activeSetting = 2
        SPanel.style.width = PanelMenu2.offsetWidth + 'px'
        SPanel.style.height = PanelMenu2.offsetHeight + 'px'

        if (PanelMenu2.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
            SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            PanelMenu2.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        }

        pm0.style.transform = `translateX(-${panelmenu2.offsetWidth}px)`
    }
    menuitem3.onclick = function() {
        pm3.style.transform = 'translateX(0%)'
        activeSetting = 3
        SPanel.style.width = panelmenu3.offsetWidth + 'px'
        SPanel.style.height = PanelMenu3.offsetHeight + 'px'

        if (PanelMenu3.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
            SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            PanelMenu3.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        }

        pm0.style.transform = `translateX(-${panelmenu3.offsetWidth}px)`
    }
    menuitem4.onclick = function() {
        pm4.style.transform = 'translateX(0%)'
        activeSetting = 4
        SPanel.style.width = panelmenu4.offsetWidth + 'px'
        SPanel.style.height = PanelMenu4.offsetHeight + 'px'

        if (PanelMenu4.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
            SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            PanelMenu4.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        }

        pm0.style.transform = `translateX(-${panelmenu4.offsetWidth}px)`
    }
}

createSubSetting(1)
createSubSetting(2)
createSubSetting(2.1)
createSubSetting(3)
createSubSetting(3.1)

createSubSetting(3.101)
createSubSetting(3.11)
createSubSetting(3.12)
createSubSetting(3.13)
createSubSetting(3.14)
createSubSetting(3.15)
createSubSetting(3.16)
createSubSetting(3.17)
createSubSetting(3.18)

createSubSetting(4)

function createSubSetting(e) {
    if (e == 1) {
        // pm1 = createE('div', `PanelMenu${e}`, '')
        // console.log('1');

    }
    if (e == 2) {
        pm2 = createE('div', 'PanelMenu2', 'PanelMenus')

        pm2.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm2)
        
        pm2.appendChild(createE('div', 'panelmenuheader2', 'panel-menuheader'))
        pm2.appendChild(createE('div', 'panelhr2', 'panel-hr'))
        pm2.appendChild(createE('div', 'panelmenu2', 'panel-menu'))

        headerspan2 = createE('span', 'headerspan2', 'header-span')
        panelmenuheader2.appendChild(headerspan2)

        headerspan2.onclick = () => {
            cMIS()
            backToMainSetting()
        }

        headerspan2.innerText = sAr[1]

        headerHspan2 = createE('span', 'headerHspan2', 'headerH-span')
        panelmenuheader2.appendChild(headerHspan2)
        headerHspan2.innerText = 'Custom'

        headerHspan2.onclick = () => {
            cMIS()
            // console.log('submenu');
            PanelMenu21.style.transform = 'translateX(0%)'
            PanelMenu2.style.transform = `translateX(-${PanelMenu21.offsetWidth}px)`

            activeSetting = 21
            toSubSetting()
        }


        panelmenu2item0 = createE('div', 'panelmenu2item0', 'Menuitem-div')
        panelmenu2item0.style.display = 'none'
        panelmenu2item1 = createE('div', 'panelmenu2item1', 'Menuitem-div')
        panelmenu2item2 = createE('div', 'panelmenu2item2', 'Menuitem-div')
        panelmenu2item3 = createE('div', 'panelmenu2item3', 'Menuitem-div')
        panelmenu2item4 = createE('div', 'panelmenu2item4', 'Menuitem-div')
        panelmenu2item5 = createE('div', 'panelmenu2item5', 'Menuitem-div')
        panelmenu2item6 = createE('div', 'panelmenu2item6', 'Menuitem-div')
        panelmenu2item7 = createE('div', 'panelmenu2item7', 'Menuitem-div')
        panelmenu2item8 = createE('div', 'panelmenu2item8', 'Menuitem-div')

        panelmenu2item0.onclick = () => {
            removeMIA2()
            panelmenu2item0.ariaChecked = true
            menuitemC2.innerText = `Costom(${spAr[0]})`
        }
        panelmenu2item1.onclick = () => {
            removeMIA2()
            panelmenu2item1.ariaChecked = true
            VP.playbackRate = spAr[1]
            menuitemC2.innerText = spAr[1]
        }
        panelmenu2item2.onclick = () => {
            removeMIA2()
            panelmenu2item2.ariaChecked = true
            VP.playbackRate = spAr[2]
            menuitemC2.innerText = spAr[2]
        }
        panelmenu2item3.onclick = () => {
            removeMIA2()
            panelmenu2item3.ariaChecked = true
            VP.playbackRate = spAr[3]
            menuitemC2.innerText = spAr[3]
        }
        panelmenu2item4.onclick = () => {
            removeMIA2()
            panelmenu2item4.ariaChecked = true
            VP.playbackRate = 1
            menuitemC2.innerText = spAr[4]
        }
        panelmenu2item4.ariaChecked = true
        panelmenu2item5.onclick = () => {
            removeMIA2()
            panelmenu2item5.ariaChecked = true
            VP.playbackRate = spAr[5]
            menuitemC2.innerText = spAr[5]
        }
        panelmenu2item6.onclick = () => {
            removeMIA2()
            panelmenu2item6.ariaChecked = true
            VP.playbackRate = spAr[6]
            menuitemC2.innerText = spAr[6]
        }
        panelmenu2item7.onclick = () => {
            removeMIA2()
            panelmenu2item7.ariaChecked = true
            VP.playbackRate = spAr[7]
            menuitemC2.innerText = spAr[7]
        }
        panelmenu2item8.onclick = () => {
            removeMIA2()
            panelmenu2item8.ariaChecked = true
            VP.playbackRate = spAr[8]
            menuitemC2.innerText = spAr[8]
        }

        VP.onratechange = () => {
            // console.log("playbackRate: " + VP.playbackRate);
            AP.playbackRate = VP.playbackRate
        }

        function removeMIA2() {
            cMIS()
            backToMainSetting()
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

        panelmenu2.appendChild(panelmenu2item0)
        panelmenu2.appendChild(panelmenu2item1)
        panelmenu2.appendChild(panelmenu2item2)
        panelmenu2.appendChild(panelmenu2item3)
        panelmenu2.appendChild(panelmenu2item4)
        panelmenu2.appendChild(panelmenu2item5)
        panelmenu2.appendChild(panelmenu2item6)
        panelmenu2.appendChild(panelmenu2item7)
        panelmenu2.appendChild(panelmenu2item8)

        panelmenu2item0.innerText = spAr[0]
        panelmenu2item1.innerText = spAr[1]
        panelmenu2item2.innerText = spAr[2]
        panelmenu2item3.innerText = spAr[3]
        panelmenu2item4.innerText = spAr[4]
        panelmenu2item5.innerText = spAr[5]
        panelmenu2item6.innerText = spAr[6]
        panelmenu2item7.innerText = spAr[7]
        panelmenu2item8.innerText = spAr[8]

    }
    if (e == 2.1) {
        // console.log('Create 2.1');

        pm21 = createE('div', 'PanelMenu21', 'PanelMenus')

        pm21.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm21)
        
        pm21.appendChild(createE('div', 'panelmenuheader21', 'panel-menuheader'))
        pm21.appendChild(createE('div', 'panelhr21', 'panel-hr'))
        pm21.appendChild(createE('div', 'panelmenu21', 'panel-menu'))

        headerspan21 = createE('span', 'headerspan21', 'header-span')
        panelmenuheader21.appendChild(headerspan21)

        headerspan21.onclick = () => {
            backToSubSetting()
        }

        headerspan21.innerText = 'Custom'

        headerHspan21 = createE('span', 'headerHspan21', 'headerH-span')
        panelmenuheader21.appendChild(headerHspan21)
        headerHspan21.innerText = ''

        headerHspan21.onclick = () => {
            // console.log('submenu');
        }


        slider1 = createE('div', 'slider1', 'slider-div')

        slider1Mousedown = false

        if (isTouchDevice()) {
            slider1.ontouchstart = (e) => Slider1OnStartDown(e.touches[0])
        } else {
            slider1.onmousedown = (e) => Slider1OnStartDown(e)
        }

        function Slider1OnStartDown(e) {
            console.log(e);
            cMIS()
            slider1Xindex = e.offsetX
            slider1Mousedown = true

            panelmenu2item0.style.display = 'flex'
            removeMIA21()
            panelmenu2item0.ariaChecked = true

            // console.log(slider1Xindex);
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

        panelmenu21.appendChild(slider1)

        slider1Index = createE('div', 'slider1Index', 'sliderIndex-div')
        slider1Index.innerText = '1x'

        panelmenu21.appendChild(slider1Index)

        slider1Thumb = createE('div', 'slider1Thumb', 'Thumb-div')

        slider1.appendChild(slider1Thumb)

    }
    if (e == 3) {
        // console.log('3');

        pm3 = createE('div', 'PanelMenu3', 'PanelMenus')

        pm3.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm3)
        
        pm3.appendChild(createE('div', 'panelmenuheader3', 'panel-menuheader'))
        pm3.appendChild(createE('div', 'panelhr3', 'panel-hr'))
        pm3.appendChild(createE('div', 'panelmenu3', 'panel-menu'))

        headerspan3 = createE('span', 'headerspan3', 'header-span')
        panelmenuheader3.appendChild(headerspan3)

        headerspan3.onclick = () => {
            cMIS()
            backToMainSetting()
        }

        headerspan3.innerText = sAr[2]

        headerHspan3 = createE('span', 'headerHspan3', 'headerH-span')
        panelmenuheader3.appendChild(headerHspan3)
        headerHspan3.innerText = 'Options'

        headerHspan3.onclick = () => {

            cMIS()
            // console.log('submenu');
            PanelMenu31.style.transform = 'translateX(0%)'
            PanelMenu3.style.transform = `translateX(-${PanelMenu31.offsetWidth}px)`
            PanelMenu0.style.transform = `translateX(-${PanelMenu31.offsetWidth}px)`

            activeSetting = 31
            toSubSetting3()
        }


        panelmenu3item0 = createE('div', 'panelmenu3item0', 'Menuitem-div')
        panelmenu3item1 = createE('div', 'panelmenu3item1', 'Menuitem-div')
        panelmenu3item2 = createE('div', 'panelmenu3item2', 'Menuitem-div')

        panelmenu3item0.onclick = () => {
            removeMIA3()
            panelmenu3item0.ariaChecked = true
            subtitle.src = 'Source/Subtitle/0.vtt'
            subtitle.lang = ''
            SCTS.innerHTML = ''
            menuitemC3.innerText = ssAr[0]

            subtitleDisplay = true
            toggleSubtitle()
        }
        panelmenu3item1.onclick = () => {
            removeMIA3()
            panelmenu3item1.ariaChecked = true
            subtitle.src = 'Source/Subtitle/en.vtt'
            subtitle.lang = 'en'
            menuitemC3.innerText = ssAr[1]
        }
        panelmenu3item2.onclick = () => {
            removeMIA3()
            panelmenu3item2.ariaChecked = true
            subtitle.src = 'Source/Subtitle/ka.vtt'
            subtitle.lang = 'ka'
            menuitemC3.innerText = ssAr[2]
        }
        panelmenu3item1.ariaChecked = true


        function removeMIA3() {
            backToMainSetting()
            panelmenu3item0.ariaChecked = false
            panelmenu3item1.ariaChecked = false
            panelmenu3item2.ariaChecked = false
        }

        panelmenu3.appendChild(panelmenu3item0)
        panelmenu3.appendChild(panelmenu3item1)
        panelmenu3.appendChild(panelmenu3item2)

        panelmenu3item0.innerText = ssAr[0]
        panelmenu3item1.innerText = ssAr[1]
        panelmenu3item2.innerText = ssAr[2]
    }
    if (e == 3.1) {


        // console.log('31');

        pm31 = createE('div', 'PanelMenu31', 'PanelMenus')

        pm31.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm31)
        
        pm31.appendChild(createE('div', 'panelmenuheader31', 'panel-menuheader'))
        pm31.appendChild(createE('div', 'panelhr31', 'panel-hr'))
        pm31.appendChild(createE('div', 'panelmenu31', 'panel-menu'))

        headerspan31 = createE('span', 'headerspan31', 'header-span')
        panelmenuheader31.appendChild(headerspan31)

        headerspan31.onclick = () => {
            backToSubSetting3()
        }

        headerspan31.innerText = 'Options'

        headerHspan31 = createE('span', 'headerHspan31', 'headerH-span')
        panelmenuheader31.appendChild(headerHspan31)
        headerHspan31.innerText = ''

        headerHspan31.onclick = () => {
            // console.log('subMenuS SubMenu');
        }

        // 
        // Setting (Subtitles/CC) [*Style] Array

        sSAr

        // __________________________________________________
        // Setting (Subtitles/CC) [Family] Array

        sfAr

        // Setting (Subtitles/CC) [Color] Array

        scAr

        // Setting (Subtitles/CC) [Size] Array
        
        sfsAr

        // Setting (Subtitles/CC [Opacity] Array

        soAr

        // Setting (Subtitles/CC) [Edge] Array

        seAr

        // --------------------------------------------------
        // 

        panelmenu31item0 = createE('div', 'panelmenu31item0', 'Menuitem-div3')
        panelmenu31item1 = createE('div', 'panelmenu31item1', 'Menuitem-div3')
        panelmenu31item2 = createE('div', 'panelmenu31item2', 'Menuitem-div3')
        panelmenu31item3 = createE('div', 'panelmenu31item3', 'Menuitem-div3')
        panelmenu31item4 = createE('div', 'panelmenu31item4', 'Menuitem-div3')
        panelmenu31item5 = createE('div', 'panelmenu31item5', 'Menuitem-div3')
        panelmenu31item6 = createE('div', 'panelmenu31item6', 'Menuitem-div3')
        panelmenu31item7 = createE('div', 'panelmenu31item7', 'Menuitem-div3')
        panelmenu31item8 = createE('div', 'panelmenu31item8', 'Menuitem-div3')
        panelmenu31item9 = createE('div', 'panelmenu31item9', 'Menuitem-div3')



        panelmenu31item0.appendChild(createE('div', 'menuitemL30', 'menuitem-label3')).innerText = sSAr[0]
        panelmenu31item0.appendChild(createE('div', 'menuitemC30', 'menuitem-content3')).innerText = sfAr[3]

        panelmenu31item1.appendChild(createE('div', 'menuitemL31', 'menuitem-label3')).innerText = sSAr[1]
        panelmenu31item1.appendChild(createE('div', 'menuitemC31', 'menuitem-content3')).innerText = scAr[0]

        panelmenu31item2.appendChild(createE('div', 'menuitemL32', 'menuitem-label3')).innerText = sSAr[2]
        panelmenu31item2.appendChild(createE('div', 'menuitemC32', 'menuitem-content3')).innerText = sfsAr[2] + "%"

        panelmenu31item3.appendChild(createE('div', 'menuitemL33', 'menuitem-label3')).innerText = sSAr[3]
        panelmenu31item3.appendChild(createE('div', 'menuitemC33', 'menuitem-content3')).innerText = scAr[7]

        panelmenu31item4.appendChild(createE('div', 'menuitemL34', 'menuitem-label3')).innerText = sSAr[4]
        panelmenu31item4.appendChild(createE('div', 'menuitemC34', 'menuitem-content3')).innerText = soAr[3] + "%"

        panelmenu31item5.appendChild(createE('div', 'menuitemL35', 'menuitem-label3')).innerText = sSAr[5]
        panelmenu31item5.appendChild(createE('div', 'menuitemC35', 'menuitem-content3')).innerText = scAr[7]

        panelmenu31item6.appendChild(createE('div', 'menuitemL36', 'menuitem-label3')).innerText = sSAr[6]
        panelmenu31item6.appendChild(createE('div', 'menuitemC36', 'menuitem-content3')).innerText = soAr[0] + "%"

        panelmenu31item7.appendChild(createE('div', 'menuitemL37', 'menuitem-label3')).innerText = sSAr[7]
        panelmenu31item7.appendChild(createE('div', 'menuitemC37', 'menuitem-content3')).innerText = seAr[0]

        panelmenu31item8.appendChild(createE('div', 'menuitemL38', 'menuitem-label3')).innerText = sSAr[8]
        panelmenu31item8.appendChild(createE('div', 'menuitemC38', 'menuitem-content3')).innerText = soAr[4] + "%"

        panelmenu31item9.appendChild(createE('div', 'menuitemL39', 'menuitem-label3')).innerText = sSAr[9]
        panelmenu31item9.appendChild(createE('div', 'menuitemC39', 'menuitem-content3')).innerText = ''





        panelmenu31item0.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu310.offsetWidth}px)`

            activeSetting = 310

            PanelMenu310.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu310.offsetWidth + 'px'
            SPanel.style.height = PanelMenu310.offsetHeight + 'px'

            if (PanelMenu310.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu310.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item1.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu311.offsetWidth}px)`

            activeSetting = 311
            PanelMenu311.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu311.offsetWidth + 'px'
            SPanel.style.height = PanelMenu311.offsetHeight + 'px'

            if (PanelMenu311.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu311.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item2.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu312.offsetWidth}px)`

            activeSetting = 312
            PanelMenu312.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu312.offsetWidth + 'px'
            SPanel.style.height = PanelMenu312.offsetHeight + 'px'

            if (PanelMenu312.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu312.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item3.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu313.offsetWidth}px)`

            activeSetting = 313
            PanelMenu313.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu313.offsetWidth + 'px'
            SPanel.style.height = PanelMenu313.offsetHeight + 'px'

            if (PanelMenu313.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu313.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item4.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu314.offsetWidth}px)`

            activeSetting = 314
            PanelMenu314.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu314.offsetWidth + 'px'
            SPanel.style.height = PanelMenu314.offsetHeight + 'px'

            if (PanelMenu314.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu314.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item5.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu315.offsetWidth}px)`

            activeSetting = 315
            PanelMenu315.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu315.offsetWidth + 'px'
            SPanel.style.height = PanelMenu315.offsetHeight + 'px'

            if (PanelMenu315.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu315.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item6.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu316.offsetWidth}px)`

            activeSetting = 316
            PanelMenu316.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu316.offsetWidth + 'px'
            SPanel.style.height = PanelMenu316.offsetHeight + 'px'

            if (PanelMenu316.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu316.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item7.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu317.offsetWidth}px)`

            activeSetting = 317
            PanelMenu317.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu317.offsetWidth + 'px'
            SPanel.style.height = PanelMenu317.offsetHeight + 'px'

            if (PanelMenu317.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu317.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item8.onclick = () => {
            cMIS()
            PanelMenu31.style.transform = `translateX(-${PanelMenu318.offsetWidth}px)`

            activeSetting = 318
            PanelMenu318.style.transform = 'translateX(0%)'
            SPanel.style.width = PanelMenu318.offsetWidth + 'px'
            SPanel.style.height = PanelMenu318.offsetHeight + 'px'

            if (PanelMenu318.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
                SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
                PanelMenu318.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
            }
        }
        panelmenu31item9.onclick = () => {
            // cMIS()
            // PanelMenu31.style.transform = `translateX(-${PanelMenu310.offsetWidth}px)`

            // activeSetting = 310
            // toSubSetting31X()
            ResetCueStyle()
        }
        

        panelmenu31.appendChild(panelmenu31item0)
        panelmenu31.appendChild(panelmenu31item1)
        panelmenu31.appendChild(panelmenu31item2)
        panelmenu31.appendChild(panelmenu31item3)
        panelmenu31.appendChild(panelmenu31item4)
        panelmenu31.appendChild(panelmenu31item5)
        panelmenu31.appendChild(panelmenu31item6)
        panelmenu31.appendChild(panelmenu31item7)
        panelmenu31.appendChild(panelmenu31item8)
        panelmenu31.appendChild(panelmenu31item9)

        // panelmenu31item0.innerText = ssAr[0]
        // panelmenu31item1.innerText = ssAr[1]
        // panelmenu31item2.innerText = ssAr[2]
        
        
    }
    if (e == 3.101) {

        pm310 = createE('div', 'PanelMenu310', 'PanelMenus')

        pm310.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm310)
        
        pm310.appendChild(createE('div', 'panelmenuheader310', 'panel-menuheader'))
        pm310.appendChild(createE('div', 'panelhr310', 'panel-hr'))
        pm310.appendChild(createE('div', 'panelmenu310', 'panel-menu'))

        headerspan310 = createE('span', 'headerspan310', 'header-span')
        panelmenuheader310.appendChild(headerspan310)

        headerspan310.onclick = () => {
            cMIS()
            PanelMenu310.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting310() {
            cMIS()
            PanelMenu310.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan310.innerText = sSAr[0]

        headerHspan310 = createE('span', 'headerHspan310', 'headerH-span')
        panelmenuheader310.appendChild(headerHspan310)
        headerHspan310.innerText = ""

        headerHspan310.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu310item0 = createE('div', 'panelmenu310item0', 'Menuitem-div')
        panelmenu310item1 = createE('div', 'panelmenu310item1', 'Menuitem-div')
        panelmenu310item2 = createE('div', 'panelmenu310item2', 'Menuitem-div')
        panelmenu310item3 = createE('div', 'panelmenu310item3', 'Menuitem-div')
        panelmenu310item4 = createE('div', 'panelmenu310item4', 'Menuitem-div')
        panelmenu310item5 = createE('div', 'panelmenu310item5', 'Menuitem-div')
        panelmenu310item6 = createE('div', 'panelmenu310item6', 'Menuitem-div')


        panelmenu310item0.onclick = () => {
            removeMIA310()
            panelmenu310item0.ariaChecked = true

            backToSubSetting310()

            menuitemC30.innerText = sfAr[0]

            sSA[0] = sfAr[0]
        }
        panelmenu310item1.onclick = () => {
            removeMIA310()
            panelmenu310item1.ariaChecked = true

            backToSubSetting310()

            menuitemC30.innerText = sfAr[1]

            sSA[0] = sfAr[1]
        }
        panelmenu310item2.onclick = () => {
            removeMIA310()
            panelmenu310item2.ariaChecked = true

            backToSubSetting310()

            menuitemC30.innerText = sfAr[2]

            sSA[0] = sfAr[2]
        }
        panelmenu310item3.onclick = () => {
            removeMIA310()
            panelmenu310item3.ariaChecked = true

            backToSubSetting310()

            menuitemC30.innerText = sfAr[3]

            sSA[0] = sfAr[3]
        }
        panelmenu310item4.onclick = () => {
            removeMIA310()
            panelmenu310item4.ariaChecked = true

            backToSubSetting310()

            menuitemC30.innerText = sfAr[4]

            sSA[0] = sfAr[4]
        }
        panelmenu310item5.onclick = () => {
            removeMIA310()
            panelmenu310item5.ariaChecked = true

            backToSubSetting310()

            menuitemC30.innerText = sfAr[5]

            sSA[0] = sfAr[5]
        }
        panelmenu310item6.onclick = () => {
            removeMIA310()
            panelmenu310item6.ariaChecked = true

            backToSubSetting310()

            menuitemC30.innerText = sfAr[6]

            sSA[0] = sfAr[6]
        }
        panelmenu310item3.ariaChecked = true


        

        panelmenu310.appendChild(panelmenu310item0)
        panelmenu310.appendChild(panelmenu310item1)
        panelmenu310.appendChild(panelmenu310item2)
        panelmenu310.appendChild(panelmenu310item3)
        panelmenu310.appendChild(panelmenu310item4)
        panelmenu310.appendChild(panelmenu310item5)
        panelmenu310.appendChild(panelmenu310item6)

        panelmenu310item0.innerText = sfAr[0]
        panelmenu310item1.innerText = sfAr[1]
        panelmenu310item2.innerText = sfAr[2]
        panelmenu310item3.innerText = sfAr[3]
        panelmenu310item4.innerText = sfAr[4]
        panelmenu310item5.innerText = sfAr[5]
        panelmenu310item6.innerText = sfAr[6]
    }
    if (e == 3.11) {

        pm311 = createE('div', 'PanelMenu311', 'PanelMenus')

        pm311.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm311)
        
        pm311.appendChild(createE('div', 'panelmenuheader311', 'panel-menuheader'))
        pm311.appendChild(createE('div', 'panelhr311', 'panel-hr'))
        pm311.appendChild(createE('div', 'panelmenu311', 'panel-menu'))

        headerspan311 = createE('span', 'headerspan311', 'header-span')
        panelmenuheader311.appendChild(headerspan311)

        headerspan311.onclick = () => {
            cMIS()
            PanelMenu311.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting311() {
            cMIS()
            PanelMenu311.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan311.innerText = sSAr[1]

        headerHspan311 = createE('span', 'headerHspan311', 'headerH-span')
        panelmenuheader311.appendChild(headerHspan311)
        headerHspan311.innerText = ""

        headerHspan311.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu311item0 = createE('div', 'panelmenu311item0', 'Menuitem-div')
        panelmenu311item1 = createE('div', 'panelmenu311item1', 'Menuitem-div')
        panelmenu311item2 = createE('div', 'panelmenu311item2', 'Menuitem-div')
        panelmenu311item3 = createE('div', 'panelmenu311item3', 'Menuitem-div')
        panelmenu311item4 = createE('div', 'panelmenu311item4', 'Menuitem-div')
        panelmenu311item5 = createE('div', 'panelmenu311item5', 'Menuitem-div')
        panelmenu311item6 = createE('div', 'panelmenu311item6', 'Menuitem-div')
        panelmenu311item7 = createE('div', 'panelmenu311item7', 'Menuitem-div')


        panelmenu311item0.onclick = () => {
            removeMIA311()
            panelmenu311item0.ariaChecked = true

            backToSubSetting311()

            menuitemC31.innerText = scAr[0]

            sSA[1] = scAr[0]
        }
        panelmenu311item1.onclick = () => {
            removeMIA311()
            panelmenu311item1.ariaChecked = true

            backToSubSetting311()

            menuitemC31.innerText = scAr[1]

            sSA[1] = scAr[1]
        }
        panelmenu311item2.onclick = () => {
            removeMIA311()
            panelmenu311item2.ariaChecked = true

            backToSubSetting311()

            menuitemC31.innerText = scAr[2]

            sSA[1] = scAr[2]
        }
        panelmenu311item3.onclick = () => {
            removeMIA311()
            panelmenu311item3.ariaChecked = true

            backToSubSetting311()

            menuitemC31.innerText = scAr[3]

            sSA[1] = scAr[3]
        }
        panelmenu311item4.onclick = () => {
            removeMIA311()
            panelmenu311item4.ariaChecked = true

            backToSubSetting311()
            menuitemC31.innerText = scAr[4]

            sSA[1] = scAr[4]
        }
        panelmenu311item5.onclick = () => {
            removeMIA311()
            panelmenu311item5.ariaChecked = true

            backToSubSetting311()

            menuitemC31.innerText = scAr[5]

            sSA[1] = scAr[5]
        }
        panelmenu311item6.onclick = () => {
            removeMIA311()
            panelmenu311item6.ariaChecked = true

            backToSubSetting311()

            menuitemC31.innerText = scAr[6]

            sSA[1] = scAr[6]
        }
        panelmenu311item7.onclick = () => {
            removeMIA311()
            panelmenu311item7.ariaChecked = true

            backToSubSetting311()

            menuitemC31.innerText = scAr[7]

            sSA[1] = scAr[7]
        }
        panelmenu311item0.ariaChecked = true


        

        panelmenu311.appendChild(panelmenu311item0)
        panelmenu311.appendChild(panelmenu311item1)
        panelmenu311.appendChild(panelmenu311item2)
        panelmenu311.appendChild(panelmenu311item3)
        panelmenu311.appendChild(panelmenu311item4)
        panelmenu311.appendChild(panelmenu311item5)
        panelmenu311.appendChild(panelmenu311item6)
        panelmenu311.appendChild(panelmenu311item7)

        panelmenu311item0.innerText = scAr[0]
        panelmenu311item1.innerText = scAr[1]
        panelmenu311item2.innerText = scAr[2]
        panelmenu311item3.innerText = scAr[3]
        panelmenu311item4.innerText = scAr[4]
        panelmenu311item5.innerText = scAr[5]
        panelmenu311item6.innerText = scAr[6]
        panelmenu311item7.innerText = scAr[7]
    }
    if (e == 3.12) {

        pm312 = createE('div', 'PanelMenu312', 'PanelMenus')

        pm312.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm312)
        
        pm312.appendChild(createE('div', 'panelmenuheader312', 'panel-menuheader'))
        pm312.appendChild(createE('div', 'panelhr312', 'panel-hr'))
        pm312.appendChild(createE('div', 'panelmenu312', 'panel-menu'))

        headerspan312 = createE('span', 'headerspan312', 'header-span')
        panelmenuheader312.appendChild(headerspan312)

        headerspan312.onclick = () => {
            cMIS()
            PanelMenu312.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting312() {
            cMIS()
            PanelMenu312.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan312.innerText = sSAr[2]

        headerHspan312 = createE('span', 'headerHspan312', 'headerH-span')
        panelmenuheader312.appendChild(headerHspan312)
        headerHspan312.innerText = ""

        headerHspan312.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu312item0 = createE('div', 'panelmenu312item0', 'Menuitem-div')
        panelmenu312item1 = createE('div', 'panelmenu312item1', 'Menuitem-div')
        panelmenu312item2 = createE('div', 'panelmenu312item2', 'Menuitem-div')
        panelmenu312item3 = createE('div', 'panelmenu312item3', 'Menuitem-div')
        panelmenu312item4 = createE('div', 'panelmenu312item4', 'Menuitem-div')
        panelmenu312item5 = createE('div', 'panelmenu312item5', 'Menuitem-div')
        panelmenu312item6 = createE('div', 'panelmenu312item6', 'Menuitem-div')


        panelmenu312item0.onclick = () => {
            removeMIA312()
            panelmenu312item0.ariaChecked = true

            backToSubSetting312()

            menuitemC32.innerText = sfsAr[0] + "%"

            sSA[2] = sfsAr[0]
        }
        panelmenu312item1.onclick = () => {
            removeMIA312()
            panelmenu312item1.ariaChecked = true

            backToSubSetting312()

            menuitemC32.innerText = sfsAr[1] + "%"

            sSA[2] = sfsAr[1]
        }
        panelmenu312item2.onclick = () => {
            removeMIA312()
            panelmenu312item2.ariaChecked = true

            backToSubSetting312()

            menuitemC32.innerText = sfsAr[2] + "%"

            sSA[2] = sfsAr[2]
        }
        panelmenu312item3.onclick = () => {
            removeMIA312()
            panelmenu312item3.ariaChecked = true

            backToSubSetting312()

            menuitemC32.innerText = sfsAr[3] + "%"

            sSA[2] = sfsAr[3]
        }
        panelmenu312item4.onclick = () => {
            removeMIA312()
            panelmenu312item4.ariaChecked = true

            backToSubSetting312()

            menuitemC32.innerText = sfsAr[4] + "%"

            sSA[2] = sfsAr[4]
        }
        panelmenu312item5.onclick = () => {
            removeMIA312()
            panelmenu312item5.ariaChecked = true

            backToSubSetting312()

            menuitemC32.innerText = sfsAr[5] + "%"

            sSA[2] = sfsAr[5]
        }
        panelmenu312item6.onclick = () => {
            removeMIA312()
            panelmenu312item6.ariaChecked = true

            backToSubSetting312()

            menuitemC32.innerText = sfsAr[6] + "%"

            sSA[2] = sfsAr[6]
        }
        panelmenu312item2.ariaChecked = true


        

        panelmenu312.appendChild(panelmenu312item0)
        panelmenu312.appendChild(panelmenu312item1)
        panelmenu312.appendChild(panelmenu312item2)
        panelmenu312.appendChild(panelmenu312item3)
        panelmenu312.appendChild(panelmenu312item4)
        panelmenu312.appendChild(panelmenu312item5)
        panelmenu312.appendChild(panelmenu312item6)

        panelmenu312item0.innerText = sfsAr[0] + "%"
        panelmenu312item1.innerText = sfsAr[1] + "%"
        panelmenu312item2.innerText = sfsAr[2] + "%"
        panelmenu312item3.innerText = sfsAr[3] + "%"
        panelmenu312item4.innerText = sfsAr[4] + "%"
        panelmenu312item5.innerText = sfsAr[5] + "%"
        panelmenu312item6.innerText = sfsAr[6] + "%"
    }
    if (e == 3.13) {

        pm313 = createE('div', 'PanelMenu313', 'PanelMenus')

        pm313.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm313)
        
        pm313.appendChild(createE('div', 'panelmenuheader313', 'panel-menuheader'))
        pm313.appendChild(createE('div', 'panelhr313', 'panel-hr'))
        pm313.appendChild(createE('div', 'panelmenu313', 'panel-menu'))

        headerspan313 = createE('span', 'headerspan313', 'header-span')
        panelmenuheader313.appendChild(headerspan313)

        headerspan313.onclick = () => {
            cMIS()
            PanelMenu313.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting313() {
            cMIS()
            PanelMenu313.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan313.innerText = sSAr[3]

        headerHspan313 = createE('span', 'headerHspan313', 'headerH-span')
        panelmenuheader313.appendChild(headerHspan313)
        headerHspan313.innerText = ""

        headerHspan313.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu313item0 = createE('div', 'panelmenu313item0', 'Menuitem-div')
        panelmenu313item1 = createE('div', 'panelmenu313item1', 'Menuitem-div')
        panelmenu313item2 = createE('div', 'panelmenu313item2', 'Menuitem-div')
        panelmenu313item3 = createE('div', 'panelmenu313item3', 'Menuitem-div')
        panelmenu313item4 = createE('div', 'panelmenu313item4', 'Menuitem-div')
        panelmenu313item5 = createE('div', 'panelmenu313item5', 'Menuitem-div')
        panelmenu313item6 = createE('div', 'panelmenu313item6', 'Menuitem-div')
        panelmenu313item7 = createE('div', 'panelmenu313item7', 'Menuitem-div')


        panelmenu313item0.onclick = () => {
            removeMIA313()
            panelmenu313item0.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[0]

            sSA[3] = scAr[0]
        }
        panelmenu313item1.onclick = () => {
            removeMIA313()
            panelmenu313item1.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[1]

            sSA[3] = scAr[1]
        }
        panelmenu313item2.onclick = () => {
            removeMIA313()
            panelmenu313item2.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[2]

            sSA[3] = scAr[2]
        }
        panelmenu313item3.onclick = () => {
            removeMIA313()
            panelmenu313item3.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[3]

            sSA[3] = scAr[3]
        }
        panelmenu313item4.onclick = () => {
            removeMIA313()
            panelmenu313item4.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[4]

            sSA[3] = scAr[4]
        }
        panelmenu313item5.onclick = () => {
            removeMIA313()
            panelmenu313item5.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[5]

            sSA[3] = scAr[5]
        }
        panelmenu313item6.onclick = () => {
            removeMIA313()
            panelmenu313item6.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[6]

            sSA[3] = scAr[6]
        }
        panelmenu313item7.onclick = () => {
            removeMIA313()
            panelmenu313item7.ariaChecked = true

            backToSubSetting313()

            menuitemC33.innerText = scAr[7]

            sSA[3] = scAr[7]
        }
        panelmenu313item7.ariaChecked = true


        

        panelmenu313.appendChild(panelmenu313item0)
        panelmenu313.appendChild(panelmenu313item1)
        panelmenu313.appendChild(panelmenu313item2)
        panelmenu313.appendChild(panelmenu313item3)
        panelmenu313.appendChild(panelmenu313item4)
        panelmenu313.appendChild(panelmenu313item5)
        panelmenu313.appendChild(panelmenu313item6)
        panelmenu313.appendChild(panelmenu313item7)

        panelmenu313item0.innerText = scAr[0]
        panelmenu313item1.innerText = scAr[1]
        panelmenu313item2.innerText = scAr[2]
        panelmenu313item3.innerText = scAr[3]
        panelmenu313item4.innerText = scAr[4]
        panelmenu313item5.innerText = scAr[5]
        panelmenu313item6.innerText = scAr[6]
        panelmenu313item7.innerText = scAr[7]
    }
    if (e == 3.14) {

        pm314 = createE('div', 'PanelMenu314', 'PanelMenus')

        pm314.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm314)
        
        pm314.appendChild(createE('div', 'panelmenuheader314', 'panel-menuheader'))
        pm314.appendChild(createE('div', 'panelhr314', 'panel-hr'))
        pm314.appendChild(createE('div', 'panelmenu314', 'panel-menu'))

        headerspan314 = createE('span', 'headerspan314', 'header-span')
        panelmenuheader314.appendChild(headerspan314)

        headerspan314.onclick = () => {
            cMIS()
            PanelMenu314.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting314() {
            cMIS()
            PanelMenu314.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan314.innerText = sSAr[4]

        headerHspan314 = createE('span', 'headerHspan314', 'headerH-span')
        panelmenuheader314.appendChild(headerHspan314)
        headerHspan314.innerText = ""

        headerHspan314.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu314item0 = createE('div', 'panelmenu314item0', 'Menuitem-div')
        panelmenu314item1 = createE('div', 'panelmenu314item1', 'Menuitem-div')
        panelmenu314item2 = createE('div', 'panelmenu314item2', 'Menuitem-div')
        panelmenu314item3 = createE('div', 'panelmenu314item3', 'Menuitem-div')
        panelmenu314item4 = createE('div', 'panelmenu314item4', 'Menuitem-div')


        panelmenu314item0.onclick = () => {
            removeMIA314()
            panelmenu314item0.ariaChecked = true

            backToSubSetting314()

            menuitemC34.innerText = soAr[0] + "%"

            sSA[4] = soAr[0]
        }
        panelmenu314item1.onclick = () => {
            removeMIA314()
            panelmenu314item1.ariaChecked = true

            backToSubSetting314()

            menuitemC34.innerText = soAr[1] + "%"

            sSA[4] = soAr[1]
        }
        panelmenu314item2.onclick = () => {
            removeMIA314()
            panelmenu314item2.ariaChecked = true

            backToSubSetting314()

            menuitemC34.innerText = soAr[2] + "%"

            sSA[4] = soAr[2]
        }
        panelmenu314item3.onclick = () => {
            removeMIA314()
            panelmenu314item3.ariaChecked = true

            backToSubSetting314()

            menuitemC34.innerText = soAr[3] + "%"

            sSA[4] = soAr[3]
        }
        panelmenu314item4.onclick = () => {
            removeMIA314()
            panelmenu314item4.ariaChecked = true

            backToSubSetting314()

            menuitemC34.innerText = soAr[4] + "%"
            sSA[4] = soAr[4]
        }
        panelmenu314item3.ariaChecked = true


        

        panelmenu314.appendChild(panelmenu314item0)
        panelmenu314.appendChild(panelmenu314item1)
        panelmenu314.appendChild(panelmenu314item2)
        panelmenu314.appendChild(panelmenu314item3)
        panelmenu314.appendChild(panelmenu314item4)

        panelmenu314item0.innerText = soAr[0] + "%"
        panelmenu314item1.innerText = soAr[1] + "%"
        panelmenu314item2.innerText = soAr[2] + "%"
        panelmenu314item3.innerText = soAr[3] + "%"
        panelmenu314item4.innerText = soAr[4] + "%"
    }
    if (e == 3.15) {

        pm315 = createE('div', 'PanelMenu315', 'PanelMenus')

        pm315.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm315)
        
        pm315.appendChild(createE('div', 'panelmenuheader315', 'panel-menuheader'))
        pm315.appendChild(createE('div', 'panelhr315', 'panel-hr'))
        pm315.appendChild(createE('div', 'panelmenu315', 'panel-menu'))

        headerspan315 = createE('span', 'headerspan315', 'header-span')
        panelmenuheader315.appendChild(headerspan315)

        headerspan315.onclick = () => {
            cMIS()
            PanelMenu315.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting315() {
            cMIS()
            PanelMenu315.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan315.innerText = sSAr[5]

        headerHspan315 = createE('span', 'headerHspan315', 'headerH-span')
        panelmenuheader315.appendChild(headerHspan315)
        headerHspan315.innerText = ""

        headerHspan315.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu315item0 = createE('div', 'panelmenu315item0', 'Menuitem-div')
        panelmenu315item1 = createE('div', 'panelmenu315item1', 'Menuitem-div')
        panelmenu315item2 = createE('div', 'panelmenu315item2', 'Menuitem-div')
        panelmenu315item3 = createE('div', 'panelmenu315item3', 'Menuitem-div')
        panelmenu315item4 = createE('div', 'panelmenu315item4', 'Menuitem-div')
        panelmenu315item5 = createE('div', 'panelmenu315item5', 'Menuitem-div')
        panelmenu315item6 = createE('div', 'panelmenu315item6', 'Menuitem-div')
        panelmenu315item7 = createE('div', 'panelmenu315item7', 'Menuitem-div')


        panelmenu315item0.onclick = () => {
            removeMIA315()
            panelmenu315item0.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[0]

            sSA[5] = scAr[0]
        }
        panelmenu315item1.onclick = () => {
            removeMIA315()
            panelmenu315item1.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[1]

            sSA[5] = scAr[1]
        }
        panelmenu315item2.onclick = () => {
            removeMIA315()
            panelmenu315item2.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[2]

            sSA[5] = scAr[2]
        }
        panelmenu315item3.onclick = () => {
            removeMIA315()
            panelmenu315item3.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[3]

            sSA[5] = scAr[3]
        }
        panelmenu315item4.onclick = () => {
            removeMIA315()
            panelmenu315item4.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[4]

            sSA[5] = scAr[4]
        }
        panelmenu315item5.onclick = () => {
            removeMIA315()
            panelmenu315item5.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[5]

            sSA[5] = scAr[5]
        }
        panelmenu315item6.onclick = () => {
            removeMIA315()
            panelmenu315item6.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[6]

            sSA[5] = scAr[6]
        }
        panelmenu315item7.onclick = () => {
            removeMIA315()
            panelmenu315item7.ariaChecked = true

            backToSubSetting315()

            menuitemC35.innerText = scAr[7]

            sSA[5] = scAr[7]
        }
        panelmenu315item7.ariaChecked = true


        

        panelmenu315.appendChild(panelmenu315item0)
        panelmenu315.appendChild(panelmenu315item1)
        panelmenu315.appendChild(panelmenu315item2)
        panelmenu315.appendChild(panelmenu315item3)
        panelmenu315.appendChild(panelmenu315item4)
        panelmenu315.appendChild(panelmenu315item5)
        panelmenu315.appendChild(panelmenu315item6)
        panelmenu315.appendChild(panelmenu315item7)

        panelmenu315item0.innerText = scAr[0]
        panelmenu315item1.innerText = scAr[1]
        panelmenu315item2.innerText = scAr[2]
        panelmenu315item3.innerText = scAr[3]
        panelmenu315item4.innerText = scAr[4]
        panelmenu315item5.innerText = scAr[5]
        panelmenu315item6.innerText = scAr[6]
        panelmenu315item7.innerText = scAr[7]
    }
    if (e == 3.16) {

        pm316 = createE('div', 'PanelMenu316', 'PanelMenus')

        pm316.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm316)
        
        pm316.appendChild(createE('div', 'panelmenuheader316', 'panel-menuheader'))
        pm316.appendChild(createE('div', 'panelhr316', 'panel-hr'))
        pm316.appendChild(createE('div', 'panelmenu316', 'panel-menu'))

        headerspan316 = createE('span', 'headerspan316', 'header-span')
        panelmenuheader316.appendChild(headerspan316)

        headerspan316.onclick = () => {
            cMIS()
            PanelMenu316.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting316() {
            cMIS()
            PanelMenu316.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan316.innerText = sSAr[6]

        headerHspan316 = createE('span', 'headerHspan316', 'headerH-span')
        panelmenuheader316.appendChild(headerHspan316)
        headerHspan316.innerText = ""

        headerHspan316.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu316item0 = createE('div', 'panelmenu316item0', 'Menuitem-div')
        panelmenu316item1 = createE('div', 'panelmenu316item1', 'Menuitem-div')
        panelmenu316item2 = createE('div', 'panelmenu316item2', 'Menuitem-div')
        panelmenu316item3 = createE('div', 'panelmenu316item3', 'Menuitem-div')
        panelmenu316item4 = createE('div', 'panelmenu316item4', 'Menuitem-div')


        panelmenu316item0.onclick = () => {
            removeMIA316()
            panelmenu316item0.ariaChecked = true

            backToSubSetting316()

            menuitemC36.innerText = soAr[0] + "%"

            sSA[6] = soAr[0]
        }
        panelmenu316item1.onclick = () => {
            removeMIA316()
            panelmenu316item1.ariaChecked = true

            backToSubSetting316()

            menuitemC36.innerText = soAr[1] + "%"

            sSA[6] = soAr[1]
        }
        panelmenu316item2.onclick = () => {
            removeMIA316()
            panelmenu316item2.ariaChecked = true

            backToSubSetting316()

            menuitemC36.innerText = soAr[2] + "%"

            sSA[6] = soAr[2]
        }
        panelmenu316item3.onclick = () => {
            removeMIA316()
            panelmenu316item3.ariaChecked = true

            backToSubSetting316()

            menuitemC36.innerText = soAr[3] + "%"

            sSA[6] = soAr[3]
        }
        panelmenu316item4.onclick = () => {
            removeMIA316()
            panelmenu316item4.ariaChecked = true

            backToSubSetting316()

            menuitemC36.innerText = soAr[4] + "%"

            sSA[6] = soAr[4]
        }
        panelmenu316item0.ariaChecked = true


        

        panelmenu316.appendChild(panelmenu316item0)
        panelmenu316.appendChild(panelmenu316item1)
        panelmenu316.appendChild(panelmenu316item2)
        panelmenu316.appendChild(panelmenu316item3)
        panelmenu316.appendChild(panelmenu316item4)

        panelmenu316item0.innerText = soAr[0] + "%"
        panelmenu316item1.innerText = soAr[1] + "%"
        panelmenu316item2.innerText = soAr[2] + "%"
        panelmenu316item3.innerText = soAr[3] + "%"
        panelmenu316item4.innerText = soAr[4] + "%"
    }
    if (e == 3.17) {

        pm317 = createE('div', 'PanelMenu317', 'PanelMenus')

        pm317.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm317)
        
        pm317.appendChild(createE('div', 'panelmenuheader317', 'panel-menuheader'))
        pm317.appendChild(createE('div', 'panelhr317', 'panel-hr'))
        pm317.appendChild(createE('div', 'panelmenu317', 'panel-menu'))

        headerspan317 = createE('span', 'headerspan317', 'header-span')
        panelmenuheader317.appendChild(headerspan317)

        headerspan317.onclick = () => {
            cMIS()
            PanelMenu317.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting317() {
            cMIS()
            PanelMenu317.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan317.innerText = sSAr[7]

        headerHspan317 = createE('span', 'headerHspan317', 'headerH-span')
        panelmenuheader317.appendChild(headerHspan317)
        headerHspan317.innerText = ""

        headerHspan317.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu317item0 = createE('div', 'panelmenu317item0', 'Menuitem-div')
        panelmenu317item1 = createE('div', 'panelmenu317item1', 'Menuitem-div')
        panelmenu317item2 = createE('div', 'panelmenu317item2', 'Menuitem-div')
        panelmenu317item3 = createE('div', 'panelmenu317item3', 'Menuitem-div')
        panelmenu317item4 = createE('div', 'panelmenu317item4', 'Menuitem-div')


        panelmenu317item0.onclick = () => {
            removeMIA317()
            panelmenu317item0.ariaChecked = true

            backToSubSetting317()

            menuitemC37.innerText = seAr[0]

            sSA[7] = seAr[0]
        }
        panelmenu317item1.onclick = () => {
            removeMIA317()
            panelmenu317item1.ariaChecked = true

            backToSubSetting317()

            menuitemC37.innerText = seAr[1]

            sSA[7] = seAr[1]
        }
        panelmenu317item2.onclick = () => {
            removeMIA317()
            panelmenu317item2.ariaChecked = true

            backToSubSetting317()

            menuitemC37.innerText = seAr[2]

            sSA[7] = seAr[2]
        }
        panelmenu317item3.onclick = () => {
            removeMIA317()
            panelmenu317item3.ariaChecked = true

            backToSubSetting317()

            menuitemC37.innerText = seAr[3]

            sSA[7] = seAr[3]
        }
        panelmenu317item4.onclick = () => {
            removeMIA317()
            panelmenu317item4.ariaChecked = true

            backToSubSetting317()

            menuitemC37.innerText = seAr[4]

            sSA[7] = seAr[4]
        }
        panelmenu317item0.ariaChecked = true


        // removed removeMIA317()
        

        panelmenu317.appendChild(panelmenu317item0)
        panelmenu317.appendChild(panelmenu317item1)
        panelmenu317.appendChild(panelmenu317item2)
        panelmenu317.appendChild(panelmenu317item3)
        panelmenu317.appendChild(panelmenu317item4)

        panelmenu317item0.innerText = seAr[0]
        panelmenu317item1.innerText = seAr[1]
        panelmenu317item2.innerText = seAr[2]
        panelmenu317item3.innerText = seAr[3]
        panelmenu317item4.innerText = seAr[4]
    }
    if (e == 3.18) {

        pm318 = createE('div', 'PanelMenu318', 'PanelMenus')

        pm318.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm318)
        
        pm318.appendChild(createE('div', 'panelmenuheader318', 'panel-menuheader'))
        pm318.appendChild(createE('div', 'panelhr318', 'panel-hr'))
        pm318.appendChild(createE('div', 'panelmenu318', 'panel-menu'))

        headerspan318 = createE('span', 'headerspan318', 'header-span')
        panelmenuheader318.appendChild(headerspan318)

        headerspan318.onclick = () => {
            cMIS()
            PanelMenu318.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }
        function backToSubSetting318() {
            cMIS()
            PanelMenu318.style.transform = 'translateX(100%)'
            PanelMenu31.style.transform = 'translateX(0%)'

            activeSetting = 31
            toSubSetting3()
        }

        headerspan318.innerText = sSAr[8]

        headerHspan318 = createE('span', 'headerHspan318', 'headerH-span')
        panelmenuheader318.appendChild(headerHspan318)
        headerHspan318.innerText = ""

        headerHspan318.onclick = () => {
            // 
        }


        // Menu Items

        panelmenu318item0 = createE('div', 'panelmenu318item0', 'Menuitem-div')
        panelmenu318item1 = createE('div', 'panelmenu318item1', 'Menuitem-div')
        panelmenu318item2 = createE('div', 'panelmenu318item2', 'Menuitem-div')
        panelmenu318item3 = createE('div', 'panelmenu318item3', 'Menuitem-div')


        panelmenu318item0.onclick = () => {
            removeMIA318()
            panelmenu318item0.ariaChecked = true

            backToSubSetting318()

            menuitemC38.innerText = soAr[1] + "%"

            sSA[8] = soAr[1]
        }
        panelmenu318item1.onclick = () => {
            removeMIA318()
            panelmenu318item1.ariaChecked = true

            backToSubSetting318()

            menuitemC38.innerText = soAr[2] + "%"

            sSA[8] = soAr[2]
        }
        panelmenu318item2.onclick = () => {
            removeMIA318()
            panelmenu318item2.ariaChecked = true

            backToSubSetting318()

            menuitemC38.innerText = soAr[3] + "%"

            sSA[8] = soAr[3]
        }
        panelmenu318item3.onclick = () => {
            removeMIA318()
            panelmenu318item3.ariaChecked = true

            backToSubSetting318()

            menuitemC38.innerText = soAr[4] + "%"

            sSA[8] = soAr[4]
        }
        panelmenu318item3.ariaChecked = true


        // removed removeMIA318()

        panelmenu318.appendChild(panelmenu318item0)
        panelmenu318.appendChild(panelmenu318item1)
        panelmenu318.appendChild(panelmenu318item2)
        panelmenu318.appendChild(panelmenu318item3)

        panelmenu318item0.innerText = soAr[1] + "%"
        panelmenu318item1.innerText = soAr[2] + "%"
        panelmenu318item2.innerText = soAr[3] + "%"
        panelmenu318item3.innerText = soAr[4] + "%"
    }
    if (e == 4) {
        // console.log('4');

        pm4 = createE('div', 'PanelMenu4', 'PanelMenus')

        pm4.style.transform = 'translateX(100%)'
        
        $("#SPanel").appendChild(pm4)
        
        pm4.appendChild(createE('div', 'panelmenuheader4', 'panel-menuheader'))
        pm4.appendChild(createE('div', 'panelhr4', 'panel-hr'))
        pm4.appendChild(createE('div', 'panelmenu4', 'panel-menu'))

        headerspan4 = createE('span', 'headerspan4', 'header-span')
        panelmenuheader4.appendChild(headerspan4)

        headerspan4.onclick = () => {
            backToMainSetting()
        }

        headerspan4.innerText = sAr[3]

        headerHspan4 = createE('span', 'headerH4span', 'headerH-span')
        panelmenuheader4.appendChild(headerHspan4)
        headerHspan4.innerText = ''


        panelmenu4item0 = createE('div', 'panelmenu4item0', 'Menuitem-div')
        panelmenu4item0.style.display = 'none'

        panelmenu4item1 = createE('div', 'panelmenu4item1', 'Menuitem-div')
        panelmenu4item1.style.display = 'none'

        panelmenu4item2 = createE('div', 'panelmenu4item2', 'Menuitem-div')
        // panelmenu4item2.style.display = 'none'

        panelmenu4item3 = createE('div', 'panelmenu4item3', 'Menuitem-div')
        panelmenu4item3.style.display = 'none'

        panelmenu4item4 = createE('div', 'panelmenu4item4', 'Menuitem-div')
        panelmenu4item4.style.display = 'none'

        panelmenu4item5 = createE('div', 'panelmenu4item5', 'Menuitem-div')
        panelmenu4item5.style.display = 'none'

        panelmenu4item6 = createE('div', 'panelmenu4item6', 'Menuitem-div')
        panelmenu4item6.style.display = 'none'

        panelmenu4item7 = createE('div', 'panelmenu4item7', 'Menuitem-div')
        panelmenu4item7.style.display = 'none'

        panelmenu4item8 = createE('div', 'panelmenu4item8', 'Menuitem-div')
        panelmenu4item8.style.display = 'none'


        panelmenu4item0.onclick = () => {
            removeMIA4()
            panelmenu4item0.ariaChecked = true
            menuitemC4.innerHTML = sqAr[0] + "p" + '<sup class="supQ">UHD</sup>'
            CurrentQuality = sqAr[0]
            changeQualityF()

            textsvg1.innerHTML = 'UHD'
            textsvg1.style.display = ''
            rectsvg1.style.display = ''
            textsvg1.x.baseVal[0].value = 20

            toggleSettings()
        }
        panelmenu4item1.onclick = () => {
            removeMIA4()
            panelmenu4item1.ariaChecked = true
            menuitemC4.innerHTML = sqAr[1] + "p" + '<sup class="supQ">QHD</sup>'
            CurrentQuality = sqAr[1]
            changeQualityF()

            textsvg1.innerHTML = 'QHD'
            textsvg1.style.display = ''
            rectsvg1.style.display = ''
            textsvg1.x.baseVal[0].value = 20

            toggleSettings()
        }
        panelmenu4item2.onclick = () => {
            removeMIA4()
            panelmenu4item2.ariaChecked = true
            menuitemC4.innerHTML = sqAr[2] + "p" + '<sup class="supQ">FHD</sup>'
            CurrentQuality = sqAr[2]
            changeQualityF()

            textsvg1.innerHTML = 'FHD'
            textsvg1.style.display = ''
            rectsvg1.style.display = ''
            textsvg1.x.baseVal[0].value = 20

            toggleSettings()
        }
        panelmenu4item2.ariaChecked = true
        panelmenu4item3.onclick = () => {
            removeMIA4()
            panelmenu4item3.ariaChecked = true
            menuitemC4.innerHTML = sqAr[3] + "p" + '<sup class="supQ">HD</sup>'
            CurrentQuality = sqAr[3]
            changeQualityF()

            textsvg1.innerHTML = 'HD'
            textsvg1.style.display = ''
            rectsvg1.style.display = ''
            textsvg1.x.baseVal[0].value = 22

            toggleSettings()
        }
        panelmenu4item4.onclick = () => {
            removeMIA4()
            panelmenu4item4.ariaChecked = true
            menuitemC4.innerHTML = sqAr[4] + "p" + '<sup class="supQ">SD</sup>'
            CurrentQuality = sqAr[4]
            changeQualityF()

            textsvg1.innerHTML = 'SD'
            textsvg1.style.display = ''
            rectsvg1.style.display = ''
            textsvg1.x.baseVal[0].value = 22

            toggleSettings()
        }
        panelmenu4item5.onclick = () => {
            removeMIA4()
            panelmenu4item5.ariaChecked = true
            menuitemC4.innerHTML = sqAr[5] + "p"
            CurrentQuality = sqAr[5]
            changeQualityF()

            textsvg1.innerHTML = ''
            textsvg1.style.display = 'none'
            rectsvg1.style.display = 'none'

            toggleSettings()
        }
        panelmenu4item6.onclick = () => {
            removeMIA4()
            panelmenu4item6.ariaChecked = true
            menuitemC4.innerHTML = sqAr[6] + "p"
            CurrentQuality = sqAr[6]
            changeQualityF()

            textsvg1.innerHTML = ''
            textsvg1.style.display = 'none'
            rectsvg1.style.display = 'none'

            toggleSettings()
        }
        panelmenu4item7.onclick = () => {
            removeMIA4()
            panelmenu4item7.ariaChecked = true
            menuitemC4.innerHTML = sqAr[7] + "p"
            CurrentQuality = sqAr[7]
            changeQualityF()

            textsvg1.innerHTML = ''
            textsvg1.style.display = 'none'
            rectsvg1.style.display = 'none'

            toggleSettings()
        }
        panelmenu4item8.onclick = () => {
            removeMIA4()
            panelmenu4item8.ariaChecked = true
            menuitemC4.innerHTML = sqAr[8]
            CurrentQuality = sqAr[8]
            changeQualityF()

            textsvg1.innerHTML = ''
            textsvg1.style.display = 'none'
            rectsvg1.style.display = 'none'

            toggleSettings()
        }

        function removeMIA4() {
            g1svg.style.display = 'none'
            backToMainSetting()
            panelmenu4item0.ariaChecked = false
            panelmenu4item1.ariaChecked = false
            panelmenu4item2.ariaChecked = false
            panelmenu4item3.ariaChecked = false
            panelmenu4item4.ariaChecked = false
            panelmenu4item5.ariaChecked = false
            panelmenu4item6.ariaChecked = false
            panelmenu4item7.ariaChecked = false
            panelmenu4item8.ariaChecked = false
        }

        panelmenu4.appendChild(panelmenu4item0)
        panelmenu4.appendChild(panelmenu4item1)
        panelmenu4.appendChild(panelmenu4item2)
        panelmenu4.appendChild(panelmenu4item3)
        panelmenu4.appendChild(panelmenu4item4)
        panelmenu4.appendChild(panelmenu4item5)
        panelmenu4.appendChild(panelmenu4item6)
        panelmenu4.appendChild(panelmenu4item7)
        panelmenu4.appendChild(panelmenu4item8)

        panelmenu4item0.innerHTML = sqAr[0] + 'p' + '<sup class="supQ">UHD(4K)</sup>'
        panelmenu4item1.innerHTML = sqAr[1] + 'p' + '<sup class="supQ">QHD(2K)</sup>'
        panelmenu4item2.innerHTML = sqAr[2] + 'p' + '<sup class="supQ">FHD</sup>'
        panelmenu4item3.innerHTML = sqAr[3] + 'p' + '<sup class="supQ">HD</sup>'
        panelmenu4item4.innerHTML = sqAr[4] + 'p' + '<sup class="supQ">SD</sup>'
        panelmenu4item5.innerHTML = sqAr[5] + 'p'
        panelmenu4item6.innerHTML = sqAr[6] + 'p'
        panelmenu4item7.innerHTML = sqAr[7] + 'p'
        panelmenu4item8.innerHTML = sqAr[8]
    }

}

function removeMIA310() {
    changeCueStyle()
    panelmenu310item0.ariaChecked = false
    panelmenu310item1.ariaChecked = false
    panelmenu310item2.ariaChecked = false
    panelmenu310item3.ariaChecked = false
    panelmenu310item4.ariaChecked = false
    panelmenu310item5.ariaChecked = false
    panelmenu310item6.ariaChecked = false
}

function removeMIA311() {
    changeCueStyle()
    panelmenu311item0.ariaChecked = false
    panelmenu311item1.ariaChecked = false
    panelmenu311item2.ariaChecked = false
    panelmenu311item3.ariaChecked = false
    panelmenu311item4.ariaChecked = false
    panelmenu311item5.ariaChecked = false
    panelmenu311item6.ariaChecked = false
    panelmenu311item7.ariaChecked = false
}

function removeMIA312() {
    changeCueStyle()
    panelmenu312item0.ariaChecked = false
    panelmenu312item1.ariaChecked = false
    panelmenu312item2.ariaChecked = false
    panelmenu312item3.ariaChecked = false
    panelmenu312item4.ariaChecked = false
    panelmenu312item5.ariaChecked = false
    panelmenu312item6.ariaChecked = false
}

function removeMIA313() {
    changeCueStyle()
    panelmenu313item0.ariaChecked = false
    panelmenu313item1.ariaChecked = false
    panelmenu313item2.ariaChecked = false
    panelmenu313item3.ariaChecked = false
    panelmenu313item4.ariaChecked = false
    panelmenu313item5.ariaChecked = false
    panelmenu313item6.ariaChecked = false
    panelmenu313item7.ariaChecked = false
}

function removeMIA314() {
    changeCueStyle()
    panelmenu314item0.ariaChecked = false
    panelmenu314item1.ariaChecked = false
    panelmenu314item2.ariaChecked = false
    panelmenu314item3.ariaChecked = false
    panelmenu314item4.ariaChecked = false
}

function removeMIA315() {
    changeCueStyle()
    panelmenu315item0.ariaChecked = false
    panelmenu315item1.ariaChecked = false
    panelmenu315item2.ariaChecked = false
    panelmenu315item3.ariaChecked = false
    panelmenu315item4.ariaChecked = false
    panelmenu315item5.ariaChecked = false
    panelmenu315item6.ariaChecked = false
    panelmenu315item7.ariaChecked = false
}

function removeMIA316() {
    changeCueStyle()
    panelmenu316item0.ariaChecked = false
    panelmenu316item1.ariaChecked = false
    panelmenu316item2.ariaChecked = false
    panelmenu316item3.ariaChecked = false
    panelmenu316item4.ariaChecked = false
}

function removeMIA317() {
    changeCueStyle()
    panelmenu317item0.ariaChecked = false
    panelmenu317item1.ariaChecked = false
    panelmenu317item2.ariaChecked = false
    panelmenu317item3.ariaChecked = false
    panelmenu317item4.ariaChecked = false
}

function removeMIA318() {
    changeCueStyle()
    panelmenu318item0.ariaChecked = false
    panelmenu318item1.ariaChecked = false
    panelmenu318item2.ariaChecked = false
    panelmenu318item3.ariaChecked = false
}














var CurrentQuality = 1080

lastQuality = CurrentQuality

function changeQualityF() {
    if (CurrentQuality == lastQuality) {
        // console.log("Same");
    } else {
        // console.log("Changed");
        lastQuality = CurrentQuality

        if (CurrentQuality == sqAr[8]) {
            // console.log("Quality == auto");
            // code for auto Quality
        } else {
            changeVideoQuality(CurrentQuality)
        }
        
    }
}
function changeVideoQuality(Q) {
    lastVideoPlayback = Video.paused
    Video.pause()
    lastCurrentTime = Video.currentTime
    Video.src = `Source/Video/${Q}.mp4`
    Video.currentTime = lastCurrentTime

    if (lastVideoPlayback) {
        Video.pause()
    } else {
        Video.play()
    }

}








function backToMainSetting() {
    cMIS()
    // console.log('cmis'); 
    pm2.style.transform = 'translateX(100%)'
    pm21.style.transform = 'translateX(100%)'
    pm3.style.transform = 'translateX(100%)'
    pm31.style.transform = 'translateX(100%)'

    pm310.style.transform = 'translateX(100%)'
    pm311.style.transform = 'translateX(100%)'
    pm312.style.transform = 'translateX(100%)'
    pm313.style.transform = 'translateX(100%)'
    pm314.style.transform = 'translateX(100%)'
    pm315.style.transform = 'translateX(100%)'
    pm316.style.transform = 'translateX(100%)'
    pm317.style.transform = 'translateX(100%)'
    pm318.style.transform = 'translateX(100%)'

    pm4.style.transform = 'translateX(100%)'

    pm0.style.transform = 'translateX(0%)'

    activeSetting = 0

    SPanel.style.width = PanelMenu0.offsetWidth + 'px'
    SPanel.style.height = PanelMenu0.offsetHeight + 'px'

    if (PanelMenu0.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
        SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        PanelMenu0.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
    }

    pm0.style.transform = 'translateX(0%)'
}
function backToSubSetting() {
    cMIS()
    pm2.style.transform = 'translateX(0%)'
    pm21.style.transform = 'translateX(100%)'
    // pm3.style.transform = 'translateX(100%)'
    // pm4.style.transform = 'translateX(100%)'

    // pm0.style.transform = 'translateX(0%)'

    activeSetting = 2

    SPanel.style.width = PanelMenu2.offsetWidth + 'px'
    SPanel.style.height = PanelMenu2.offsetHeight + 'px'

    if (PanelMenu2.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
        SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        PanelMenu2.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
    }

    // pm0.style.transform = 'translateX(0%)'
}
function backToSubSetting3() {
    cMIS()
    pm3.style.transform = 'translateX(0%)'
    pm31.style.transform = 'translateX(100%)'
    // pm3.style.transform = 'translateX(100%)'
    // pm4.style.transform = 'translateX(100%)'

    // pm0.style.transform = 'translateX(0%)'

    activeSetting = 3

    SPanel.style.width = PanelMenu3.offsetWidth + 'px'
    SPanel.style.height = PanelMenu3.offsetHeight + 'px'

    if (PanelMenu3.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
        SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        PanelMenu3.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
    }

    // PanelMenu3.style.transform = `translateX(-${PanelMenu31.offsetWidth}px)`
    // PanelMenu0.style.transform = `translateX(-${PanelMenu3.offsetWidth}px)`

    // pm0.style.transform = 'translateX(0%)'
}

function toSubSetting() {
    cMIS()
    
    // pm2.style.transform = 'translateX(100%)'
    // pm3.style.transform = 'translateX(100%)'
    // pm4.style.transform = 'translateX(100%)'

    // pm0.style.transform = 'translateX(0%)'

    // activeSetting = 21

    SPanel.style.width = PanelMenu21.offsetWidth + 'px'
    SPanel.style.height = PanelMenu21.offsetHeight + 'px'

    if (PanelMenu21.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
        SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        PanelMenu21.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
    }

    // pm0.style.transform = 'translateX(0%)'
}

function toSubSetting3() {
    cMIS()
    
    // pm2.style.transform = 'translateX(100%)'
    // pm3.style.transform = 'translateX(100%)'
    // pm4.style.transform = 'translateX(100%)'

    // pm0.style.transform = 'translateX(0%)'

    // activeSetting = 21

    SPanel.style.width = PanelMenu31.offsetWidth + 'px'
    SPanel.style.height = PanelMenu31.offsetHeight + 'px'

    if (PanelMenu31.offsetHeight > (Player.offsetHeight - (CArr[2][1] + SettingMargin))) {
        SPanel.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
        PanelMenu31.style.height = Player.offsetHeight - (CArr[2][1] + SettingMargin) + 'px'
    }

    // pm0.style.transform = 'translateX(0%)'
}



