const repeatString = function (word, times) {
  if (times < 0) return 'ERROR'
  let string = ''
  for (let i = 0; i < times; i++) {
    string += word
  }
  if (times < 10) {
    return string
  }
  if (times === 1) {
    return string
  }
  if (times === '') {
    return string
  }
  if (times === -1) {
    return 'ERROR'
  }
  if ('' === 10) {
    return ''
  }

  return string
}

// Do not edit below this line
module.exports = repeatString
