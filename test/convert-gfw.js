var fs = require('fs')
var path = require('path')
var assert = require('assert')

// http://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt

fs.readFile(path.join(__dirname, 'gfwlist.txt'), function(err, buf) {
    assert(!err)
    var rule = new Buffer(buf + '', 'base64').toString()
    console.log(rule)
})
