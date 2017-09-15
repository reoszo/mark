var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

问题1 使用for循环、while循环和递归写出3个函数来计算给定数列的总和。
var total = 0;
for(var i = 0; i < arr.length; i++){
  total += arr[i];
}

var total = 0;
while(i < arr.length) {
  total += arr[i];
}

function total(index) {
  if(index < 0) {
    return 0;
  }
  if(index >= arr.length) {
    return total(arr.length - 1)
  }
  if(index === 0) {
    return arr[0];
  }
  return arr[index] + total(index - 1);
}

问题2 编写一个交错合并列表元素的函数。例如：给定的两个列表为[a，B，C]和[1，2，3]，函数返回[a，1，B，2，C，3]。

问题3 编写一个计算前100位斐波那契数的函数。根据定义，斐波那契序列的前两位数字是0和1，随后的每个数字是前两个数字的和。例如，前10位斐波那契数为：0，1，1，2，3，5，8，13，21，34。

问题4 编写一个能将给定非负整数列表中的数字排列成最大数字的函数。例如，给定[50，2，1,9]，最大数字为95021。

问题5 编写一个在1，2，…，9（顺序不能变）数字之间插入+或-或什么都不插入，使得计算结果总是100的程序，并输出所有的可能性。例如：1 + 2 + 34 – 5 + 67 – 8 + 9 = 100。
穷举
  递归
  循环
function go(expr, index){
  if(index === arr.length) {
    const ret = eval(expr);
    if(ret === 100){
      console.log(expr);
    }
  }else{
    const value = arr[index];
    go(expr + '' + value, index + 1);
    go(expr + '+' + value, index + 1);
    go(expr + '-' + value, index + 1);
  }
}
