// 这只是针对数字的打乱的
// 这没啥意义的
function makeArrayRandom(array = []) {
  // 将原来的数组打乱
  // 利用sort方法
  let retArr;
  retArr = array.sort((a, b) => {
    return Math.random() - 0.5
  })
  console.log(retArr)
}
let arr = [1,2,3,4,5,6,7,8,9,10];
makeArrayRandom(arr)