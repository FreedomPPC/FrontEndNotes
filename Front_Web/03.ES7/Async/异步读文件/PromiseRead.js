const fs = require('fs');

const readFile = function(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (error) reject(error);
            resolve(data);
        })
    })
}

function* gen() {
    const f1 = yield readFile('./one.txt');
    const f2 = yield readFile('./two.txt');

    console.log(f1.toString());
    console.log(f2.toString());
}

gen.next();