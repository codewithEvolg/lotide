
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
  return finalObj;
}

//countLetters('The boy is going to the supermarket');


module.exports = countLetters;