let eqArrays = function(array1, array2) { // create a function that takes 2 arrays
    for (let i =0; i < array1.length; i++) { // make the conditions for the arrays
       // console.log(i)
      //  console.log(array1[i])
      if(array1[i] !== array2[i]) {  // write the if statement concerning the two arrays
          return false // return false
      }
    }
     if(array1.length !== array2.length) { // write another if staement for the length of the arrays
         return false // return false
     }
     return true // create another return if it doesnt follow the previous if statements
  }

  const assertArraysEqual = function(actual, expected) {

    if (eqArrays(actual, expected)) {
      console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    } else {
      console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    }
  
  };
  const takeUntil = function(arr, callback) {
    const slice = [];
    for (const element of arr) {
      if (!callback(element)) {
        slice.push(element);
      } else {
        return slice;
      }
    }
    return slice;
  };
  
  module.exports = takeUntil;
  