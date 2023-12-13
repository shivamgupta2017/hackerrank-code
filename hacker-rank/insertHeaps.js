function Node(info) {
    this.info = info;
    this.left = null;
    this.right = null;
};

function insertIntoPosition (node, root) {
    if(root) {
        if(node.info<=root.info) {
            root.left = insertIntoPosition (node, root.left);
        } else if (node.info>=root.info) {
            root.right = insertIntoPosition (node, root.right);
        }
    } else {
        root = node;
    }
    return root;
}

function deleteNode(n, root) {


    if(n===root.info) {
        const tempLeft = root.left;
        const tempRight = root.right;

        root = root.right;

    }

    if(root.left) {
        const leftAndRight = deleteNode(n, root.left)
        console.log('left and right -', leftAndRight);
    }

}

function performOps(input) {
    const ip = input.split('\n');
    let root = null;
    const operations = ip.slice(1);
    for (let i =0;i<operations.length;i++) {
        const op = operations[i].split(' ');
        if (op.length>1) {
            if (op.shift()==='1') {

                const node = new Node(parseInt(op.shift()));
                root = insertIntoPosition(node, root);
                console.log('root->', root);

            } else if (op.shift()==='2') {
                deleteNode(op.shift(), root);
            }
        } else {
            // find and print minimum
            // printMinimum(root);

        }

    }

}


console.log(performOps(
'5\n' +
    '1 4\n' +
    '1 9\n' +
    '3\n' +
    '2 4\n' +
    '3'
))