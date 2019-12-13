export default (arr, n) => {
  let count = 0
  // 右边界补充一个0，以防判断错误。
  arr.push(0)
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i] === 0) {
      if (i === 0 && arr[1] === 0) {
        count++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        count++
        i++
      }
    }
  }
  return count >= n
}