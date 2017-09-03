```
1. 请尽量多的写出你知道的 HTML DOM 方法
  查找,修改,访问,其他
  <= 5
  <= 10
  > 10
2. 请尽量多的写出你知道的 HTML DOM 属性
  节点,属性,样式,其他
  <= 3
  <= 6
  > 6
3. 请尽量多的写出你知道的 Array 方法
  增,删,改,查
  遍历
4. 写出你知道的绑定 DOM 事件方式
5. Object
  写出你知道的 Object 的方法和属性
  写出你知道的 Object 实例方法和属性
6. 请用尽可能多的方法判断字符串 a 是否以 b 字符开头
7. 实现 deepEqual 或 deepClone 方法（尽可能的考虑全面）
8. Promise
  请写出下面代码的运行结果
    Promise.resolve({
      a: 1
    }).then(funtion(res) {
      res.a.b = 2;
    }).then(function(res) {
      console.log(res);
    }).catch(function(res) {
      console.log(res);
    });
  请将 jquery 的 ajax 回调方式封装为 Promise 方式
    已提供 $.ajax({
      method: 'get',
      data: {
        id: 123
      },
      success: function(res) {
        // 成功
      },
      fail: function(e) {
        // 失败
      }
    });
    完成 $.ajax({
      method: 'get',
      data: {
        id: 123
      }
    }).then(function(res){
      // 成功
    }).catch(function(e)){
      // 失败
    }
9. 正则表达式（可以不用）
  给字符串类型增加 trim 方法
  完成 uniq 方法（相邻字符去重）
    例如：uniq('aabccccddde') === abcde
  完成 split 方法（数字千分位逗号标记）
    例如：split(10000000) === '10,000,000'
  编写一个验证 url 的正则 | 使用正则解析 url 的各个部分（http 或 https 协议）
    例如：http://www.bianlifeng.com/readme.html?id=9&tag=fe#footer
10. 实现一个你经常使用的排序算法
11. html css
  实现内层 div 垂直水平居中（可以改变 DOM 结构）
  <div class="outer">
    <div class="inner">
      内容
    </div>
  </div>
12. 从浏览器地址栏输入 https://www.bianlifeng.com/ 并回车
  请尽可能多的写出从回车到浏览器显示网页内容所经历的过程（每个过程使用一句话或者一个词描述）
13. react 组件生命周期
```