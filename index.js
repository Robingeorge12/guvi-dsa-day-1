//  Explain the concept of prime numbers and write a function to check if a given number is prime.

function isPrime(no) {
  if (no < 2) {
    return "A prime number should be greater than 1";
  }

  // let prime = 2 % 4
  // console.log(prime)
  for (let i = 2; i < no; i++) {
    let check = no % i;
    if (check === 0) {
      return `${no} is not a prime number`;
    }
  }
  return `${no} is a prime number`;
}
let result = isPrime(29); 
console.log(result);

//  Write a function to find the largest element in an array.

function largestElement(array) {
    let largest = -Infinity;

    if (array.length <1) {
        return `The gieven array should contain minimum one element`
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest
}

let isLargest = largestElement([2, 6, 3, 33, 1, 3, 29]);
console.log(`${isLargest} largest element in an array`);



//  Write a function to find the second largest element in an array.

function secondlargestElement(array) {
  let largest = -Infinity;
    let second;
  if (array.length < 2) {
    return `The given array should contain minimum two element`;
  }

  for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
          second = largest
        //   console.log(second)
          largest = array[i];
        //   console.log(largest)
      } else {
          if (second < array[i]) second = array[i]
    }
  }
  return `${second} second largest element in an array`;
}

let isSecondLargest = secondlargestElement([2, 6, 3, 33, 1, 3, 29]);
console.log(isSecondLargest);


//  Write a function to find the nth Fibonacci number using iteration.

function Fibanocci(n) {
    
    if (n < 2) {
        return `fibanocci must have atleast 2 numbers`
    }
    let i = 0
    let j = 1
 let array = [0,1]
    while (array.length < n) {
        
        let sum = array[i] + array[j]
        array.push(sum)
        i++
        j++

    }

return `${array[array.length - 1]} is the ${n} Fibonacci number`;
}

let fibanocciNumber = Fibanocci(9);
console.log(fibanocciNumber);

//  Write a function to calculate the factorial of a number using iteration.

function FactorialOfNth(n) {
    
    if (n === 0) {
        return `factorial of ${n} is 0`
    }

    let result = 1
    for (let i = 1; i <= n; i++){
        
      result = result * i
        // console.log(result);

    }
return `factorial of ${n} is ${result}`;
}

let factorial = FactorialOfNth(5)
console.log(factorial)