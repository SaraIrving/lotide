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

/*                   
Psuedocode:
-return an array that is equal to the source minus itemsToRemove
-create a variable to hold the new array
-compare the elements in sourse to the elements in itemsToRemove
  -- if they are different, then push that element of sourse to the newArray
*/

function without(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i ++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = without;

console.log("without returns: " , without([1, 2, 3], [1])); // => [2, 3]
console.log("without returns: ", without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log("without returns: ", without(["1", "2", "3"], [1, 2, 3])); // => ["1", "2", "3"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
