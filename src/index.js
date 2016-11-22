const fs = require('fs')
const path = require('path')

let quranCache = null

const loadQuran = () =>
  new Promise((resolve, reject) => {
    if (quranCache) {
      return resolve(quranCache)
    }

    fs.readFile(path.join(__dirname, 'quran-uthmani.txt'), 'utf-8', (err, text) => {
      if (err) {
        return reject(err)
      }
      quranCache = text.split('\n')
      return resolve(quranCache)
    })
  })

const getVerse = num => {
  if (num < 1 || num > 6236) {
    return Promise.reject('Verse number needs to be between 1 and 6236.')
  }
  return loadQuran().then(quran => quran[num - 1])
}

module.exports = {
  getVerse,
}