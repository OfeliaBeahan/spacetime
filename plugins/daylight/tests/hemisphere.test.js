import test from 'tape'
import spacetime from 'spacetime'
import daylight from '../src/index.js'
// import daylight from '../builds/spacetime-daylight.mjs'
spacetime.extend(daylight)

test('southern-hemisphere-opposite', function (t) {
  let s = spacetime('December 16 2018', 'Australia/Canberra')
  t.equal(s.daylight().duration.human.hours, 14, 'long-days in Australia')

  s = spacetime('June 12 2018', 'Australia/Canberra')
  t.equal(s.daylight().duration.human.hours, 9, 'short-days in Australia')

  s = spacetime('December 12 2018', 'America/Sao_Paulo')
  t.equal(s.daylight().duration.human.hours, 13, 'long-days in brazil')

  s = spacetime('June 12 2018', 'America/Sao_Paulo')
  t.equal(s.daylight().duration.human.hours, 10, 'short-days in brazil')
  t.end()
})
