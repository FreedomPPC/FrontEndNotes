'use strict';

var fs = require('fs');

var data = 'hello fs.writeFile';

fs.writeFile('output.txt', data, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok--写入成功');
    }
});