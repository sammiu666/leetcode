// Leetcode 17

export default (str) => {
  // 对输入做处理，如果小于1返回空（LeetCode测试用例）
  if (str.length < 1) return []
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 如果只给了一个按键，直接把按键内容取出来并按单个字符分组就可以了（LeetCode测试用例）
  if (str.length < 2) return map[str].split('')
  // 把输入字符串按单字符分隔变成数组，234 => [2,3,4]
  let num = str.split('')
  let code = []
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  // 保存键盘映射后的字母内容，如 23=>['abc','def']
  let comb = (arr) => {
    let tmp = []
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  // 调用
  return comb(code)
}