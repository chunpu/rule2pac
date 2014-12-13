var directCases = 'zhidao.baidu.com weibo.com zhihu.com bing.cn'.split(/\s+/)
var proxyCases = 'google.com google.com.hk aaa.google.com aaa.chrome.google.com bbs.sexinsex.net t66y.com'.split(/\s+/)

function test(jsstr) {
    eval(jsstr)
    if (typeof FindProxyForURL != 'function') {
        return console.log('fail to find FindProxyForURL function')
    }
    coverage()
    console.time('benchmark:10000')
    benchmark(directCases)
    benchmark(proxyCases)
    console.timeEnd('benchmark:10000')


    function coverage() {
        var i = 0

        directCases.map(function(host) {
            var ret = FindProxyForURL('http://' + host + '/', host)
            if (0 != ret.trim().indexOf('DIRECT')) {
                console.log('direct test fail: %s', host)
                i++
                return false
            }
            return true
        })
        if (i > 0) {
            console.log('direct fails:', i)
        } else {
            console.log('direct ok')
        }

        proxyCases.map(function(host) {
            var ret = FindProxyForURL('http://' + host + '/', host)
            if (!ret || 0 == ret.trim().indexOf('DIRECT')) {
                console.log('proxy test fail: %s', host)
                i++
                return false
            }
            return true
        })
        if (i > 0) {
            console.log('proxy fails:', i)
        } else {
            console.log('proxy ok')
        }

    }

    function benchmark(arr) {
        var sum = 10000
        var len = arr.length
        var i = 0
        while (sum--) {
            FindProxyForURL('http://' + arr[i] + '/', arr[i])
            i++
            if (i >= len) {
                i = i % len
            }
        }
    }

}


initNode()

function initNode() {
    if ('undefined' == typeof process) {
        return // not node
    }
    var file = process.argv[2]
    if (!file) return
    var fs = require('fs')
    var path = require('path')
    fs.readFile(path.resolve(process.cwd(), file), function(err, buf) {
        if (err) {
            console.log('no such file', err)
        }
        test(buf + '')
    })
}
