//awl 3 function ya lol

function reverse(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  function count(str) {
    return str.length;
  }
  
  console.log(reverse("hello")); 
  console.log(count("hello")); 



  //tany 3 function ya lol


  function Max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  

  function Min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  console.log(Max([1, 3, 5, 2]));
  console.log(Min([1, 3, 5, 2])); 




  function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4])); 



  
  function isGreaterThan5 (element, index, array){
  return element>5;
}
  var Garray = [2,5,8,1,4];
  var value = Garray. filter(isGreaterThan5);
  console. log(value);




  //talt 3 function ya lol


  function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


var num = 5;
console.log("Factorial of", num, "is", factorial(num));




function isPrime(num) {
 
  if (num <= 1) {
      return false;
  }


  for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false; 
      }
  }
  
  return true;
}


var numberToCheck = 17;
if (isPrime(numberToCheck)) {
  console.log(numberToCheck + " is a prime number");
} else {
  console.log(numberToCheck + " is not a prime number");
}





