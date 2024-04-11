// Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.

function Fibanocci(n) {
  if (n < 2) {
    return `fibanocci must have atleast 2 numbers`;
  }
  let i = 0;
  let j = 1;
  let array = [0, 1];
  while (array.length < n) {
    let sum = array[i] + array[j];
    array.push(sum);
    i++;
    j++;
  }

  return `${array} Fibonacci number of ${n}`;
}

let fibanocciNumber = Fibanocci(9);
console.log(fibanocciNumber);

// Write a function that takes a number as input and returns the factorial of that number.

function FactorialOfNth(n) {
  if (n === 0 || n === 1) {
    return `factorial of ${n} is 1`;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
    // console.log(result);
  }
  return `factorial of ${n} is ${result}`;
}

let factorial = FactorialOfNth(5);
console.log(factorial);

// Write a function that checks if a given string is a palindrome.

function palindrome(str) {
  let ar1 = [];
  let str2 = "";

  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
    // console.log(str[i])
  }
  // console.log(str2)

  if (str === str2) {
    return `the given string is palindrome`;
  } else {
    return `the given string is not palindrome`;
  }
}

let isPalindrome = palindrome("malayalam");

console.log(isPalindrome);
// Write a function that finds the maximum and minimum elements in an array.

function maxMin(ar) {
  let min = +Infinity;
  let max = -Infinity;
  let i = 0;
  let j = 0;

  let n = ar.length;
  //[5,4,9,2,23,6,21]

  while (i < n && j < n) {
    if (ar[i] < min) {
      min = ar[i];

      // console.log(min)
    }
    if (ar[j] > max) {
      max = ar[j];
    }
    i++;
    j++;
  }

  return `max value is ${max} & min value is ${min}`;
}

let maxOrmin = maxMin([5, 4, 9, 2, 23, 6, 21, 1]);
console.log(maxOrmin);

// Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

function anagram(str, str2) {
  let newStr = str.replace(/[^A-Za-z]/g, "");
  let newStr2 = str2.replace(/[^A-Za-z]/g, "");

  // console.log(newStr);
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i];
    if (obj1[char] === undefined) {
      obj1[char] = 1;
    } else {
      obj1[char] += 1;
    }
  }
  // console.log(obj1);



  for (let i = 0; i < newStr2.length; i++) {
    let char = newStr2[i];
    if (obj2[char] === undefined) {
      obj2[char] = 1;
    } else {
      obj2[char] += 1;
    }
  }

  // console.log(obj2);



   const char1 = newStr.split("").sort().join("");
   const char2 = newStr2.split("").sort().join("");

  
  if (char1 === char2) {
   return true
  } else {
    return false
 }


}

let isAnagram = anagram("level", "velle");

console.log(isAnagram);
