
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
    middleArray.push(inputArray[smallerIndex]);
    middleArray.push(inputArray[largerIndex]);
    return middleArray;
  }
};

module.exports = middle;

