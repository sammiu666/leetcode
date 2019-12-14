// 选择排序
// export default (arr) => {
//   for (let i = 0, len = arr.length, min; i < len - 1; i++) {
//     min = arr[i]
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < min) {
//         let tmp = min
//         min = arr[j]
//         arr[j] = tmp
//       }
//     }
//     arr[i] = min
//   }
//   return arr
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