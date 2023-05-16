# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @oluwagb3nga/lotide`

**Require it:**

`const _ = require('@oluwagb3nga/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head`: retrieves the first element from the array.
- `tail`: retrieves every element except the head (first element) of the array.
- `middle`: takes in an array and return the middle-most element(s) of the given array
- `countLetters`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly`: take in a collection of items and return counts for a specific subset of those items.
- `flatten`: Given an array with other arrays inside, it can flatten it into a single-level array
- `letterPositions`: returns all the indices (zero-based positions) in the string where each character is found
- `map`: takes in an array to map and a callback function and returns a new array based on the results of the callback function
- `takeUntil`: takes in the array to work with and a callback function and return a "slice of the array with elements taken from the beginning.
- `without`: take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
- `findKeyByValue`: helps us search for a key on an object where its value matches a given value.
