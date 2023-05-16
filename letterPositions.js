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
  return results;
};

//letterPositions("lighthouse in the house");

module.exports = letterPositions;