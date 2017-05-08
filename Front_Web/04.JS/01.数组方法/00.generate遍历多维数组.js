//generate 遍历多维数据
var arr = [1, [
        [2, 3], 4
    ],
    [5, 6]
];
let flat = function*(a) {
    for (let i = 0; i < a.length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
}

for (let f of flat(arr)) {
    console.log(f);
}