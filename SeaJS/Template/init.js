define(function(require,exports,module){
  var data = require('./data');
  var css = require('./style.css');
  $('.author').html(data.author)
  $('.github>a').attr('href',data.github)

});
