"use strict";

const fsP = require('fs/promises')
const axios = require('axios')

async function cat(path) {
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log(err.stack);
        process.exit(0);

    }
};



async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.log(err.stack);
        process.exit(1);
    }
};

let path = process.argv[2];

// if (path.includes(".txt")) {
//     cat(path);
// }

if (path.includes('://')) {
    webCat(path);
} else {
    cat(path);
}
