import bubbleSort from '../../code/sort/lesson1-1'


test('bubbleSort', () => {
  expect(bubbleSort([2, 3, 1, 10, 7])).toEqual([1, 2, 3, 7, 10])
})