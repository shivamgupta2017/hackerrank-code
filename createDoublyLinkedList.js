function Node(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
}

function recursiveReverseDoublyLinkedList(node) {

    if(node.next===null) {
        node.previous = null;
        return node;
    } else {

      const composedNode = recursiveReverseDoublyLinkedList(node.next);
      let current = composedNode;
      while (current.next!==null) {
          current = current.next;
      }
      node.previous = current;
      node.next = null;
      current.next = node;
      return composedNode;

    }
}

function reverseDoublyLinkedList(llist) {
   const reverted = recursiveReverseDoublyLinkedList(llist);
   return reverted;
}

function createDoublyLinkedList() {
    let nodes = {};
    let currentNode = nodes;
    for (let indx =0;indx<5;indx++) {
        const node = new Node(indx);
        node.previous = Object.keys(currentNode).length === 0 ? null: currentNode;
        if(!Object.keys(nodes).length) {
            currentNode = nodes = node;
        } else {
            currentNode.next = node;
            currentNode = currentNode.next;
        }
    }
    return nodes;
}
const createdNodes = createDoublyLinkedList();
const reversedNodes = reverseDoublyLinkedList(createdNodes);
console.log('reversedNodes -> ', reversedNodes);

