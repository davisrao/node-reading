"use strict";

const fsP = require('fs/promises')

let path = process.argv[2];
// console.log(process.argv[2]);
async function cat() {
    // console.log(path)
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log(err)
        process.exit(0)

    }
};

cat();

