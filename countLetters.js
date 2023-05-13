// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(0x1F354)}  Assertion Passed:  ${actual}   ===  ${expected}`);
  }
  else{
    console.log(`${String.fromCodePoint(0x1F621)}  Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

const countOccurrence = (arr, item)=>{
  //count occurrence of element
  counter = 0;
  for(const a of arr){
    if(a === item){
      counter += 1; 
    }
  }
  return counter;
}

const countLetters = (sentence) => {
  finalObj = {};
  cloneArray = [];
  for(const element of sentence){
    element === " " ? element : cloneArray.push(element);
  }
  for(const item of cloneArray){
    finalObj[item] = countOccurrence(cloneArray, item);
  }
  console.log(finalObj);
}

countLetters('The boy is going to the supermarket');


module.exports = countLetters;