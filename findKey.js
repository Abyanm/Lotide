const assertArraysEqual = function(actual, expected) {

    if (eqArrays(actual, expected)) {
      console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    } else {
      console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    }}
    const findKey = function(obj, callback) {
        for (const key in obj) {
          if (callback(obj[key])) {
            return key;
          }
        }
      };
      
      module.exports = findKey;
      