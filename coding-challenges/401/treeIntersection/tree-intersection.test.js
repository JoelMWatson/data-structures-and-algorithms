const { node, existsInTree, treeIntersection } = require('./tree-intersection');

const trees = [];
//              150
//      100           250
//    75   160     200   350
//       125  175      300  500
trees[0] = new node(150);
trees[0].left = new node(100);
trees[0].left.left = new node(75);
trees[0].left.right = new node(160);
trees[0].left.right.left = new node(125);
trees[0].left.right.right = new node(175);
trees[0].right = new node(250);
trees[0].right.left = new node(200);
trees[0].right.right = new node(350);
trees[0].right.right.left = new node(300);
trees[0].right.right.right = new node(500);
//              42
//      100           600
//    15   160     200   350
//       125  175       4   500
trees[1] = new node(42);
trees[1].left = new node(100);
trees[1].left.left = new node(15);
trees[1].left.right = new node(160);
trees[1].left.right.left = new node(125);
trees[1].left.right.right = new node(175);
trees[1].right = new node(600);
trees[1].right.left = new node(200);
trees[1].right.right = new node(350);
trees[1].right.right.left = new node(4);
trees[1].right.right.right = new node(500);
//              25
//      35           600
//    160   160     200   35
//       125  4          50   325
trees[2] = new node(25);
trees[2].left = new node(35);
trees[2].left.left = new node(160);
trees[2].left.right = new node(160);
trees[2].left.right.left = new node(125);
trees[2].left.right.right = new node(4);
trees[2].right = new node(600);
trees[2].right.left = new node(200);
trees[2].right.right = new node(35);
trees[2].right.right.left = new node(4);
trees[2].right.right.right = new node(325);
//              22
//      33           555
//   167  161       2   -5
//      12  234        0  18
trees[3] = new node(22);
trees[3].left = new node(33);
trees[3].left.left = new node(167);
trees[3].left.right = new node(161);
trees[3].left.right.left = new node(12);
trees[3].left.right.right = new node(234);
trees[3].right = new node(555);
trees[3].right.left = new node(2);
trees[3].right.right = new node(-5);
trees[3].right.right.left = new node(0);
trees[3].right.right.right = new node(18);

describe('testing existsInTree', () => {
  test('returns true if match is found anywhere in tree', () => {
    expect(existsInTree(150, trees[0])).toBe(true);
    expect(existsInTree(15, trees[1])).toBe(true);
    expect(existsInTree(35, trees[2])).toBe(true);
    expect(existsInTree(234, trees[3])).toBe(true);
  });
  test('returns false if node does not exist', () => {
    expect(existsInTree(150, trees[3])).toBe(false);
    expect(existsInTree(15, trees[2])).toBe(false);
    expect(existsInTree(35, trees[1])).toBe(false);
    expect(existsInTree(234, trees[0])).toBe(false);
  });
});

describe('testing treeIntersection', () => {
  test('Correctly finds matches between trees', () => {
    expect(treeIntersection(trees[0], trees[1])).toStrictEqual([
      100,
      160,
      200,
      350,
      125,
      175,
      500,
    ]);
    expect(treeIntersection(trees[0], trees[2])).toStrictEqual([160, 200, 125]);
    expect(treeIntersection(trees[1], trees[2])).toStrictEqual([
      600,
      160,
      200,
      125,
      4,
    ]);
  });
  test('if no matches exist returns empty array', () => {
    expect(treeIntersection(trees[0], trees[3])).toStrictEqual([]);
  });
});
