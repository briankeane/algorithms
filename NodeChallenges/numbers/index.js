function fizzBuzz(number) {
  var divBy5 = (number % 5 === 0);
  var divBy3 = (number % 3 === 0);

  if (divBy3 && divBy5) {
    return "fizzBuzz";
  } else if (divBy3) {
    return "fizz";
  } else if (divBy5) {
    return "buzz";
  } else {
    return `${number}`;
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min) 
}

function raiseToPower(num, power) {
  return Math.pow(num, power);
}

function raiseToPower2(num, power) {
  if (power === 0) {
    return 1;
  }
  var total = num;
  for (let i = 1; i < Math.abs(power); i++) {
    total = total * num;
  }
  if (power > 0) {
    return total;
  } else {
    return 1/total;
  }
}

function swap(values) {
  values.a = values.a + values.b;
  values.b = values.a - values.b;
  values.a = values.a - values.b;
}

function isPrime(num) {
  if (num == 1) {
    return true;
  }

  const maxSearch = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= maxSearch; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function nextHighestLowestBinary(num) {
  const numOfOnes = getNumOfOnes(num);
  var currentlySerching = numOfOnes + 1;
  var nextHighest = getNextHighest(num, numOfOnes);
  var nextLowest = getNextLowest(num, numOfOnes);
  return { nextHighest, nextLowest };

  
  function getNextHighest(num, numOfOnes) {
    var searchNumber = num + 1;
    while (true) {
      if (getNumOfOnes(searchNumber) === numOfOnes) {
        return searchNumber;
      }
      searchNumber++;
    }
  }

  function getNextLowest(num, numOfOnes) {
    var searchNumber = num - 1;
    while (true) {
      if (getNumOfOnes(searchNumber) === numOfOnes) {
        return searchNumber;
      }
      searchNumber--;
    }
  }

  function getNumOfOnes(num) {
    var numBinString = num.toString(2);
    return numBinString.split('').filter(char => char === '1').length;
  }
}

function binaryReverse(num) {
  var binaryString = num.toString(2).padStart(8, 0);
  return parseInt(binaryString.split('').reverse().join(''), 2);
}

function containsOnlyNumbers(text) {
  for (letter of text) {
    if (isNaN(parseInt(letter))) {
      return false;
    }
  }
  return true;
}

function addNumbersInsideString(text) {
  return text
    .replace(/\D/g, '.')  // replace all non-numeric with .
    .split('.')           // split into array of numbers
    .filter(word => word.length)   // leave out any empties
    .map(word => parseInt(word))  // convert to integers
    .reduce((total, number) => number + total);   // sum the array
}

function twoNumbersSum(arr, sum) {
  var checked = {};
  var results = [];
  for (let i = 0; i < arr.length; i++) {
    const otherNumber = sum - arr[i];
    if (checked[otherNumber]) {
      results.push([arr[i], otherNumber]);
    }
    checked[arr[i]] = true;
  }
  return results;
}

module.exports = {
  fizzBuzz,
  randomNumber,
  raiseToPower,
  raiseToPower2,
  swap,
  isPrime,
  nextHighestLowestBinary,
  binaryReverse,
  containsOnlyNumbers,
  addNumbersInsideString,

  twoNumbersSum
}