const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(0x1F354)}  Assertion Passed:  ${actual}   ===  ${expected}`);
  }
  else{
    console.log(`${String.fromCodePoint(0x1F621)}  Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

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

const countOccurence = (item, arr)=>{
  //count occurrence of element
  counter = [];
  for(const a in arr){
    if(arr[a] === item){
      counter.push(a);
    }
  }
  return counter;
}

const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  results = {};
  cloneArray = [];
  for(a = 0; a < sentence.length; a++){
    if(sentence[a] !== " "){
      results[sentence[a]] = countOccurence(sentence[a], sentence)
    }
  }
  console.log(results);
};


//assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("lighthouse in the house");

module.exports = letterPositions;