const snakeCase = require('lodash.snakecase')

const isString = value => typeof value === 'string'
const isNumber = value => typeof value === 'number' && !isNaN(value)
const isArray = value => Array.isArray(value)

const snakify = obj => {
  if (isArray(obj)) {
    return obj.map(item => snakify(item))
  }

  if (!obj || isString(obj) || isNumber(obj)) {
    return obj
  }

  return Object
    .entries(obj)
    .reduceRight(
      (acc, [ key, value ]) => Object.assign({ [ snakeCase(key) ]: value }, acc),
      {},
    )
}
