function eqArrays (array1, array2) {
  //check that arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }
  //if they are the same length, now compare the elements
  //to be sure they match
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}


function eqObjects(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }  
    }
  }
  return true;
} 


function assertObjectsEqual (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, inspect(expected))) {
    return console.log(`👍👍👍Object Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑Object Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}


//TESTS:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // pass

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); //pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); //fail

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); //fail