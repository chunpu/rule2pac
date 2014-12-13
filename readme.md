Auto Proxy Rules => PAC
===

fast [pacScript](http://en.wikipedia.org/wiki/Proxy_auto-config) generator inspired by [@clowwindy](https://github.com/clowwindy)

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

Benchmark & Coverage
---

You can test you pac script by using

```sh
node pac-file-test.js /tmp/test.pac
=>
direct ok
proxy ok
benchmark:10000: 32ms
```
