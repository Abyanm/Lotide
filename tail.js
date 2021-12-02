let assertEqual = function(value1, value2) {
  if (value1 === value2) {
    console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
  }
};
let tail = function(arr){
  let lastIndex = arr.length-1
  console.log(arr[lastIndex])
  return arr[lastIndex]
}

module.exports = {assertEqual, tail};
 