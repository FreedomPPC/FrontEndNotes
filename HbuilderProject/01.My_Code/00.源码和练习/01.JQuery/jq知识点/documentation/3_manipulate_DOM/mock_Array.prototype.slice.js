Array.prototype.slice = function (start, end) {
    if (start === undefined) {
        start = 0;
    }

    if (end === undefined) {
        end = this.length;
    }

    var result = [];
    for (var i = start, j = 0; i < end; i++, j++) {
        //result.push(this[i]);
        result[j] = this[i];
    }

    return result;
}

var links = document.getElementsByTagName('a');

Array.prototype.slice.apply(links)