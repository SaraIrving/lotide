// The function will return a
//  "slice of the array with elements taken from the beginning." 
//  It should keep going until the callback/predicate
//   returns a truthy value. 

//   It will take in two parameters as well:

//     The array to work with
//     The callback (which Lodash calls "predicate")

// the callback should only be provided one value: The item in the array. 

function eqArrays (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
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

const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (!callback(element)){
      results.push(element);
    } else {
      return results;
    }
  }
}

module.exports = takeUntil;




//TESTS:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// Expected Output

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
