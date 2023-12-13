function SinglyLinkedListNode(value) {
    this.data = value;
    this.next = null;
}

function reverse(nodes) {
    let current = nodes;
    while(current!==null) {
        console.log('current data ->', current.data);
        current = current.next;
    }
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