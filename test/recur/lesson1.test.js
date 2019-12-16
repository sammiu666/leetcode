import searchIP from '../../code/recur/lesson1'

test('searchIP', () => {
  expect(searchIP("25525511135")).toEqual(["255.255.11.135", "255.255.111.35"])
});