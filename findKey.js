const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};



// Implement the function findKey which takes 
// in an object and a callback. 
// It should scan the object and return the 
// first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined. 


const findKey = function (object, callback) {
  //access all the keys in the object
  //loop through them and feed them to the callback 
  for (let key of Object.keys(object)) {
    //console.log("key: ", key);
    //console.log("callback(key) evaluates to: ", callback(object[key]));
    if (callback(object[key])) {
      return key;
    }
  }
}










//Tests:
const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(test1, "noma");

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const test2 = findKey(bestTVShowsByGenre, x => x === "The Wire"); //drama 
assertEqual(test2, 'drama');