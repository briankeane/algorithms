const { expect } = require ('chai');
const {
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
  reverseWords,
  isOneChangeAway,
} = require ('./index.js');

describe('', function () {
  it ('Challenge 1 -- Unique', function () {
    expect(unique("No duplicates")).to.equal(true);
    expect(unique("abcdefghijklmnopqrstuvwxyz")).to.equal(true);
    expect(unique("AaBbCc")).to.equal(true);
    expect(unique("Hello, world")).to.equal(false);
  });

  it ('Challenge 2 -- Is Palindrome', function () {
    expect(isPalindrome("rotator")).to.equal(true);
    expect(isPalindrome("Rats live on no evil star")).to.equal(true);
    expect(isPalindrome("Never odd or even")).to.equal(false);
    expect(isPalindrome("Hello, wrold")).to.equal(false);
  });

  it ('Challenge 3 -- containsSameStrings', function () {
    expect(containsSameStrings("abca", "abca")).to.equal(true);
    expect(containsSameStrings("abc", "cba")).to.equal(true);
    expect(containsSameStrings("a1 b2",  "b1 a2")).to.equal(true);
    expect(containsSameStrings("abc", "abca")).to.equal(false);
    expect(containsSameStrings("abc", "Abc")).to.equal(false);
    expect(containsSameStrings("abc", "cbAa")).to.equal(false);
  });

  it ('Challenge 4 -- Fuzzy Contains', function () {
    expect(fuzzyContains("Hello, world", "Hello")).to.equal(true);
    expect(fuzzyContains("Hello, world", "WORLD")).to.equal(true);
    expect(fuzzyContains("Hello, world", "Goodbye")).to.equal(false);
  });

  it ('Challenge 5 -- Count the Characters', function () {
    expect(characterCount("The rain in Span", "a")).to.equal(2);
    expect(characterCount("Mississippi", "i")).to.equal(4);
    expect(characterCount("Hacking with Swift", "i")).to.equal(3);
  });

  it ('Challenge 6 -- Remove Duplicates', function () {
    expect(removeDuplicates("wombat")).to.equal("wombat");
    expect(removeDuplicates("hello")).to.equal("helo");
    expect(removeDuplicates("Mississippi")).to.equal("Misp");
  });

  it ('Challenge 7 -- Condense Whitespace', function () {
    expect(condenseWhitespace("a    b    c")).to.equal("a b c");
    expect(condenseWhitespace("         a")).to.equal(" a");
    expect(condenseWhitespace("abc")).to.equal("abc");
  });

  it ('Challenge 8 -- isRotated', function () {
    expect(isRotated("abcde", "eabcd")).to.equal(true);
    expect(isRotated("abcde", "cdeab")).to.equal(true);
    expect(isRotated("abcde", "abced")).to.equal(false);
    expect(isRotated("abc", "a")).to.equal(false);

    expect(isRotated2("abcde", "eabcd")).to.equal(true);
    expect(isRotated2("abcde", "cdeab")).to.equal(true);
    expect(isRotated2("abcde", "abced")).to.equal(false);
    expect(isRotated2("abc", "a")).to.equal(false);
  });

  it ('Challenge 9 -- Pangrams', function () {
    expect(isPangram("The quick brown fox jumps over the lazy dog")).to.equal(true);
    expect(isPangram("The quick brown fox jumps over he lazy dog")).to.equal(true);
    expect(isPangram("The quick brown fox jumped over the lazy dog")).to.equal(false);
  });

  it ('Challenge 10 -- Count Consonants and Vowels', function () {
    expect(vowelConsonantCount("Swift Coding Challenges")).to.equal(6,15);
    expect(vowelConsonantCount("Mississippi")).to.equal(4,7);
  });

  it ('Challenge 11 -- Distance Less Than 3', function () {
    expect(distanceLessThan3("Clamp", "Cramp")).to.equal(true);
    expect(distanceLessThan3("Clamp", "Crams")).to.equal(true);
    expect(distanceLessThan3("Clamp", "Grans")).to.equal(false);
    expect(distanceLessThan3("Clamp", "Clam")).to.equal(false);
  });

  it ('Challenge 12 -- Longest Prefix', function () {
    expect(longestPrefix("swift switch swill swim")).to.equal("swi");
    expect(longestPrefix("flip flap flop")).to.equal("fl");
  });

  it ('Challenge 13 -- Run Length Encoding', function () {
    expect(runLengthEncoding("aabbcc")).to.equal("a2b2c2");
    expect(runLengthEncoding("aaabaaabaaa")).to.equal("a3b1a3b1a3");
    expect(runLengthEncoding("aaAAaa")).to.equal("a2A2a2");
  });

  it ('Challenge 14 -- getAllPermutations', function () {
    expect(getAllPermutations({ remainingString: "a" })).to.have.members(['a']);
    expect(getAllPermutations({ remainingString: "ab" })).to.have.members(['ab','ba']);
    expect(getAllPermutations({ remainingString: "abc" })).to.have.members(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    expect(getAllPermutations({ remainingString: "wombat" }).length).to.equal(720);
  });

  it ('Challenge 15 -- reverseWords', function () {
    expect(reverseWords('Swift Coding Challenges')).to.equal('tfiwS gnidoC segnellahC');
    expect(reverseWords('The quick brown fox')).to.equal('ehT kciuq nworb xof');
  });
});