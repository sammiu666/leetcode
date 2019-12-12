// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

export default (str) => {
  // 1. 字符串按空格进行分隔，保存数组，数组的先后顺序就是单词的顺序
  // 2. 对数组进行遍历，然后每个元素进行反转
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}