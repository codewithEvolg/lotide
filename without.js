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

const without = function(firstArray, secondArray){
  let finalArray = [];

  for(let a of firstArray){
    let isFound = false;
    for(let b of secondArray){
      if(a === b){
        console.log("first:",a);
        console.log("second:",b);
        isFound = true;
        break;
      }
    }
    if(isFound === false){
      finalArray.push(a);
    }
  }
  console.log(finalArray);
}



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


module.exports = without;