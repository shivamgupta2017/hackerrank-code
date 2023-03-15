function Node(data) {
    this.data = data;
    this.next = null;
}
function createLinkedList(list) {
    let linkedList = {};
    let currentNode = linkedList;
    let indx = 0;
    while(indx<list.length) {
        const node = new Node(list[indx]);
        if(!(Object.entries(linkedList).length)) {
            currentNode = linkedList = node;
        } else {
            currentNode.next = node;
            currentNode = currentNode.next;
        }
        indx++;
    }
    return linkedList;
}

function mergeLists(linkedList1, linkedList2) {

    let currentLinkedList1Node = linkedList1;
    let currentLinkedList2Node = linkedList2;
    let mergedLinkedList = {};
    let currentMergedLinkedListNode = mergedLinkedList;

    while(currentLinkedList1Node && currentLinkedList2Node) {
        console.log('l-1->', currentLinkedList1Node.data, 'l-2->', currentLinkedList2Node.data);
        if(currentLinkedList1Node.data<currentLinkedList2Node.data) {
            if(!(Object.entries(currentMergedLinkedListNode).length)) {
                currentMergedLinkedListNode = mergedLinkedList = {...currentLinkedList1Node, next: null};
            } else {
                currentMergedLinkedListNode.next = {...currentLinkedList1Node, next: null};
                currentMergedLinkedListNode = currentMergedLinkedListNode.next;
            }
            currentLinkedList1Node = currentLinkedList1Node.next;
        } else {
            if(!(Object.entries(currentMergedLinkedListNode).length)) {
                currentMergedLinkedListNode = mergedLinkedList = {...currentLinkedList2Node, next: null};
            } else {
                currentMergedLinkedListNode.next = {...currentLinkedList2Node, next: null};
                currentMergedLinkedListNode = currentMergedLinkedListNode.next;
            }
            currentLinkedList2Node = currentLinkedList2Node.next;
        }

    }
    while(currentLinkedList1Node) {
        currentMergedLinkedListNode.next = { ...currentLinkedList1Node, next: null };
        currentLinkedList1Node = currentLinkedList1Node.next;
        currentMergedLinkedListNode = currentMergedLinkedListNode.next;

    }

    while(currentLinkedList2Node) {
        currentMergedLinkedListNode.next = {...currentLinkedList2Node, next: null};
        currentLinkedList2Node = currentLinkedList2Node.next;
        currentMergedLinkedListNode = currentMergedLinkedListNode.next;
    }


    return mergedLinkedList;
}

function prepareData () {

    const d1 = createLinkedList([1, 3, 5, 7]);
    const d2 = createLinkedList([2, 4, 6, 8, 9, 10]);
    const merged = mergeLists(d1, d2);
    console.log('merged ->>', merged);

}


prepareData();


