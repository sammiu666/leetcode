// 快排
// export default (arr) => {
//   let quickSort = (arr) => {
//     let len = arr.length
//     if (len < 2) {
//       return arr
//     } else {
//       let flag = arr[0]
//       let left = []
//       let right = []
//       for (let i = 1, tmp; i < len; i++) {
//         tmp = arr[i]
//         if (tmp < flag) {
//           left.push(tmp)
//         } else {
//           right.push(tmp)
//         }
//       }
//       return quickSort(left).concat(flag, quickSort(right))
//     }
//   }
//   return quickSort(arr)
// }

export default (arr) => {
  let swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  // 找到基准值
  let findCenter = (arr, left, right) => {
    let flag = arr[left]
    let idx = left + 1
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i)
        idx++
      }
    }
    swap(arr, left, idx - 1)
    return idx
  }
  // 递归排序
  let sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right)
      // 对基准值左边进行递归排序
      sort(arr, left, center - 1)
      // 对基准值右边进行递归排序
      sort(arr, center, right)
    }
  }
  sort(arr, 0, arr.length - 1)
  return arr
}