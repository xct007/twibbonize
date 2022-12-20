<a name="readme-top"></a>
<br />
<h1 align="center">Twibbonize</h1>

<div align="center">
  <a href="#">
    <img src="output/result.png" alt="Logo" style="width: 100%; height: 100%;">
  </a>
</div>

# TODO
- [ ] Make this package more useful
- [ ] Make code more readable
- [ ] Etc.


# How to use
1. Install Packages
  ```sh
  npm install twibbonize
  ```
  - or yarn
  ```sh
  yarn add twibbonize
  ```

2. Example
  - Import Packages
    ```js
    const {
        search,
        imageProcess
    } = require("twibbonize")
    ```
    EJS
    ```js
    import pkg from 'twibbonize'
    const {
        search,
        imageProcess
    } = pkg
    ```
  - Search Twibbon
    ```js
    let limit = 10 // limit result, if not set default 10

    let query = 'badut'

    search(query, limit, limitOutput).then(async(data) => {console.log(data)})

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
    let image = "./input/rose.png" // can be image url or path to image
    imageProcess(id, image).then(async(buffer) => {
        // image buffer
        console.log(buffer)
        // save image
        fs.writeFileSync('./output/result.png', buffer)
    })
    ```
## Contact

David - [@david.stefen](https://instagram.com/david.stefen)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

