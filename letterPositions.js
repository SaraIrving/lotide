
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


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase(); 
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;



// //TESTS:
// //console.log(letterPositions("Sara"));
// //console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("Sara").a, [1, 3]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

