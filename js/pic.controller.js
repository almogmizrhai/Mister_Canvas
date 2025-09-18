// pic controller

'use strict'


function renderPics(){
    const pics = getPics()
    var strHtml = pics.map(pic => {
        return `
        <div class="pic-card">
            <img class="pic" src="${pic.url}" onclick="onSelectPic('${pic.id}')" />
            <button class="btn" onclick="onRemovePic('${pic.id}')">❌</button>
            <button class="btn" onclick="onSelectPic('${pic.id}')">🖌️</button>
        </div>
        `
    })
    document.querySelector('.saved-pics').innerHTML = strHtml.join('')
}

function renderImg(img) {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onAddPic(ev){
    ev.preventDefault()

    const canvasData = gElCanvas.toDataURL('image/png') //תומך רקע שקוף
    addPic(canvasData)
    renderPics()
}

function onRemovePic(picId){
    removePic(picId)
    renderPics()
}

function onSelectPic(picId){
    const picIdx = getPicById(picId)
    if(picIdx === -1) return
    const img = new Image()
    img.src = gPics[picIdx].url

    img.onload = () => {
        renderImg(img)
    }
}
