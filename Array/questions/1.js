//.有一个长度未知的数组a，
//如果它的长度为0就把数字1添加到数组里面，
//否则按照先进先出的队列规则让第一个元素出队。
function func(arr) {
 arr.length === 0 ? arr.push(1) : arr.shift()
}