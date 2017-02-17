const counter = 5;
const icount = function(){
    counter++;
}

var obj = {
    counter : counter,
    icount: icount
}

module.exports = obj
