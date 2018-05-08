// 有一个长度为100的数组，
//请以优雅的方式求出该数组的前10个元素之和
function subSum(arr, len) {
  let subArr = arr.slice(0, len);
  return subArr.reduce((a, b) => {
    return a + b
  })
}
// 好的，我的就是很优雅的
//let arr = new Array(20).fill(2)
//console.log(subSum(arr, 10)) 
