//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {

  constructor(previous, value) {
    this.previous = previous,
    this.value = value,
    this.next = null
  };
};

export class LinkedList {
 
  constructor () {
    this.lastTracker = null;
    this.firstTracker = null;
  };

  push(value) {
    let nodo = new Node(null,value);
    if (this.firstTracker === null) {
      this.firstTracker = nodo;
      this.lastTracker = nodo;
    } else {
      nodo.previous = this.lastTracker;
      this.lastTracker.next = nodo;
      this.lastTracker = nodo;
    };
  };

  pop() {
    if (this.lastTracker !== null) {
      let aux = this.lastTracker.value;
      this.lastTracker = this.lastTracker.previous;
      if (this.lastTracker === null) {
        this.firstTracker = null;
      } else {
        this.lastTracker.next = null;
      }
      return aux;
    } else {
        return null;
    }
  }

  shift() {
    if (this.lastTracker !== null) {
      let aux = this.firstTracker.value;
      this.firstTracker = this.firstTracker.next;
      if (this.firstTracker !== null) {
      this.firstTracker.previous = null;
      }
      if (this.firstTracker === null) {
        this.lastTracker = null;
      }
      return aux;
    } else {
      return null;
    }
  }

  unshift(value) {
    let nodo = new Node(null,value);
    if (this.firstTracker !== null) {
      this.firstTracker.previous = nodo;
      nodo.next = this.firstTracker;
      this.firstTracker = nodo;
    } else {
      this.firstTracker = nodo;
      this.lastTracker = nodo;
    }
  }

  delete(value) {
    let aux;
    if (this.firstTracker !== null) {
      aux = this.firstTracker;
      while (value !== aux.value && aux.next !== null) {
        aux = aux.next; 
      }
        if (value === aux.value) {
          let foundNext = aux.next;
          let foundPrev = aux.previous;
        if (foundPrev) {
          foundPrev.next = aux.next;
        }
        if (foundNext){
          foundNext.previous = aux.previous
        }
        if (foundPrev === null){
          this.firstTracker = foundNext;
        }
        if (foundNext === null){
          this.lastTracker = foundPrev;
        }
      }
      return null;
    } else {
      return null;
    };
  };

  count() {
    let i = 0;
    if (this.firstTracker === null) {
      return i;
    }
    let aux = this.firstTracker;
    do {
      i++;
      aux = this.firstTracker.next;
    } while (aux === null)
    return i;
  }
};

