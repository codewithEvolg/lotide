const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
}


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false


module.exports = eqObjects;