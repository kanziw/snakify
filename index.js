const snakeCase = require('lodash.snakecase')

const isArray = value => Array.isArray(value)
const isNil = value => value === undefined || value === null
const isString = value => typeof value === 'string'
const isNumber = value => typeof value === 'number' // We allow NaN
const isBoolean = value => typeof value === 'boolean'

const anyPass = (value, ...predictors) => predictors.some(predictor => predictor(value))

const snakify = obj => {
  if (isArray(obj)) {
    return obj.map(item => snakify(item))
  }

  if (anyPass(obj, isNil, isString, isNumber, isBoolean)) {
    return obj
  }

  return Object
    .entries(obj)
    .reduceRight(
      (acc, [ key, value ]) => Object.assign({ [ snakeCase(key) ]: value }, acc),
      {},
    )
}

module.exports = snakify
