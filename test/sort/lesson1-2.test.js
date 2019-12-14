import selectSort from '../../code/sort/lesson1-2'

test('selectSort', () => {
  expect(selectSort([2, 1, 10, 4])).toEqual([1, 2, 4, 10])
})