//不使用loop循环，创建一个长度为100的数组，
//并且每个元素的值等于它的下标。
function createArray(len) {
  let array = new Array(len);
  let ret;
  ret = array.join(',').split(',').map((item, index) => {
    return index
  })
  console.log(ret)
}

