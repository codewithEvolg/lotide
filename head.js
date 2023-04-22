// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(0x1F354)}  Assertion Passed:  ${actual}   ===  ${expected}`);
  }
  else{
    console.log(`${String.fromCodePoint(0x1F621)}  Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

const head = function(arrayList){
  return arrayList[0];
}
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");