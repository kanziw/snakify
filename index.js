const snakeCase = require('lodash.snakecase')

const isArray = value => Array.isArray(value)
const isNil = value => value === undefined || value === null
const isString = value => typeof value === 'string'
const isNumber = value => typeof value === 'number' // We allow NaN
const isBoolean = value => typeof value === 'boolean'

const anyPass = (value, ...predictors) => predictors.some(predictor => predictor(value))

const snakify = (obj, options) => {
  if (isArray(obj)) {
    return obj.map(item => snakify(item))
  }

  if (anyPass(obj, isNil, isString, isNumber, isBoolean)) {
    return obj
  }

  return Object
    .entries(obj)
    .reduceRight(
      (acc, [ key, value ]) => 
        Object.assign(
          { [ processOptions(snakeCase(key), options) ]: snakify(value) }, 
          acc,
        ),
      {},
    )
}

const optionProcessor = {
  ignoreNumber,
}

function processOptions(key, options) {
  if (!options) {
    return key
  }

  let result = key

  Object.keys(options).forEach(name => {
    result = optionProcessor[name](key)
  })

  return result
}

function ignoreNumber(key) {
  return key.replace(/(_)([0-9])+/g, `$2`)
}

module.exports = snakify
