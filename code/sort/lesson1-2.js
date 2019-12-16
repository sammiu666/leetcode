// 选择排序
// 每轮找出一个最小值放至数组左边
export default (arr) => {
  for (let i = 0, len = arr.length, min; i < len - 1; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let tmp = min
        min = arr[j]
        arr[j] = tmp
      }
    }
    arr[i] = min
  }
  return arr
}