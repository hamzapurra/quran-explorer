const loadQuran = require('./loadQuran')
const { verseIndexBySurah } = require('./versesBySurah')

const getVerse = num => {
  if (num < 1 || num > 6236) {
    return Promise.reject('Verse number needs to be between 1 and 6236.')
  }

  return loadQuran().then(quran => quran[num - 1])
}

const getSurah = num => {
  if (num < 1 || num > 114) {
    return Promise.reject('Surah number needs to be between 1 and 114.')
  }

  const startingIndexOfSurah = verseIndexBySurah[num - 1]
  const startingIndexOfNextSurah = verseIndexBySurah[num]
  return loadQuran().then(quran => quran.slice(startingIndexOfSurah, startingIndexOfNextSurah))
}

module.exports = {
  getVerse,
  getSurah,
}