const assertArraysEqual = require('../assertArraysEqual');

//TESTS:
assertArraysEqual([1,2,3,4], [1,2,3,4]); //true
assertArraysEqual(["2", "4"], ["2", "4"]); //true
assertArraysEqual([1,2,3,4], [9,8,7,6]); //false
assertArraysEqual(["the", "end"], ["the", "start"]); //false