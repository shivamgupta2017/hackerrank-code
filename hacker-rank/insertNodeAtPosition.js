function insertNodeAtPosition(llist, data, position) {
    let indx = 0, current = llist;
    const newNode = {
        data,
        next: null
    }
    while (indx<position-1) {
        current = current.next;
        indx++;
    }
    const temp = current.next;
    newNode.next = temp;
    current.next = newNode;
    return llist;
}

const llist = {
    data: 11,
    next: {
        data: 9,
        next: {
            data: 19,
            next: {
                data: 10,
                next: {
                    data: 4,
                    next: null
                }
            }
        }
    }
}

console.log(JSON.stringify(insertNodeAtPosition(llist, 20, 3)));

