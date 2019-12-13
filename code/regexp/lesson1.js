// LeetCode 459

export default (str) => {
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}