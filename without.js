const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    } else {
      console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    }
    
  };
// TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);

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

let words = ["hello", "world", "lighthouse"] 
    for (let i = 0 ; i <word.length; i-- );
console.log(words)
  
  
  
  //Test Code
const words = 
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
