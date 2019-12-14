// Leetcode 922

export default (arr) => {
  let r = []
  let odd = 1
  let even = 0
  arr.sort()
  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })
  return r
}