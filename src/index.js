const loadQuran = require('./loadQuran')

const getVerse = num => {
  if (num < 1 || num > 6236) {
    return Promise.reject('Verse number needs to be between 1 and 6236.')
  }
  return loadQuran().then(quran => quran[num - 1])
}

module.exports = {
  getVerse,
}