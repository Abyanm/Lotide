let assertEqual = function(value1, value2) {
  if (value1 === value2) {
    console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
  }
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("home", "house");
assertEqual(4, 4);
assertEqual(2,7);



