const snakify = require('./index')

test('shallow depth', () => {
  const given = { shallowDepth: true }
  const expected = { shallow_depth: true }

  expect(snakify(given)).toEqual(expected)
})

test('deep depth', () => {
  const given = { oneDepth: { twoDepth: { threeDepth: true }, twoDepth2: { threeDepth2: false } } }
  const expected = { one_depth: { two_depth: { three_depth: true }, two_depth_2: { three_depth_2: false } } }

  expect(snakify(given)).toEqual(expected)
})

test('various types', () => {
  const given = { numVal: 1, strVal: 'camelCase', boolVal: true, nullValue: null, undefinedValue: undefined }
  const expected = { num_val: 1, str_val: 'camelCase', bool_val: true, null_value: null, undefined_value: undefined }

  expect(snakify(given)).toEqual(expected)
})

test('array case', () => {
  const given = {
    arrVal: [ 1, 'camelCaseArrVal', true ],
    arrObj: [
      { numVal: 1, strVal: 'camelCase', boolVal: true },
      { numVal: 1, strVal: 'camelCase', boolVal: true },
    ],
  }
  const expected = {
    arr_val: [ 1, 'camelCaseArrVal', true ],
    arr_obj: [
      { num_val: 1, str_val: 'camelCase', bool_val: true },
      { num_val: 1, str_val: 'camelCase', bool_val: true },
    ],
  }

  expect(snakify(given)).toEqual(expected)
})

test('ignoreNumber option case', () => {
  const given = {
    txL7Size: [ 1, 'camelCaseArrVal', true ],
    txL4Size: [
      { numVal: 1, strVal: 'camelCase', boolVal: true },
      { numVal: 1, strVal: 'camelCase', boolVal: true },
    ],
  }
  const expected = {
    tx_l7_size: [ 1, 'camelCaseArrVal', true ],
    tx_l4_size: [
      { num_val: 1, str_val: 'camelCase', bool_val: true },
      { num_val: 1, str_val: 'camelCase', bool_val: true },
    ],
  }

  expect(snakify(given, { ignoreNumber: true })).toEqual(expected)
})
