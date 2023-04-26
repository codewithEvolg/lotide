// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(0x1F354)}  Assertion Passed:  ${actual}   ===  ${expected}`);
  }
  else{
    console.log(`${String.fromCodePoint(0x1F621)}  Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2){
  let result = false;
  if(array1.length !== array2.length){
    result = false;
  }
  else{
    for(let a in array1){
      if(array1[a] !== array2[a]){
        result = false;
        break;
      }
      else{
        result = true;
      };
    }
  }
  console.log(result);
}

eqArrays([1, 2, 3], [1, 2, 3]);