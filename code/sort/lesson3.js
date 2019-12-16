// export default (arr) => {
//   if (arr.length < 2) {
//     return 0
//   }
//   arr.sort()
//   let len = arr.length - 1
//   let max = 0
//   for (let i = 0; i < len; i++) {
//     let value = arr[i + 1] - arr[i]
//     if (value > max) {
//       max = value
//     }
//   }
//   return max
// }

// Leetcode 164
// 最大区间
export default (arr) => {
  if (arr.length < 2) {
    return 0
  }
  let max = 0
  let space
  let len = arr.length - 1
  for (let i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    // 排序的过程中就进行比较，从第二轮开始
    if (i < len) {
      space = arr[i + 1] - arr[i]
      if (space > max) {
        max = space
      }
    }
  }
  return Math.max(max, arr[1] - arr[0])
}