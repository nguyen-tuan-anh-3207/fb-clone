import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'

export default {
  strToSnakeCase(str) {
    if (!str || str.length === 0) {
      return str
    }

    return snakeCase(str)
  },

  strToCamelCase(str) {
    if (!str || str.length === 0) {
      return str
    }

    return camelCase(str)
  }
}
