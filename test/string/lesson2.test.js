import subStr from '../../code/string/lesson2'

test('subStr', () => {
  expect(subStr("00110011")).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})