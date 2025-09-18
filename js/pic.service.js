// pic service

'use strict'


const STORAGE_KEY = 'picsDB'

var gPics = loadFromStorage(STORAGE_KEY) || []

function getPics() {
    return gPics
}


function addPic(data){
    
    const pic = _createPic(data)
    gPics.push(pic)
    
    _savePicsToStorage()
    renderPics()
}

function removePic(picId) {
    const picIdx = getPicById(picId)
    if (picIdx === -1) return
    gPics.splice(picIdx, 1)
    _savePicsToStorage()
}

function getPicById(picId) {
    return gPics.findIndex(pic => pic.id === picId)
}

function _createPic(data){
    return {
        url: data,
        id: makeId(4),
    }
}

function _savePicsToStorage() {
    saveToStorage(STORAGE_KEY, gPics)
}