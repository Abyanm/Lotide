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
    
    
    const letterPositions = function(sentence) {
    const results = {};
    for(let i = 0; i < sentence.length; i++ ) {
        if(results[sentence[i]]) {
           results[sentence[i]] .push(i)
        } else {
        console.log(sentence[i])
        results[sentence[i]] = [i] }
    }
    console.log(results)
    return results;
  }; 
  assertArraysEqual(letterPositions("hello").e, [1]);
  assertArraysEqual(letterPositions("hello").l, [2,3]);
 // assertEqual( letterPositions("hello"),{
   // h: [0],
    //e: [1],
    //l: [2,3],
   // o: [4]
//})


//   //actual
//   letterPositions("hello")

//   //expected result
//    {
//        h: [0],
//        e: [1],
//        l: [2,3],
//        o: [4]
//    }