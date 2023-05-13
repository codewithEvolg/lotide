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


const middle = function(myArray){
  let finalArray = [];
  let arrayLength = myArray.length;
  if(arrayLength === 1 || arrayLength ===2){
    finalArray;
  }
  else if(arrayLength % 2 != 0){
    finalArray.push(myArray[Math.floor(arrayLength/2)]);
  }
  else{
    finalArray.push(myArray[(arrayLength/2) - 1]);
    finalArray.push(myArray[arrayLength/2]);
  }
  console.log(finalArray);
}

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4,5,6,7,8]) // => [4,5]

module.exports = middle;