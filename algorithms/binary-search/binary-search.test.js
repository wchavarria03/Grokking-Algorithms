const { binarySearchLoop, binarySearchRecursive } = require('./binary-search');
let list;

beforeEach(() => {
  list = [1, 2, 3, 5, 6, 7, 9, 11, 20, 25, 31, 46, 59, 75, 83, 89, 90];
});

describe('Binary Search', () => {
  describe('Loop', () => {
    test('Random Case', () => {
      expect(binarySearchLoop(list, 59)).toBe(12);
    });
    test('Worst Case', () => {
      expect(binarySearchLoop(list, 9)).toBe(6);
    });
    test('Not Found Case', () => {
      expect(binarySearchLoop(list, 23)).toBeNull();
    });
  });
  describe('Recursive', () => {
    test('Random Case', () => {
      expect(binarySearchRecursive(list, 59)).toBe(12);
    });
    test('Worst Case', () => {
      expect(binarySearchRecursive(list, 9)).toBe(6);
    });
    test('Not Found Case', () => {
      expect(binarySearchRecursive(list, 23)).toBeNull();
    });
  });
});


