import fs from 'fs'
import path from 'path'

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

export default loadQuran