// Leetcode 41

// export default (arr) => {
//   // 过滤非正整数
//   arr = arr.filter(item => item > 0)
//   // 正整数组是否为空
//   if (arr.length) {
//     arr.sort()
//     // 如果第一个元素不为1，返回1
//     if (arr[0] !== 1) {
//       return 1
//     } else {
//       for (let i = 0, len = arr.length - 1; i < len; i++) {
//         // 如果相邻两个数差值大于1，返回较小数 + 1
//         if (arr[i + 1] - arr[i] > 1) {
//           return arr[i] + 1
//         }
//       }
//       // 如果数组是连续的正整数组[1,2,3,4,5,6]，返回数组中最大数 + 1
//       return arr.pop() + 1
//     }
//   } else {
//     return 1
//   }
// }


export default (arr) => {
  arr = arr.filter(item => item > 0)
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let tmp = min
        min = arr[j]
        arr[j] = tmp
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      // 第一轮得到的最小值如果不是1，直接返回1
      if (min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}