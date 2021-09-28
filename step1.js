"use strict";

const fsP = require('fs/promises')

// let path = process.argv[2];
// console.log(process.argv[2]);
async function cat(path) {
    // console.log(path)
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log(err.message);
        process.exit(1);

    }
};

cat(process.argv[2]);

