// O(n^2)
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('param typeError....')
    return
  }
  //原始的方法
  let retArr = [];
  // 外循环循环n次
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      retArr.push(arr[i])
    } else {
      // 内循环最坏的次数也是n
      let index = retArr.findIndex((item) => {
        return item === arr[i]
      })
      if (index === -1) {
        // 说明之前没有出现过这个数
        retArr.push(arr[i])
      }
      // 否则我什么都不做
    }
  }
  return retArr
}
// 方法2 
// indexOf
function uniqueUseIndexOf(arr) {
  // 思路：
  // indexOf 返回数组中该元素第一次出现的索引，如果这个元素的第一次出现的索引不等于它的下标
  // 说明他是重复元素，过滤掉的
  // let retArr = [];
  return arr.filter((item, index) => {
    return index === arr.indexOf(item)
  })
  // 复杂度没有变化的，但是代码只需要一行
  // 充分利用了系统的API带来的好处吧
}
// 还有一种思路就是相邻元素比较法

function uniqueUseSet(arr) {
  // 特别恐怖吧
  return [...new Set(arr)]
}
const arr = [1, 1, 2, 2, 2, 3, 4, 5, 55, 5, 6, 7, 7, 5, 8]
console.log(uniqueUseSet(arr))