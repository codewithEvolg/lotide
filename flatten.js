const flatten = function(arr){
  let flatArray = [].concat.apply([], arr);
  return flatArray;
}


//flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;