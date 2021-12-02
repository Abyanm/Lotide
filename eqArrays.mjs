let assertEqual = function(value1, value2) {
    if (value1 === value2) {
      console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
    }
  };
 
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
//  console.log(eqArrays([1,3,5,7],[1,4,8,9])) 
//  console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//  console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
 
//  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
//  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
 

//  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
 export {eqArrays};