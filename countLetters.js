let assertEqual = function(value1, value2) {
    if (value1 === value2) {
        console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
      } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
      }
    };
const countLetters = function(letters){
    let result = {};
    for (let letter of letters) {  
      if (letter !== " ") {
        if(result[letter])  {
          result[letter] += 1;
        } else {
          result[letter] = 1 ;
        }
      } 
    }
    return result;
}  
console.log(countLetters("asma"));

