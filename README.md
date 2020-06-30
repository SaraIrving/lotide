# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sarairving/lotide`

**Require it:**

`const _ = require('@sarairving/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: head returns the first element of the array passed as an argument. 
* `tail`: tail returns an array containing all the elements of the array passed as an argument except for the first element.
* `middle`: middle returns an array containing the middle most element(s) of the array passed as an argument. If the array passed is odd numbered in length, middle will return an array with one element, the  middlemost element. If the array passed is even numbered in length, middle will return an array containing the two most middle elements. 
* `assertArraysEqual`: assertArraysEqual asserts if the two arrays passed as arguments are equal.
* `assertEqual`: assertEqual asserts if the two arguments passed to it are equal. The first argument should be the actual output and the second argument should be the expected output. 
* `assertObjectsEqual`: assertObjectsEqual asserts if the two objects passed to it as arguments are equal.
* `countLetters`: countLetters takes in a string and returns an object that has a count of how many times each unique letter occurs in the string. It ignores spaces in the string.
* `countOnly`: CountOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed. Only keys which have a truthy value should be counted in the resulting object.
* `eqArrays`: eqArrays will be given two arrays as arguments, it will assert if they are equal.  
* `eqObjects`: eqObjects will be given two arrays as arguments, it will assert if they are equal.
* `findKey`: findKey takes in an object and a callback as arguments. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: findKeyByValue takes an object and a value as arguments. It returns the key associated with the given value. If the key does not exist it should return undefined.
* `flatten`: flatten takes in a nested array and returns a flattened array with no nested elements.
* `letterPositions`: letterPositions takes a string as an argument and returns an object containing who's keys correspond to each unique letter in the string and who's associated values are an array containing the index(s) where that letter can be found in the string. 
* `map`: Our map function will take in two arguments: an array to map and a callback function. The map function will return a new array based on the results of the callback function.
* `takeUntil`: takeUntil will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value. It will take in two parameters as well: the array to work with and the callback/predicate. The callback should only be provided one value: the item in the array. 
* `without`: without takes in two arguments: a "source" array and an array of items to remove from the source. The without function should return a new array that is equal to the source array minus the removed items. 
