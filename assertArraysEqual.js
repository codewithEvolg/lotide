const assertEqual = require('./assertEqual');
// FUNCTION IMPLEMENTATION

const assertArraysEqual = function(array1, array2){
  let result = false;
  if(array1.length !== array2.length){
    return false;
  }
  else{
    for(let a in array1){
      if(array1[a] !== array2[a]){
        return false;
      }
      else{
        result = true;
      };
    }
  }
  return result;
}

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);

module.exports = assertArraysEqual;