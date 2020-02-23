# snakify

Convert keys to snake case

## Installation

Using npm:

```bash
$ npm i snakify
```

In Node.js:

```js
import snakify from 'snakify' // const snakify = require('snakify');

snakify({ numVal: 1, strVal: 'camelCase', boolVal: true })
// { num_val: 1, str_val: 'camelCase', bool_val: true }
```

See the [test-case](./snakify.test.js) for other usage.
