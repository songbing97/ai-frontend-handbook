class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // 找到要删除的节点

      if (node.left === null && node.right === null) {
        // 情况1：叶节点
        node = null;
      } else if (node.left === null) {
        // 情况2：只有右子树
        node = node.right;
      } else if (node.right === null) {
        // 情况3：只有左子树
        node = node.left;
      } else {
        // 情况4：有两个子树
        const minNode = this.findMinNode(node.right);
        node.value = minNode.value;
        node.right = this.removeNode(node.right, minNode.value);
      }
    }

    return node;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  preOrderTraversal() {
    const result = [];
    this.preOrderTraversalNode(this.root, result);
    return result;
  }

  preOrderTraversalNode(node, result) {
    if (node !== null) {
      result.push(node.value);
      this.preOrderTraversalNode(node.left, result);
      this.preOrderTraversalNode(node.right, result);
    }
  }

  inOrderTraversal() {
    const result = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  inOrderTraversalNode(node, result) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  postOrderTraversal() {
    const result = [];
    this.postOrderTraversalNode(this.root, result);
    return result;
  }

  postOrderTraversalNode(node, result) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, result);
      this.postOrderTraversalNode(node.right, result);
      result.push(node.value);
    }
  }
}


const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log(binaryTree.search(4)); // 输出 true
console.log(binaryTree.search(9)); // 输出 false

binaryTree.remove(5);

console.log(binaryTree.preOrderTraversal()); // 输出 [6, 3, 2, 4, 7, 8]
console.log(binaryTree.inOrderTraversal()); // 输出 [2, 3, 4, 6, 7, 8]
console.log(binaryTree.postOrderTraversal()); // 输出 [2, 4, 3, 8, 7, 6]
