const {
    search,
    imageProcess
} = require("./index.js")
/*
// limit result output, deafult 10
let limit = 10

let query = 'badut'

search(query, limit).then(async(data) => {console.log(data)})

/* example
    ouput:

    [
        {
            hit: '471800',
            creator: 'Brian',
            name: 'Komunitas Badut Indonesia',
            id: 'twibbonkbi',
            description: 'Jadilah badut sejati dengan twibbon ini!\n' +
            'Jangan lupa hashtag #BadutNyariJob biar di acc postingan nya di grup KBI!\n' +
            'facebook.com/groups/komunitasbadutindonesia/\n' +
            '@standinshd',
            url: 'https://www.twibbonize.com/twibbonkbi'
        },
        ...
    ]

*/

// get Twibbon */

const fs = require('fs')

let id = "twibbonkbi" // the id of twibbon if not found return error
let image = "./input/rose.png" // can be url or path to image
imageProcess(id, image).then(async(buffer) => {
    // return image buffer
    console.log(buffer)
    // save image
    fs.writeFileSync('./output/result.png', buffer)
})


