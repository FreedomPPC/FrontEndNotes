async function gen() {
    var r1 = await 'r1';
    var r2 = await 'r2';
    var r3 = await 'r3';

    console.log([r1, r2, r3].join('\n'));
}

gen();