Auto Proxy Rules => PAC
===

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

Fast [pacScript](http://en.wikipedia.org/wiki/Proxy_auto-config) generator inspired by [@clowwindy](https://github.com/clowwindy)

Install
---

```sh
npm install rule2pac
```

Usage
---

```js
var convert = require('rule2pac')
var pacScript = convert(rules) // rule is string
```

Generated pacScript [e.g.](https://github.com/chunpu/rule2pac/blob/gh-pages/test/test.pac.js)

use opt.precheck to define simpel precheck rule

```js
var pacScript = convert(rules, {
    precheck: 'google twitter youtube'
})
```

Pac script will precheck if host contains one of this before check out the rules

Benchmark & Coverage
---

Test your pac script's benchmark and coverage by using

```sh
node pac-file-test.js /tmp/test.pac
=>
direct ok
proxy ok
benchmark:10000: 32ms
```

[npm-image]: https://img.shields.io/npm/v/rule2pac.svg?style=flat-square
[npm-url]: https://npmjs.org/package/rule2pac
[travis-image]: https://img.shields.io/travis/chunpu/rule2pac.svg?style=flat
[travis-url]: https://travis-ci.org/chunpu/rule2pac
