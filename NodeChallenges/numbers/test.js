const { expect } = require('chai');
const {
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
} = require('./');

describe('', function () {
  it ('Challenge 16 - FizzBuzz', function () {
    expect(fizzBuzz(2)).to.equal('2');
    expect(fizzBuzz(6)).to.equal('fizz');
    expect(fizzBuzz(10)).to.equal('buzz');
    expect(fizzBuzz(15)).to.equal('fizzBuzz');
  });

  it ('Challenge 17 -- Random Number', function () {
    for (let i = 0; i < 100; i++) {
      const result = randomNumber(10, 15);
      expect(result).to.be.at.least(10);
      expect(result).to.be.at.most(15);
    }
  });

  it ('Challenge 18 -- Raise to Power', function () {
    expect(raiseToPower(0,3)).to.equal(0);
    expect(raiseToPower(5,2)).to.equal(25);
    expect(raiseToPower(5,0)).to.equal(1);
    expect(raiseToPower(5,3)).to.equal(125);
    expect(raiseToPower(5, -2)).to.equal(0.04);

    expect(raiseToPower2(0,3)).to.equal(0);
    expect(raiseToPower2(5,2)).to.equal(25);
    expect(raiseToPower2(5,0)).to.equal(1);
    expect(raiseToPower2(5,3)).to.equal(125);
    expect(raiseToPower2(5, -2)).to.equal(0.04);
  });

  it ('Challenge 19 -- Swap (without temp var)', function () {
    var values = { a: 10, b: 15 };
    swap(values);
    expect(values.a).to.equal(15);
    expect(values.b).to.equal(10);
  });

  it ('Challenge 20 -- isPrime', function () {
    expect(isPrime(11)).to.equal(true);
    expect(isPrime(13)).to.equal(true);
    expect(isPrime(4)).to.equal(false);
    expect(isPrime(9)).to.equal(false);
    expect(isPrime(16777259)).to.equal(true);
  });

  it ('Challenge 21 -- nextHighestLowestBinary with same # of 1s in string', function() {
    expect(nextHighestLowestBinary(12).nextHighest).to.equal(17);
    expect(nextHighestLowestBinary(12).nextLowest).to.equal(10);
    expect(nextHighestLowestBinary(28).nextHighest).to.equal(35);
    expect(nextHighestLowestBinary(28).nextLowest).to.equal(26);
  });

  it ('Challenge 22 -- binaryReverse', function () {
    expect(binaryReverse(32)).to.equal(4);
    expect(binaryReverse(41)).to.equal(148);
    expect(binaryReverse(4)).to.equal(32);
    expect(binaryReverse(148)).to.equal(41);
  });

  it ('Challenge 23 -- containsOnlyNumbers', function () {
    expect(containsOnlyNumbers("0101010101")).to.equal(true);
    expect(containsOnlyNumbers("123456789")).to.equal(true);
    expect(containsOnlyNumbers("9223372036854775808")).to.equal(true);
    expect(containsOnlyNumbers("1.01")).to.equal(false);
    expect(containsOnlyNumbers("1237987abc12398")).to.equal(false);
  });

  it ('Challenge 24 -- addNumbersInsideString', function () {
    expect(addNumbersInsideString('a1b2c3')).to.equal(6);
    expect(addNumbersInsideString('a10b20c30')).to.equal(60);
    expect(addNumbersInsideString('h8ers')).to.equal(8);
  });

  it ('two numbers sum', function () {
    expect(twoNumbersSum([3,5,2,-4,8,11], 7)).to.have.members([[11,-4], [2,5]]);
    expect(twoNumbersSum([3,5,2,-4,8,11], 7).length).to.equal(2);
  });

  it ('gets all subsets', function () {

  });

});