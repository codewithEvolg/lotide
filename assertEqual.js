// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(0x1F354)}  Assertion Passed:  ${actual}   ===  ${expected}`);
  }
  else{
    console.log(`${String.fromCodePoint(0x1F621)}  Assertion Passed:  ${actual}   !==  ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);