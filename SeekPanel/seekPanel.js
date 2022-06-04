var leftSize = 12


function seektimeTransform(e) {
    seekPosition = (e.clientX - Progress.getBoundingClientRect().left)
    seektimeSize0 = SeekTime.offsetWidth / 2
    seektimeSize1 = SeekPreview.offsetWidth / 2
    if (seekPosition < (PreviewSize / 2)) {
        seeksize0 = leftSize + (PreviewSize / 2) - seektimeSize0
        seeksize1 = leftSize + (PreviewSize / 2) - seektimeSize1
    } else if (seekPosition > ($("#ProgressBar").offsetWidth - (PreviewSize / 2))) {
        seeksize0 = leftSize + ProgressBar.offsetWidth - (PreviewSize / 2) - seektimeSize0
        seeksize1 = leftSize + ProgressBar.offsetWidth - (PreviewSize / 2) - seektimeSize1
    } else {
        seeksize0 = leftSize + seekPosition - seektimeSize0
        seeksize1 = leftSize + seekPosition - seektimeSize1
    }

    SeekTime.style.left = seeksize0 + "px"
    SeekPreview.style.left = seeksize1 + "px"

    updatePreview(e)
}


function updatePreview(e) {
    SeekPreview.style.width = PreviewSize + "px"
    SeekPreview.style.height = VPreview.videoHeight + "px"
    VPreview.style.width = PreviewSize + "px"
    VPreview.currentTime = (VP.duration / 100) * ((e.clientX - Progress.getBoundingClientRect().left) / (Progress.offsetWidth / 100)) / 30
}