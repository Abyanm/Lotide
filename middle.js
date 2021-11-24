// //let assertEqual = function(value1, value2) {
//     if (value1 === value2) {
//       console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
//     }
//   };
  
//   assertEqual("Lighthouse Labs", "Lighthouse Labs");
//   assertEqual("home", "house");
//   assertEqual(4, 4);
//   assertEqual(2,7);
  
//   let eqArrays = function(array1, array2) { // create a function that takes 2 arrays
//     for (let i =0; i < array1.length; i++) { // make the conditions for the arrays
//        // console.log(i)
//       //  console.log(array1[i])
//       if(array1[i] !== array2[i]) {  // write the if statement concerning the two arrays
//           return false // return false
//       }
//     }
//      if(array1.length !== array2.length) { // write another if staement for the length of the arrays
//          return false // return false
//      }
//      return true // create another return if it doesnt follow the previous if statements
//   }


let middle = function(arr) { 
  if (arr.length <= 2) {
    return arr
  }
  let middleindex = Math.floor(arr.length / 2)
  return arr[middleindex]
}
console.log(middle([1,2,3]))