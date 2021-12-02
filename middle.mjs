import {eqArrays} from "./eqArrays.mjs"

let assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};


let middle = function(arr) { 
  if (arr.length <= 2) {
    return arr
  }
  let middleindex = Math.floor(arr.length / 2)
  return arr[middleindex]
}
console.log(middle([1,2,3]))

export {middle, assertArraysEqual};