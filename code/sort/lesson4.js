// Leetcode 41

export default (arr) => {
  // 过滤非正整数
  arr = arr.filter(item => item > 0)
  // 正整数组是否为空
  if (arr.length) {
    arr.sort()
    // 如果第一个元素不为1，返回1
    if (arr[0] !== 1) {
      return 1
    } else {
      for (let i = 0, len = arr.length - 1; i < len; i++) {
        if (arr[i + 1] - arr[i] > 1) {
          return arr[i] + 1
        }
      }
      // 如果数组是连续的正整数组[1,2,3,4,5,6]
      return arr.pop() + 1
    }
  } else {
    return 1
  }
}