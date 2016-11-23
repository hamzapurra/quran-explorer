const { expect } = require('chai')

const loadQuran = require('../loadQuran')
const { getVerse } = require('../index')

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