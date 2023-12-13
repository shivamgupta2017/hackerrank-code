function lca(root, v1, v2) {


        if(root.left && root.left.info === v1) {
            return root.info;
        }

        if (root.right && root.right.info === v2) {
            return root.info;
        }


    if(root.left) {
        const lc = lca(root.left, v1, v2);
        console.log('lc v1 -->', lc);
        return lc;
    }

    if(root.right) {
        const lc = lca(root.right, v1, v2);
        conosle.log('lc v2 -->', lc);
        return lc;
    }


    // if(!v2TempParent && root.right) {
    //     return lca(root.right, v1, v2);
    // }
    // console.log('v1->', v1TempParent);
    // console.log('v2->', v2TempParent);

}

console.log(lca({
    info: 3,
    left: {
        info: 2,
        left: {
            info:1,
            left: null,
            right: null
        },
        right: {
        info: 5,
            left: null,
            right: {
            info: 6,
                left: null,
                right: null
        }
}
    },
    right: {
        info: 5,
        left: {
            info: 4,
            left: null,
            right: null
        },
        right: {
            info: 6,
            left: null,
            right: {
                info: 7,
                left: null,
                right: null
            }
        }

    }
}, 1, 6));