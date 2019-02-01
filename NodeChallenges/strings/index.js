function unique(str) {
  var obj = {};
  for (char of str) {
    if (obj[char]) {
      return false;
    }
    obj[char] = true;
  }
  return true;
}

function isPalindrome(str) {
  var strLowered = str.toLowerCase();
  for (var i = 0; i <= Math.ceil(str.length/2); i++) {
    if (strLowered[i] !== strLowered[strLowered.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function containsSameStrings(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var counts1 = makeStringMap(str1);
  var counts2 = makeStringMap(str2);

  for (prop in counts1) {
    if (counts1[prop] !== counts2[prop]) {
      return false;
    }
  }
  return true;

  function makeStringMap(str) {
    var counts = {};
    for (char of str) {
      if (char != ' ') {
        if (!counts[char]) {
          counts[char] = 0;
        }
        counts[char]++;
      }
    }
    return counts;
  }
}

function fuzzyContains(str1, str2) {
  return str1.toLowerCase().indexOf(str2.toLowerCase()) !== -1;
}

function characterCount(str, char) {
  var count = 0;
  for (var checkChar of str) {
    if (checkChar == char) {
      count++;
    }
  }
  return count;
}

function removeDuplicates(str) {
  var newStr = "";
  var alreadyAdded = {};
  for (var char of str) {
    if (!alreadyAdded[char]) {
      newStr += char;
    }
    alreadyAdded[char] = true;
  }
  return newStr;
}

function condenseWhitespace(str) {
  var newStr = "";
  var previousCharWasWhitespace = false;
  for (char of str) {
    if (!(previousCharWasWhitespace && char == ' ')) {
      newStr += char;
    }
    previousCharWasWhitespace = (char == ' ');
  }
  return newStr;
}

function isRotated(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var doubledStr1 = str1 + str1;
  return doubledStr1.indexOf(str2) != -1;
}

function isRotated2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    if (isRotatedFromOffset(i, str1, str2)) {
      return true;
    }
  }
  return false;


  function isRotatedFromOffset(offset, str1, str2) {
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[adjustedIndex(i + offset, str2.length - 1)]) {
        return false;
      }
    }
    return true;
  }

  function adjustedIndex(index, max) {
    if (index > max) {
      return  index- max - 1;
    } else {
      return index;
    }
  }
}

function isPangram(str) {
  var charMap = {};
  //
  // Lower case letters ascii code: 97 - 122
  //
  for (char of str.toLowerCase()) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      charMap[char] = true;
    }
  }
  return (Object.keys(charMap).length == 26);
}

function vowelConsonantCount(str) {
  function isALowerCaseLetter(char) {
    return (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
  }

  var vowelCount = 0;
  var consonantCount = 0;
  var vowelSet = new Set('aeiou');

  for (char of str.toLowerCase()) {
    if (isALowerCaseLetter(char)) {
      if (vowelSet.has(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return (consonantCount, vowelCount);
}

function distanceLessThan3(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var differentCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      differentCount++;
    }
    if (differentCount > 3) {
      return false;
    }
  }
  return true;
}

function longestPrefix(str) {
  function allHavePrefix(prefix, words) {
    for (let word of words) {
      if (!word.startsWith(prefix)) {
        return false;
      }
    }
    return true;
  }


  var words = str.split(' ');
  if (!words.length) {
    return '';
  }
  var currentPrefix = '';
  var bestPrefix = '';
  var firstWord = words[0];

  for (let char of words[0]) {
    currentPrefix = currentPrefix + char;
    if (!allHavePrefix(currentPrefix, words)) {
      return bestPrefix;
    }
    bestPrefix = currentPrefix;
  }
  return bestPrefix;
}

function runLengthEncoding(str) {
  if (!str.length) {
    return "";
  }

  var finalString = "";
  var charCount = 1
  for (let i = 0; i < str.length; i++) {
    //
    // IF we're at the end, just print and exit
    //
    if (i == str.length - 1) {
      finalString += `${str[i]}${charCount}`;
      continue;
    }

    var nextChar = str[i + 1];
    if (str[i] !== nextChar) {
      finalString += `${str[i]}${charCount}`;
      charCount = 1;
    } else {
      charCount++;
    }
  }
  return finalString;
}

function getAllPermutations({ remainingString, 
                              permutationBeingBuilt = '' }) {
  //
  // Base Case -- there is are no letters left to rearrange
  //
  if (remainingString.length == 0) {
    return [permutationBeingBuilt];
  }

  var permutations = [];
  //
  // for each letter
  //
  for (let i = 0; i < remainingString.length; i++) {
    //
    // letters before and after the main one
    //
    var left = remainingString.slice(0,i);
    var right = remainingString.slice(i+1);
    permutations = permutations.concat(getAllPermutations({ remainingString: left + right,
                                                            permutationBeingBuilt: permutationBeingBuilt + remainingString[i] }));
  }
  return permutations;
}

//
// reverseWords -- reverse the words in a string without
//                 using a for loop
//
function reverseWords(words) {
  return words
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

module.exports = {
  unique,
  isPalindrome,
  containsSameStrings,
  fuzzyContains,
  characterCount,
  removeDuplicates,
  condenseWhitespace,
  isRotated,
  isRotated2,
  isPangram,
  vowelConsonantCount,
  distanceLessThan3,
  longestPrefix,
  runLengthEncoding,
  getAllPermutations,
  reverseWords
};