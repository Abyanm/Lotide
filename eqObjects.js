let assertEqual = function(value1, value2) {
    if (value1 === value2) {
      console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
    }
  };
  let eqObjects = function(object1, object2) {

    // If object lengths are the same:
    if ((Object.keys(object1).length) === (Object.keys(object2).length)) {
      let matchingKeyValues = [];
      // Loop through each key of object1
      for (const [key1, value1] of Object.entries(object1)) {
        for (const [key2, value2] of Object.entries(object2)) {
          // Look for matching key:value pairs
          if (value1 === value2) {
            // If it's a match, push to empty array
            matchingKeyValues.push(key2);
          } else {
            continue;
          }
        }
      }
      // console.log(matchingKeyValues)
      
      console.log("Success! The matching keys are " + matchingKeyValues);
      return true;
    } else {
      console.log("Lengths don't match. Comparison is " + false);
      return false;
    }
  };
  
  
  
  // Test:
  console.log("eqObjects Test: ");
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  eqObjects(ab, ba); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
  eqObjects(ab, abc); // => false
  
  // assertEqual test
  console.log("assertEqual Test: ");
  assertEqual((eqObjects(ab, ba)), true); // => returns True. it works!
  
  