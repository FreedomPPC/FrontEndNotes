function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var h = helloWorldGenerator();

console.log(h); //返回的是一个指向内部的指针对象；{}；

console.log(h.next()); //{ value: 'hollo', done:false };

console.log(h.next()); //{ value: 'world', done: false };

console.log(h.next()); //{ value:'ending', done:false };

console.log(h.next()); //{ value:undefined, done:false };