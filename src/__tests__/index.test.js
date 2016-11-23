const { expect } = require('chai')

const loadQuran = require('../loadQuran')
const { getVerse, getSurah } = require('../index')
const { verseCountBySurah, verseIndexBySurah } = require('../versesBySurah')

describe('getVerse', function() {
  it('should return the first verse', function(done) {
    loadQuran().then(quran => {
      getVerse(1).then(verse => {
        expect(verse).to.equal(quran[0])
        done()
      })
    })
  })

  it('should return the last verse', function(done) {
    loadQuran().then(quran => {
      getVerse(6236).then(verse => {
        expect(verse).to.equal(quran.slice(-1)[0])
        done()
      })
    })
  })
})

describe('getSurah', function() {
  it('should return the correct verses', function(done) {
    loadQuran().then(quran => {
      const promises = [];

      [...Array(114).keys()].forEach(surahIndex => {
        promises.push(getSurah(surahIndex + 1).then(verses => {
          const surahStartIndex = verseIndexBySurah[surahIndex]
          const surahLength = verseCountBySurah[surahIndex]
          expect(verses).to.deep.equal(quran.slice(surahStartIndex, surahStartIndex + surahLength))
        }))
      })

      return Promise.all(promises).then(() => done())
    })
  })
})