const { expect } = require('chai');
const {
  StackNode,
  Stack,

  StackWithMinimum
} = require('./');

describe('Chapter 3 -- Stacks and Queues', function () {
  describe('Stacks', function () {
    it ('constructs', function () {
        var stack = new Stack([0,1,2,3,4]);
        expect(stack.peek()).to.equal(4);
        expect(stack.pop()).to.equal(4);
        expect(stack.peek()).to.equal(3);
        expect(stack.pop()).to.equal(3);
        expect(stack.pop()).to.equal(2);
        expect(stack.pop()).to.equal(1);
        expect(stack.pop()).to.equal(0);
        expect(stack.isEmpty()).to.equal(true);
    });
  });

  describe('exercises', function () {
    it ('2.2 -- stack with mininum', function () {
      var stack = new StackWithMinimum([5,4,3,2,1,0]);
      expect(stack.min()).to.equal(0);
      stack.push(-12);
      expect(stack.min()).to.equal(-12);
      stack.pop();
      stack.pop();
      stack.pop();
      console.log(JSON.stringify(stack.minimumsStack,0,2))  ;
      expect(stack.min()).to.equal(2);
    });

    it ('2.3 -- setOfStacks', function () {
      var stack = new Stack([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        expect(stack.peek()).to.equal(15);
        expect(stack.pop()).to.equal(15);
        expect(stack.peek()).to.equal(14);
        expect(stack.pop()).to.equal(14);
        expect(stack.pop()).to.equal(13);
        expect(stack.pop()).to.equal(12);
        expect(stack.pop()).to.equal(11);
        expect(stack.pop()).to.equal(10);
        expect(stack.pop()).to.equal(9);
        expect(stack.pop()).to.equal(8);
        expect(stack.pop()).to.equal(7);
        expect(stack.pop()).to.equal(6);
        expect(stack.pop()).to.equal(5);
        expect(stack.pop()).to.equal(4);
        expect(stack.pop()).to.equal(3);
        expect(stack.pop()).to.equal(2);
        expect(stack.pop()).to.equal(1);
        expect(stack.pop()).to.equal(0);
        expect(stack.isEmpty()).to.equal(true);
    });
  });
});