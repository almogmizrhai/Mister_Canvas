

'use strict'


var gElCanvas 
var gCtx 
var gIsMouseDown = false 
var gBrush = { 
    color: 'black', 
    size: 5, 
    shape: 'square',
    selectImg: null,
}



function drawRect(x, y) {
    gCtx.beginPath()

    gCtx.strokeStyle = gBrush.color
    gCtx.lineWidth = gBrush.size

    gCtx.strokeRect(x, y, gBrush.size, gBrush.size)

}


function drawArc(x, y) {
    gCtx.beginPath()
    
    gCtx.lineWidth = gBrush.size

    gCtx.arc(x, y, gBrush.size / 2, 0, Math.PI * 2)
    gCtx.fillStyle = gBrush.color
    gCtx.fill()
    gCtx.stroke()
}

function getEvPos(ev) {
    const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        //* Prevent triggering the default mouse behavior
        ev.preventDefault()

        //* Gets the first touch point (could be multiple in touch event)
        ev = ev.changedTouches[0]

        /* 
        * Calculate touch coordinates relative to canvas 
        * position by subtracting canvas offsets (left and top) from page coordinates
        */
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function setColor(color) {
    gBrush.color = color
}

function setSize(size) {
    gBrush.size = size
}

function setShape(shape) {
    gBrush.shape = shape
}