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


function middle(inputArray) {
  let middleArray = [];
  if (inputArray.length === 1 || inputArray.length === 2) {
    return middleArray;
  } else if (inputArray.length % 2 !== 0) {
    let indexToPrint = Math.floor(inputArray.length / 2);
    middleArray.push(inputArray[indexToPrint]);
    return middleArray;
  } else {
    let largerIndex = inputArray.length / 2;
    let smallerIndex = (inputArray.length / 2) - 1; 
    middleArray.push(inputArray[smallerIndex])
    middleArray.push(inputArray[largerIndex]);
    return middleArray;
  }
}

//TESTS:
assertArraysEqual(middle([1, 2, 3]), [2]) // true 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // true
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) //true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) //true
assertArraysEqual(middle([1]), []) // true
assertArraysEqual(middle([1, 2]), []) //true 