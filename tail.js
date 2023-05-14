// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(0x1F354)}  Assertion Passed:  ${actual}   ===  ${expected}`);
  }
  else{
    console.log(`${String.fromCodePoint(0x1F621)}  Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

const tail = function(arrayList){
  return arrayList.slice(1, arrayList.length);
}


module.exports = tail;