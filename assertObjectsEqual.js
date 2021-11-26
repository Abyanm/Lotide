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
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    // Check if variable is an object
    if (typeof(actual) === 'object') {
      // Implement eqObjects
      if (eqObjects(actual, expected)) {
        console.log(`✅ Pass! ${inspect(actual)} === ${inspect(expected)}`);
      } else {
        console.log(`🚨 Fail. ${inspect(actual)} !== ${inspect(expected)}`);
      }
    } else {
      // If variable is not an object (e.g.: boolean)
      if (actual === expected) {
        console.log(`✅ Pass! ${actual} === ${expected}`);
      } else {
        console.log(`🚨 Fail. ${actual} !== ${expected}`);
      }
    }
  };
  
  
  
  // Test:
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const eqEval = eqObjects(ab, ba);
  
  assertObjectsEqual(ab, ba); // returns: Pass
  assertObjectsEqual(ab, abc); // returns: Fail
  assertObjectsEqual(eqEval, true); // returns Pass
  assertObjectsEqual(eqEval, false)}}; // returns Fail 