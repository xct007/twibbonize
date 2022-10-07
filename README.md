<a name="readme-top"></a>
<br />
<div align="center">
  <a href="#">
    <img src="input/rose.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Twibbonize</h3>
</div>

# How to use
1. Clone this repo
  ```sh
  git clone https://github.com/xct007/twibbonize.git
  ```
  or Install via NPM
  ```sh
  npm install UNNAMED
  ```

2. Example
  - Import Packages
    ```js
    const {
        search,
        imageProcess
    } = require("./index.js")
    ```
    EJS
    ```js
    import pkg from './index.js'
    const {
        search,
        imageProcess
    } = pkg
    ```
  - Search Twibbon
    ```js
    let limit = 10 // limit result, if not set default 10

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
    ```
  - Get Twibbon
    ```js

    const fs = require('fs')

    let id = "twibbonkbi" // the id of twibbon if not found return error
    let image = "./input/rose.png" // can be url or path to image
    imageProcess(id, image).then(async(buffer) => {
        // return image buffer
        console.log(buffer)
        // save image
        fs.writeFileSync('./output/result.png', buffer)
    })
    ```
## Contact

David - [@david.stefen](https://instagram.com/david.stefen)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

