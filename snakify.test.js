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
    arrV1Val: [ 1, 'camelCaseArrVal', true ],
    arrV1Obj: [
      { numVal: 1, strVal: 'camelCase', boolVal: true },
      { numVal: 1, strVal: 'camelCase', boolVal: true },
    ],
    hello1World: 'hello1World',
    helloW1Orld: 'helloW1Orld',
  }
  const expected = {
    arr_v1_val: [ 1, 'camelCaseArrVal', true ],
    arr_v1_obj: [
      { num_val: 1, str_val: 'camelCase', bool_val: true },
      { num_val: 1, str_val: 'camelCase', bool_val: true },
    ],
    hello1_world: 'hello1World',
    hello_w1_orld: 'helloW1Orld',
  }

  expect(snakify(given, { ignoreNumber: true })).toEqual(expected)
})
