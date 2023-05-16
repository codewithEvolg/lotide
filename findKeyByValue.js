const findKeyByValue = (obj, val) => {
  for(const item in obj){
    if(obj[item] === val){
      return item;
    }
  }
}


module.exports = findKeyByValue;