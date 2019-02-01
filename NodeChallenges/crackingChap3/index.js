class StackNode {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(dataArray) {
    while(dataArray.length) {
      this.push(dataArray.shift());
    }
  }
  pop() {
    if (this.head) {
      var toReturn = this.head;
      this.head = this.head.next;
      return toReturn.data;
    }
  }
  push(data) {
    this.head = new StackNode(data, this.head);
  }
  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return null;
    }
  }
  isEmpty() {
    return !this.head;
  }
}

class StackWithMinimum extends Stack {
  push(data) {
    if (!this.minimumsStack) {
      this.minimumsStack = new Stack(data);
    } else {
      //
      // use this.minimumsStack.peek() || data because otherwise if peek() is null then
      // Math.min() will return 0
      //
      this.minimumsStack.push(Math.min(data, this.minimumsStack.peek() || data))
    }
    super.push(data);
  }
  pop() {
    this.minimumsStack.pop();
    return super.pop();
  }
  min() {
    return this.minimumsStack.peek();
  }
}

class SetOfStacks {
  
}








module.exports = {
  StackNode,
  Stack,

  StackWithMinimum

};