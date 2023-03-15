function SinglyLinkedList(data) {
    this.data = data;
    this.next = null;
}

function hasCycle(head) {
    const visitedNodes = [];
    let currentNode = head;
    while(currentNode.next!==null) {
        if (visitedNodes.includes(currentNode.data)) {
            return true;
        }
        visitedNodes.push(currentNode.data);
        currentNode=currentNode.next;
    }
    return false;
}

function createOneCycle() {
    let i =0;
    let linkedList = {};
    let currentIteration = linkedList;

    while(i<5) {

        const list = new SinglyLinkedList(i);
        if(!Object.keys(linkedList).length) {
            currentIteration = linkedList = list;
        } else {
            currentIteration.next = list;
            currentIteration = currentIteration.next;
        }

        i++;
    }

    linkedList.next= linkedList;
    return linkedList;

}
// hasCycle();
const linkedList = createOneCycle();
console.log('linked list -> ', hasCycle(linkedList));