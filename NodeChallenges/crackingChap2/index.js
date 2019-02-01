class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor(dataArray) {
    if (!dataArray || !dataArray.length) {
      return;
    }
    if (dataArray.length) {
      this.head = new Node(dataArray[0]);
    }
    var currentNode = this.head;

    for (let i = 1; i < dataArray.length; i++) {
      var newNode = new Node(dataArray[i]);
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }
  }
  length() {
    var counter = 0;
    var currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      counter++;
    }
    return counter;
  }
  allNodes() {
    var nodes = [];
    var currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  allData() {
    return this.allNodes().map(node => node.data);
  }
  getAtIndex(index) {
    var counter = 0;
    var currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

function removeDuplicates(list) {
  var currentNode = list.head;
  var exists = {};
  while (currentNode && currentNode.next) {
    if (exists[currentNode.next.data]) {
      currentNode.next = currentNode.next.next
    }
    exists[currentNode.data] = true;
    currentNode = currentNode.next;
  }
}

function nFromLast(list, n) {
  var slowNode = list.head;
  var fastNode = list.head;
  //
  // advance fast one n nodes
  //
  for (let i = 0; i < n; i++) {
    fastNode = fastNode.next;
  }

  while(fastNode.next) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }
  return slowNode;
}

function deleteAMiddleNode(node) {
  node.data = node.next.data;
  node.next = node.next.next;
}

function partition(list, x) {
  //
  // create 2 lists -- one above and one below
  //
  var aboveNode, aboveHead; 
  var belowNode, belowHead;

  var currentNode = list.head;

  while (currentNode) {
    if (currentNode.data < x) {
      if (!belowHead) {
        belowHead = currentNode;
        belowNode = currentNode;
      } else {
        belowNode.next = currentNode;
        belowNode = currentNode;
      }
    } else {
      if (!aboveHead) {
        aboveHead = currentNode;
        aboveNode = currentNode;
      } else {
        aboveNode.next = currentNode;
        aboveNode = currentNode;
      }
    }
    currentNode = currentNode.next;
  }

  //
  // now connect the lists and set the new list head
  //
  if (!belowHead) {
    list.head = aboveHead
  } else if (!aboveNode) {
    list.head = belowHead;
  } else {
    list.head = belowHead;
    belowNode.next = aboveHead;
  }
}

function sumBackwardsDigits(list1, list2) {
  return getNumberFromBackwardsList(list1) + getNumberFromBackwardsList(list2);

  function getNumberFromBackwardsList(list) {
    var numberString = '';
    var currentNode = list.head;
    while (currentNode) {
      numberString = `${currentNode.data}${numberString}`;
      currentNode = currentNode.next;
    }
    return parseInt(numberString);
  }
}

function sumForwardsDigits(list1, list2) {
  return getNumberFromForwardsList(list1) + getNumberFromForwardsList(list2);

  function getNumberFromForwardsList(list) {
    var numberString = '';
    var currentNode = list.head;
    while (currentNode) {
      numberString = `${numberString}${currentNode.data}`;
      currentNode = currentNode.next;
    }
    return parseInt(numberString);
  }
}

function isPalindrome(list) {
  //
  // make a backwards linked list and compare them
  //
  var currentNode = list.head;
  var backwardsList = new List([]);

  while (currentNode) {
    var newHead = new Node(currentNode.data, backwardsList.head);
    backwardsList.head = newHead;
    currentNode = currentNode.next;
  }

  return isEqual(list, backwardsList);

  function isEqual(list1, list2) {
    var list1Current = list1.head;
    var list2Current = list2.head;

    while (list1Current.next && list2Current.next) {
      if (list1Current.data !== list2Current.data) {
        return false;
      }
      list1Current = list1Current.next;
      list2Current = list2Current.next;
    }
    if (list1Current.next || list2Current.next) {
      return false;
    }
    return true;
  }
}

class Result {
  constructor(node, result) {
    this.node = node;
    this.result = result;
  }
}

function isPalindromeRecursive(list) {
  return innerIsPalindromeRecursive(list.head, list.length()).result;
  

  function innerIsPalindromeRecursive(node, length) {
    //
    // IF at the middle of an even number of nodes
    //
    if (!node || length <= 0) {
      return new Result(node, true);

    // ELSE IF at the middle of an odd number of nodes
    } else if (length === 1) {
      return new Result(node.next, true);
    }

    //
    // get child responses
    //
    var res = innerIsPalindromeRecursive(node.next, length - 2);

    //
    // IF a non-match has already been found, forward that result
    //
    if (!res.result) {
      return res;
    }

    //
    // compare this node to it's corresponding other side
    //
    res.result = (node.data === res.node.data);

    //
    // advance the node
    //
    res.node = res.node.next;

    return res;
  }
}

function findIntersection(list1, list2) {
  var lastNode1 = list1.head;
  var lastNode2 = list2.head;

  var list1Count = 1;
  var list2Count = 1;

  while (lastNode1.next) {
    lastNode1 = lastNode1.next;
    list1Count++;
  }

  while(lastNode2.next) {
    lastNode2 = lastNode2.next;
    list2Count++;
  }

  if (lastNode1 !== lastNode2) {
    return null;
  }

  //
  // set nodes to beginning
  //
  var list1CurrentNode = list1.head;
  var list2CurrentNode = list2.head;

  //
  // move the longer marker so that it is the same distance
  // from the end as the shorter marker
  //
  if (list1Count !== list2Count) {
    if (list1Count > list2Count) {
      for (let i = 0; i < list1Count - list2Count; i++) {
        list1CurrentNode = list1CurrentNode.next;
      }
    } else {
      for (let i = 0; i < list2Count - list1Count; i++) {
        list2CurrentNode = list2CurrentNode.next;
      }
    }
  }

  //
  // advance to first node that is equal
  //
  while (list1CurrentNode !== list2CurrentNode) {
    list1CurrentNode = list1CurrentNode.next;
    list2CurrentNode = list2CurrentNode.next;
  }
  return list1CurrentNode;
}

function findStartOfLoop (list) {
  var fastNode = list.head;
  var slowNode = list.head;

  while (true) {
    //
    // If the fast node hits an end, there is no loop
    //
    if (!fastNode.next || !fastNode.next.next) {
      return null;
    }

    fastNode = fastNode.next.next;
    slowNode = slowNode.next;

    //
    // IF they've collided, find collision point
    //
    if (fastNode === slowNode) {
      //
      // The nodes and the head are now the same distance 
      // from the start of the loop
      //
      var fromStart = list.head;
      var fromCollision = fastNode;

      while (fromStart !== fromCollision) {
        fromStart = fromStart.next;
        fromCollision = fromCollision.next;
      }
      return fromCollision;
    }
  }
}




module.exports = {
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
}