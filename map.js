/*
Our map function will take in two arguments:

    An array to map
    A callback function

The map function will return a new array based on the results of the callback function.
*/

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item));
  }
  return results; 
}


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

//TESTS: 
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const dinner = ['pie', 'cake', 'wine'];
const food = map(dinner, dinOption => dinOption.toUpperCase());
assertArraysEqual(food, [ 'PIE', 'CAKE', 'WINE' ]);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const bigNums = map(numbers, num => {
  if (num % 2 === 0) {
    return num * 500; 
  } else {
    return num;
  }
});
assertArraysEqual(bigNums, [ 1, 1000, 3, 2000, 5, 3000, 7, 4000 ]);

