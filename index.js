const snakeCase = require('lodash.snakecase')

const isString = value => typeof value === 'string'
const isNumber = value => typeof value === 'number' && !isNaN(value)
const isArray = value => Array.isArray(value)
const isBoolean = value => typeof value === 'boolean'

const snakify = obj => {
  if (isArray(obj)) {
    return obj.map(item => snakify(item))
  }

  if (!obj || isString(obj) || isNumber(obj) || isBoolean(obj)) {
    return obj
  }

  return Object
    .entries(obj)
    .reduceRight(
      (acc, [ key, value ]) => Object.assign({ [ snakeCase(key) ]: snakify(value) }, acc),
      {},
    )
}

module.exports = snakify
