// test code
var fs = require('fs')
var convert = require('./')
fs.readFile('./test/_gfw', function(err, buf) {
    console.log(convert(buf + ''))
})
