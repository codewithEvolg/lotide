// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`${String.fromCodePoint(0x1F354)}  Assertion Passed:  ${actual}   ===  ${expected}`);
  }
  else{
    console.log(`${String.fromCodePoint(0x1F621)}  Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
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


const countOnly = function(allItems, itemsToCount) {
  foundElements = [];
  finalObj = {};
  for(const item of allItems){
    for(const objKey in itemsToCount){
      if(item === objKey && itemsToCount[objKey]){
        foundElements.push(item);
      }
    }
  }
  for(const element of foundElements){
    finalObj[element] = countOccurrence(foundElements, element);
  }
  return finalObj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



module.exports = countOnly;