const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1,2,3,4], [1,2,3,4]); 
assertArraysEqual(["2", "4"], ["2", "4"]); 
assertArraysEqual([1,2,3,4], [9,8,7,6]); 
assertArraysEqual(["the", "end"], ["the", "start"]); 