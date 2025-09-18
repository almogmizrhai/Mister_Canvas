

'use strict'


function onInit() {
    console.log('onInit')
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    // מאזינים לאירועי עכבר
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)

    // מאזינים גם למגע במסכים ניידים
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)

    renderPics()
}
