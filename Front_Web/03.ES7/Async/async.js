async function gen() {
    var r1 = await 'r1';
    var r2 = await 'r2';
    var r3 = await 'r3';

    console.log([r1, r2, r3].join('\n'));
}

gen();

function pro() {
    return new Promise(function(resolve, reject) {
        var num = 10;
        if (num < 0) {
            num++;
            resolve(num);
        } else {
            num--;
            reject(num);
        }
    })
}

console.log(pro());