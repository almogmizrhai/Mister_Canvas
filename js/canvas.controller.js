

'use strict'
    


function onDown(ev) {
    //* Get mouse/touch position relative to canvas
    const pos = getEvPos(ev)
    console.log('pos:', pos)    
    gIsMouseDown = true
    onDraw(ev)
}

function onUp() {
    gIsMouseDown = false
}

function onMove(ev) {
    if (!gIsMouseDown) return
    onDraw(ev)
}

function onDraw(ev) {
    const pos = getEvPos(ev)
    
    if (gBrush.selectedImg) {
        gCtx.font = gBrush.size * 2 + 'px Arial'
        gCtx.fillText(gBrush.selectedImg, pos.x, pos.y)
        return
    }

    switch (gBrush.shape) {
        case 'square':
            drawRect(pos.x, pos.y)
            break
        case 'round':
            drawArc(pos.x, pos.y)
            break
    }
}


function onDownloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()

    reader.onload = (event) => {
        const img = new Image()
        img.src = event.target.result

        img.onload = () => {
            onImageReady(img)
        }
    }

    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onShareFacebook(url) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`)
}

function onUploadImg(ev) {
    ev.preventDefault()
    const canvasData = gElCanvas.toDataURL('image/jpeg')

    // After a successful upload, allow the user to share on Facebook
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        onShareFacebook(encodedUploadedImgUrl)
    }

    uploadImg(canvasData, onSuccess)
}

function onSetImg(imgValue) {
  gBrush.selectedImg = imgValue === " " ? null : imgValue
  console.log('Selected emoji:', gBrush.selectedImg)
}

function unSetImg() {
  gBrush.selectedImg = null
}

function onSetColor(color){
    setColor(color)
    unSetImg()
}

function onSetSize(size){
    setSize(size)
    unSetImg()
}

function onSetShape(shape) {
    setShape(shape)
    unSetImg()
}

function onClearCanvas() {
    console.log('clear canvas')
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}