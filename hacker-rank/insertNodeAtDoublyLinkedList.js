function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function createDoublyLinkedList(arr) {
    let nodes = {};
    let currentNode = nodes;
    for (let indx =0; indx<arr.length; indx++) {
        const node = new Node(arr[indx]);
        node.prev = Object.keys(currentNode).length === 0 ? null: currentNode;
        if(!Object.keys(nodes).length) {
            currentNode = nodes = node;
        } else {
            currentNode.next = node;
            currentNode = currentNode.next;
        }
    }
    return Object.keys(nodes).length? nodes: null;
}

function sortedInsert(head, data) {
    if(head===null) {
        return new Node(data);
    }
    if (data>head.data) {
        const node = sortedInsert(head.next, data);
        head.next = node;
        node.prev = head;
        return head;
    } else {
        const node = new Node(data);
        head.prev = node;
        node.next = head;
        return node;
    }
}

const createdNodes = createDoublyLinkedList(
    [
        1, 3, 4, 10
    ]
);
const insertNodeResult = sortedInsert(createdNodes, 5);
console.log('insertNodeResult -> ', insertNodeResult);


