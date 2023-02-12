class MyQueue {
  constructor() {
    // To implement a queue with stacks, we need at least two stacks. This is because when we initially push values into a stack, it won't be in the proper order for a queue, so we can pop the first stack into the second stack to reference it in the correct order expected of a queue
    this.in = [];
    this.out = [];
  }

  push(val) {
    // To save time, if all we're doing is queueing values, all we have to do is push it to the first stack, we don't have to reorder it yet, we can do that only when it's actually necessary
    this.in.push(val);
  }

  pop() {
    // To dequeue, we have to first put our stack in the proper order, which we can do by pushing the input stack into the output stack from the end
    // Only push to the output stack if it is empty, because otherwise we could be push things in the wrong order. For example, if we always push values first, and we already have values reorder into our output stack, we could end up putting the latest enqueued values in the first out positions before the previously enqueued values which should be popped out first
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    // After reordering it properly, pop off the first in value
    return this.out.pop();
  }

  peek() {
    // To peek, we simply have to check if the output stack is empty, and if it is, repeat the same steps in dequeue to order it correctly, then, return the end of the output stack
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    // Return the last index
    return this.out[this.out.length - 1];
  }

  empty() {
    // This is simple. Just check if both stacks are empty. If either aren't, it will return false. Truth tables in logical operators will help you understand why. https://press.rebus.community/programmingfundamentals/chapter/logical-operators/
      return this.in.length === 0 && this.out.length === 0;
  }
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */