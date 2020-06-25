const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
function eqObjects(object1, object2) {
  let keys1 = Object.keys(object1);
  //console.log("keys1=", keys1, "k1 length= ", keys1.length);
  let keys2 = Object.keys(object2);
  //console.log("keys2=", keys2, "k2 length= ", keys2.length);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key of keys1) {
      //console.log("key = ", key);
      //console.log("object1[key]= ", object1[key]);
      //console.log("object2[key]= ", object2[key]);
    //if the values don't match what do you do?
      //console.log('Array.isArray(object1[key])=', Array.isArray(object1[key]));
      //console.log('Array.isArray(object2[key])=', Array.isArray(object2[key]));
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {//check to see if both values are arrays, if they are check to see if they are equal 
        //console.log("result of eqArray()= ", eqArrays(object1[key], object2[key]));
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
} 


//TESTS:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);