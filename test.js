const {
    search,
    imageProcess
} = require("./index.js")
/*
let limit = 10 // limit result, if not set deafult 10

let query = 'badut'

search(query, limit).then(async(data) => {console.log(data)})*/


const fs = require('fs')

let id = "twibbonkbi" // the id of twibbon if not found return error
let image = "./input/rose.png" // can be url or path to image
imageProcess(id, image).then(async(buffer) => {
    // return image buffer
    console.log(buffer)
    // save image
    fs.writeFileSync('./output/result.png', buffer)
})


