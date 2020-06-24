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

//TESTS:
assertArraysEquals([1,2,3,4], [1,2,3,4]); //true
assertArraysEquals(["2", "4"], ["2", "4"]); //true
assertArraysEquals([1,2,3,4], [9,8,7,6]); //false
assertArraysEquals(["the", "end"], ["the", "start"]); //false