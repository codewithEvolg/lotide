const flatten = function(arr){
  let flatArray = [].concat.apply([], arr);
  console.log(flatArray);
}


flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]