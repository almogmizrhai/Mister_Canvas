

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

function onLoadCanvas() {
    console.log('load canvas')
}

function onShareFacebook() {
    console.log('share facebook')
}

function onSetColor(color){
    setColor(color)
}

function onSetSize(size){
    setSize(size)
}

function onSetShape(shape) {
    setShape(shape)
}

function onClearCanvas() {
    console.log('clear canvas')
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}