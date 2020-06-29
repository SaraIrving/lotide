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


function assertArraysEqual (array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`👍👍👍Array Assertion Passed: ${array1} equals ${array2}`);
  } else {
    return console.log(`🛑🛑🛑Array Assertion Failed: ${array1} does not equal ${array2}`);
  }
}


//take in a nested array, retun a flattened array 
function flatten (array) {
  let flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      //loop through array and push elements to flatArray
      for (let item of element) {
        flatArray.push(item);
      }
    } else {
      //push element to flatArray
      flatArray.push(element);
    }
  }
  return flatArray;
}

module.exports = flatten;

//TESTS:
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
