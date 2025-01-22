/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) throw new Error;

    let val;

    if (this.length === 1) {
      // If there's only one node, reset head and tail
      val = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      // Traverse to the second-to-last node
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      // Update tail to the second-to-last node
      val = this.tail.val;
      this.tail = current;
      this.tail.next = null; // Disconnect the old tail
    }

    this.length--;

    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) throw new Error;

    let firstItem = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstItem.next;
    }
    this.length--;
    return firstItem.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length) throw new Error;

    let current = this.head;
    let currIdx = 0;

    while (current !== null) {
      if (currIdx === idx) return current.val;

      current = current.next;
      currIdx++;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) throw new Error;

    let current = this.head;
    let currIdx = 0;

    while (current !== null) {
      if (currIdx === idx) current.val = val;

      current = current.next;
      currIdx++;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) throw new Error;

    let newNode = new Node(val);

    let current = this.head;
    let currIdx = 0;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      while (current !== null) {
        if (currIdx === idx - 1) {
          newNode.next = current.next;
          current.next = newNode;
          current = newNode;
        }

        if (newNode.next === null) this.tail = newNode;

        current = current.next;
        currIdx++;
      }
    }
    this.length++;

    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || this.length === 0) throw new Error;

    let current = this.head;
    let currIdx = 0;

    let itemVal;
    let prev;

    if (this.length === 1) {
      itemVal = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      while (current !== null) {
        if (currIdx === idx - 1) {
          prev = current; // find prev value
        } else if (currIdx === idx) {
          itemVal = current.val;
          prev.next = current.next;
        }

        current = current.next;
        currIdx++;
      }
    }

    this.length--;

    return itemVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;

    let current = this.head;

    while (current !== null) {
      total += current.val;

      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
