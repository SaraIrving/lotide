const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

function findKeyByValue(object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}




const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestFoodByRegion = {
  thai: "Yellow Curry",
  japanese: "Ramen",
  mexican: "Tacos"
};

assertEqual(findKeyByValue(bestFoodByRegion, "Yellow Curry"), "thai");
assertEqual(findKeyByValue(bestFoodByRegion, "Ramen"), "japanese");
assertEqual(findKeyByValue(bestFoodByRegion, "Tater tots"), undefined);