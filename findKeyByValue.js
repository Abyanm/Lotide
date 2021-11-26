let assertEqual = function(value1, value2) {
    if (value1 === value2) {
      console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
    }
  };

  let findKeyByValue = function(inputObj, inputVal) {
    let outputVal = [];
  
    for (const [key, value] of Object.entries(inputObj)) {
      if (value === inputVal) {
        outputVal.push(key);
      } else {
        continue;
      }
    }
    let finalOutput = outputVal[0];
    return finalOutput;
  };
  
  
  
  // Test:
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    haventWatched: "The Wire"
  };
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // => returns: drama . it works!
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => returns: Assertion Passed . it works!
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => returns: Assertion Passed . it works!