var test = (function (a) {
  this.a = a;
  return function (b) {
    return this.a + b;
  }
}(function (a, b) {
  return a;
}(1, 2)));

console.log(test(4)); //输出什么？？？？ 5
// b = 4 
// this.a + 4; ==
// a = 1
// -> 5