// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const findKeyByValue = require('./findKeyByValue');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  findKeyByValue: findKeyByValue
};