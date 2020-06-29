const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


//The function should take in a sentence (as a string) 
//and then return a count of each of 
//the letters in that sentence.
// -->skip and don't count any spaces in the string

/*
Pseudocode:
-loop over the characters in the string
  --ignore the spaces
  --only count each character once
  --assign each character as a key value and assign it a count
  --if the key already exists, increase the count 
  --make letters all lower case so it does not impact results 
-return the object 

*/

function countLetters(inputString) {
  let countedLetters = {};
  let lowerCaseString = inputString.toLowerCase();
  for (let char of lowerCaseString) {
    if (char !== " ") {
      if (countedLetters[char]){
        countedLetters[char] += 1;
      } else {
        countedLetters[char] = 1;
      }
    }

  }
  console.log(countedLetters);
  return countedLetters;
}

module.exports = countLetters;

//TESTS:
//countLetters("lighthouse in the house"); 
/*{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

countLetters("Sarasss");  // { s: 4, a: 2, r: 1 }
countLetters("Sara Irving"); // { s: 1, a: 2, r: 2, i: 2, v: 1, n: 1, g: 1 });

