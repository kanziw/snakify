# snakify

Convert keys to snake case

## Installation

Using npm:

```bash
$ npm i snakify
```

## Usage

In Node.js:

```js
import snakify from 'snakify' // const snakify = require('snakify');

snakify({ numVal: 1, strVal: 'camelCase', boolVal: true })
// { num_val: 1, str_val: 'camelCase', bool_val: true }
```

### Supoorted Options

```js
const options = {
  // Look at the options below
  ignoreNumber: true
}

snakify({ txL7Size: 1, rxSizeL7: true }, options);
// { tx_l7_size: 1, rx_size_l7: true }
```

- With `ignoreNumber`, doesn't do snake case conversion that describes numbers.

See the [test-case](./snakify.test.js) for other usage.
