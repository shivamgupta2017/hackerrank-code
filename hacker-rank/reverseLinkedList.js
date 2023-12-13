function reverseMyLinkedList(node) {
    if(node.next) {
        const composedNode = reverseMyLinkedList(node.next);
        let currentNode = composedNode;
        while(currentNode.next!==null) {
            currentNode = currentNode.next;
        }
        node.next = null;
        currentNode.next = node;
        return composedNode;
    } else {
        return node;
    }
}

function reverse(nodes) {
    const ob = reverseMyLinkedList(nodes, {});
    console.log('ob ->>', ob);
}



console.log(reverse({
        data:1,
        next:{
            data:2,
            next: {
                data:3,
                next: {
                    data: 4,
                    next: {
                        data: 5,
                        next: null
                    }
                }
            }
        }
    }));

// SinglyLinkedListNode {
//     data: 1,
//         next: SinglyLinkedListNode {
//         data: 2,
//             next: SinglyLinkedListNode { data: 3, next: [SinglyLinkedListNode] }
//     }
// }