const { expect } = require('chai');
const {
  List,
  Node,

  removeDuplicates,
  nFromLast,
  deleteAMiddleNode,
  partition,
  sumBackwardsDigits,
  sumForwardsDigits,
  isPalindrome,
  isPalindromeRecursive,
  findIntersection,
  findStartOfLoop
} = require('./');

describe('describeDescription', function () {
  describe('List', function () {
    it ('gets its length', function () {
      var list = new List([1,2,3,4,5]);
      expect(list.head.data).to.equal(1);
      expect(list.length()).to.equal(5);
    });

    it ('gets all nodes', function () {
      var list  = new List([1,2,3,4,5]);
      expect(list.allNodes().length).to.equal(5);
      expect(list.allNodes().map(node => node.data)).to.deep.equal([1,2,3,4,5]);
    });

    it ('gets all data', function () {
      var list  = new List([1,2,3,4,5]);
      expect(list.allNodes().length).to.equal(5);
      expect(list.allData()).to.deep.equal([1,2,3,4,5]);
    });

    it ('gets a node at n index', function () {
      var list = new List([1,2,3,4,5]);
      expect(list.getAtIndex(2).data).to.equal(3);  
    });
  });

  describe('Chapter 2 problems', function () {
      
    it ('2.1 -- removesDuplicates', function () {
      var list = new List([1,2,3,4,2,5,6,1]);
      removeDuplicates(list);
      expect(list.length()).to.equal(6);
      expect(list.allData()).to.deep.equal([1,2,3,4,5,6]);
    });

    it ('2.2 -- return n from last', function () {
      var list = new List([1,2,3,4,5,6]);
      expect(nFromLast(list, 3).data).to.equal(3);
      expect(nFromLast(list, 2).data).to.equal(4);
      expect(nFromLast(list, 1).data).to.equal(5);
    });

    it ('2.3 -- delete node given only that node', function () {
      var list = new List([1,2,3,4,5,6]);
      var node = list.getAtIndex(3); // '4'
      deleteAMiddleNode(node);
      expect(list.allData()).to.deep.equal([1,2,3,5,6]);
    });

    it ('2.4 -- partition around x', function () {
      var list = new List([1,3,5,7,9,2,4,6,8]);
      partition(list, 7);
      expect(list.allData()).to.deep.equal([1,3,5,2,4,6,7,9,8]);
    });

    it('2.5 -- sums numbers stored in 2 lists in reverse order', function () {
      expect(sumBackwardsDigits(new List([5,4,1]), new List([6,5,2]))).to.equal(401); // 145 + 256
      expect(sumBackwardsDigits(new List([5,1]), new List([2,5,9]))).to.equal(967);  // 15 + 952
    });

    it('2.5b -- sums numbers stored in 2 lists in forwards order', function () {
      expect(sumForwardsDigits(new List([5,4,1]), new List([6,5,2]))).to.equal(1193); // 541 + 652
      expect(sumForwardsDigits(new List([5,1]), new List([2,5,9]))).to.equal(310);  // 51 + 259
    });

    it ('2.6 -- isPalindrome', function () {
      expect(isPalindrome(new List([1,2,3,4,4,3,2,1]))).to.equal(true);
      expect(isPalindrome(new List([1,2,3,4,3,2,1]))).to.equal(true);
      expect(isPalindrome(new List([1,2,3,4,3,2,5]))).to.equal(false);
      expect(isPalindrome(new List([5,4,5,4,1,2,1]))).to.equal(false);
    });

    it ('2.6 -- isPalindromeRecursive', function () {
      expect(isPalindromeRecursive(new List([1,2,3,4,4,3,2,1]))).to.equal(true);
      expect(isPalindromeRecursive(new List([1,2,3,4,3,2,1]))).to.equal(true);
      expect(isPalindromeRecursive(new List([1,2,3,4,3,2,5]))).to.equal(false);
      expect(isPalindromeRecursive(new List([5,4,5,4,1,2,1]))).to.equal(false);
    });

    //
    // if the lists intersect, return the node at the intersection
    // otherwise return Null
    //
    it ('2.7 -- findIntersection', function () {
      var intersectingList1 = new List([1,2,3,4,5,6,7,8,9]);
      var intersectingList2 = new List([1,2,3,4,5]);
      var nonIntersectingList = new List([1,2,3,4,5,6]);
      //
      // connect intersectingList2's 3 to intersectingList1's 5
      //
      var intersectingNode = intersectingList1.allNodes()[4];
      intersectingList2.allNodes()[2].next = intersectingNode;
      expect(findIntersection(intersectingList2, intersectingList1)).to.equal(intersectingNode);
      expect(findIntersection(intersectingList1, nonIntersectingList)).to.equal(null);
    });

    it ('2.8 -- findStartOfLoop', function () {
      var list = new List([0,1,2,3,4,5,6,7,8,9]);
      expect(findStartOfLoop(list)).to.equal(null);
      list.getAtIndex(8).next = list.getAtIndex(3);
      expect(findStartOfLoop(list)).to.equal(list.getAtIndex(3));
    });
  });
});