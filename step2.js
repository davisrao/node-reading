"use strict";

const fsP = require('fs/promises')
const axios = require('axios')

async function cat() {
    let path = process.argv[2];
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log(err)
        process.exit(0)

    }
};

// cat();

async function webCat() {
    let url = process.argv[2];
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.log(err)
        process.exit(0)

    }
};

webCat();