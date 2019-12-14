import quickSort from '../../code/sort/lesson5'

test('quickSort', () => {
  expect(quickSort([10, 2, 4, 1, 7])).toEqual([1, 2, 4, 7, 10])
});