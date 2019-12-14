import sortByOdevity from '../../code/sort/lesson1'

test('sortByOdevity', () => {
  expect(sortByOdevity([4, 2, 5, 7])).toEqual([2, 5, 4, 7])
})