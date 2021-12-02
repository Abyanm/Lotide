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

const words = ["Home", "House", "Apartment", "Condo"];
// map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}
// let map = function (array, callback) {
//   let resultts = [] ;
//   for (let item of array) {
//     result.push(callback(item));
//   }
//   return results;
// }






