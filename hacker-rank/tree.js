function treeTraverse(tree) {
    if (tree.left) {
        treeTraverse(tree.left);
    }
    console.log('tree.node->', tree.node);
    if(tree.right) {
        treeTraverse(tree.right);
    }


}

// 2 4 6 8 10 20
const tree = {
    node: 8,
    left: {
        node: 4,
        left: {
            node: 2,
            left: null,
            right: null
        },
        right: {
            node: 6,
            left: null,
            right: null
        }
    },
    right: {
        node: 10,
        left: null,
        right: {
            node: 20,
            left: null,
            right: null
        },
    }

};

treeTraverse(tree);