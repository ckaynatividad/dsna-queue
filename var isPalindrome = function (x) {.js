var isPalindrome = function (x) {
    const xString = x.join("")
    const xReverse = x.toString().split("").reverse().join("");
  
    return `xString, ${xString}, xReverse, ${xReverse}`;
  };
  
  console.log(isPalindrome([1,2,3,1]));
  
  function differenceMinMax(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    
    const sum = max - min;
    return sum;
  }
  
  console.log("Test case 1:");
  console.log(differenceMinMax([1, 2, 3, 4, 5]));

  function sumArray(numbers) {
    const initial = 0;
    return numbers.reduce((a, b) => a + b, initial);
  }
  
  console.log("Test case 1:");
  console.log(sumArray([1, 2, 3]));
  console.log("Test case 2:");
console.log(sumArray([-1, 0, 1]));

const name1 = 'hey can you stop!';
const regex = /[a-z]/g    
console.log(name1.toLowerCase().split('').filter(char => (regex.test(char))).join('-'))