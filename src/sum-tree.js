class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

class BinaryTree {
  sum(node) {
    if (!node) {
      return 0;
    }
    return this.sum(node.left) + node.data + this.sum(node.right);
  }

  isSumTree(node) {
    let ls, rs;
    /* If node is NULL or it's a leaf node then 
           return true */
    if (node == null || (node.left == null && node.right == null)) {
      return 1;
    }

    /* Get sum of nodes in left and right subtrees */
    ls = this.sum(node.left);
    rs = this.sum(node.right);

    if (node.data == ls + rs && this.isSumTree(node.left) != 0 && this.isSumTree(node.right) != 0) {
      return 1;
    }

    return 0;
  }
}

export const checkIsSumTree = () => {
  const tree = new BinaryTree();
  tree.root = new Node(26);
  tree.root.left = new Node(10);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(6);
  tree.root.right.right = new Node(3);

  if (tree.isSumTree(tree.root) != 0) console.log('The given tree is a sum tree');
  else console.log('The given tree is not a sum tree');
};
