function Node(info) {
    this.info = info;
    this.left = null;
    this.right = null;
}

function treeInsert(root, num) {
    if (!root) {
        return new Node(num);
    }
    let current = root;
    let rootElementOfCurrent;
    while (current !== null) {
        rootElementOfCurrent = current;
        if (num < current.info) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    if (num < rootElementOfCurrent.info) {
        rootElementOfCurrent.left = new Node(num);
    } else {
        rootElementOfCurrent.right = new Node(num);
    }
    return root;
}

let root = null;
const arr = [2, 3, 5, 1, 6];
for (let i = 0; i < 5; i++) {
    root = treeInsert(root, arr[i]);
}
console.log('root-', root);

function treeDelete(root, num) {
    let currentNode = root;
    let currentNodesRoot = currentNode;
    while (currentNode && currentNode.info !== num) {
        currentNodesRoot = currentNode;
        if (num > currentNode.info) {
            currentNode = currentNode.right;
        } else {
            currentNode = currentNode.left;
        }
    }

    console.log('current node root-', currentNodesRoot);
    console.log('current node-', currentNode);

    if (currentNode.left === null && currentNode.right === null) {
        if (currentNodesRoot.left && currentNodesRoot.left.info === num) {
            currentNodesRoot.left = null;
        } else if (currentNodesRoot.right && currentNodesRoot.right.info === num) {
            currentNodesRoot.right = null;
        }
    } else if (currentNode.left === null || currentNode.right === null) {
        currentNodesRoot.right = currentNode.right? currentNode.right: currentNode.left;
    } else {
        currentNodesRoot.right = currentNode.left;
        while(currentNodesRoot.right!==null) {
            currentNodesRoot = currentNodesRoot.right;
        }
        currentNodesRoot.right = currentNode.right;
    }
}


console.log(treeDelete(root, 3));