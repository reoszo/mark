# 面试问题合集

## 一、基础知识

1. 描述标准盒模型构成，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局。
   
   **答题要点**：content+padding+margin+border；box-sizing；提到标准盒模型和低版本IE的盒模型区别，加分；提到低版本IE盒模型和box-sizing:border-box相同，加分。

2. CSS3新增伪类。

   **答题要点**：新增伪类：:nth-child, :nth-last-child, :first-child, :last-child, *-of-type, :empty, :enabled, :disabled, :checked, :target, :checked, :not, ::selection，最好可以描述作用；:before和:after伪类是CSS2.1的，但如果提到，可以问除了清除浮动之外，还会用这两个伪类做些什么。

3. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度，用CSS解决。

   **答题要点**：

   方法1：使用flex布局，flex方向设为纵向，上面div flex:none，下面div flex:1；
   
   方法2：display:table，两个div设为table-row。

4. style标签写在body后与body前有什么区别？

   **答题要点**：写在body后会FOUC（Flash of Unstyled Content，以无样式显示页面内容的瞬间闪烁,这种现象称之为文档样式短暂失效）。

5. `<script>`、`<script async>` 和 `<script defer>` 的区别。
   
   **答题要点**：

   `<script>`：立即加载并执行，阻塞渲染；
   
   `<script async>`：异步加载，与渲染同时执行；

   `<script defer>`：异步加载，渲染完毕后执行。

6. js基本数据类型。

   **答题要点**：

   string，number，boolean，object，undefined，null

   **追问**：undefined和null的区别。

   **答题要点**：undefined：存在，但未被定义或赋值；null：不存在。

   **追问**：如果检测一个值是undefined还是null？

   **答题要点**：用 `===` 。

7. js中的this代表什么。

   **答题要点**：this是js的一个关键字，值会发生改变；总原则：this指的是调用函数的那个对象。

8. 一段代码：

   ```
   function foo () {}();
   ```

   **问题**：这段代码是不是IIFE (立即调用的函数表达式)？

   **答案**：不是。

   **追问**：它的执行结果是什么？

   **答案**：报错。

   **追问**：为什么报错？

   **答案**：它等价于下面这段代码：

   ```
   function foo (){}
   ();
   ```

   foo 被声明，但未被调用，执行 `();` 会报错。

   **追问**：想把它改为IIFE，应该怎么改？

   **答案**：

   ```
   (function () {})
   ```

   或

   ```
   (function () {})()
   ```

   或

   ```
   var foo = function(){}()
   ```

9. .call 和 .apply 的区别。

   **答题要点**：
   
   call和apply都是更改目标对象的this，并传入参数。区别在于传入参数，call(被替换的对象,被替换对象的参数1,被替换对象的参数2)，apply(被替换的对象,[被替换的对象的参数1,被替换对象的参数2])row。

   apply的好处在于被替换对象的参数不固定时，可将arguments作为第二个参数传入。

10. Function.prototype.bind

    **答题要点**：

    bind 的参数将作为 function 的 this。
    IE8以下不支持。

11. 为什么扩展js内置对象不是好的做法？

    **答题要点**：『易冲突，难维护』。

12. `function foo() {}` 与 `var foo = function() {}` 的区别。

    **答题要点**：

    `function foo() {}`：创建一个名为foo的函数，在此之前foo()也可正常执行，因为函数会被提升；

    `var foo = function() {}`：声明一个变量foo，将一个匿名函数赋值给foo，foo先被声明但未被赋值，只有foo被调用时才会被初始化。

13. 怎样添加、移除、移动、复制、创建和查找DOM节点。

    **答题要点**：

    创建：document.createElement()
    
    添加：element.appendChild()
    
    移除：element.removeChild(node)
    
    移动：removeChild + appendChild
    
    复制：element.cloneNode()
    
    查找：document.getElementById()、document.getElementByTagName()、document.querySelector()、document.querySelectorAll()

14. 说出运行结果：

    ```
    var foo = 10 + '20';
    console.log(foo);
    ```

    **答案**：'1020'

15. 说出运行结果：

    ```
    'qweasdzxc'.split('').reverse().join('');
    ```

    **答案**：'cxzdsaewq'，过程：第一步，转为[]；第二步，翻转[]；第三步，转回String。

16. 下面两个 alert 的结果是什么：

    ```
    var foo = 'Hello';
    (function () {
      var bar = ' World';
      alert(foo + bar);
    })();
    alert(foo + bar);
    ```

    **答案**：匿名函数内的alert出’Hello World’，外部的alert抛出错误，因为bar是匿名函数内的局部变量。

17. foo.x的值是什么：

    ```
    var foo = {n: 1};
    var bar = foo;
    foo.x = foo = {n: 2};
    ```

    **答案**：undefined，因为foo.x = foo = {n:2}等价于foo.x = ( foo = {n:2} )，这时foo.x指向计算结果foo，这个foo没有x这个属性，因此foo.x = undefined

18. 下面代码的输出是什么：

    ```
    console.log('one');
    setTimeout(function() {
      console.log('two');
    }, 0);
    console.log('three');
    ```

    **答案**：

    one
    
    tree
    
    two

    因为只要出现setTimeout，就不是立即执行，即使延迟时间为0。

## 二、开放问题

1. 谈谈对目前流行的前端框架的了解，以及他们之间的区别。

2. Vue/React/Angular 和 jQuery，有什么不同。

3. 谈谈对前端开发技术趋势的了解，以及对于未来的展望或预测。

4. 作为前端开发人员，是否应该了解一些其他编程语言的知识？除了nodejs。

5. 对 React Native 和 Weex 的看法。

6. 谈谈对前端工具链的了解，以及以往的使用经验。

7. 谈谈以往做过的项目，踩过什么坑，如何解决的。

8. 是否了解过或使用过Vue，如果是，谈谈对Vue的看法，以及Vue1.x和2.x的区别。如果以往有Vue+Vuex的开发经验，加分。

9. 是否了解或应用过 ES6，如果是，谈谈新增的特性，以及对 ES6 的看法，包括应用上需要注意的地方。

## 三、实操（任选一题作答）

### 请面试者选择题目后，预估自己的开发时间，并在预估的开发时间内完成。面试者可以使用搜索引擎、框架、插件等任何方式完成任务。建议在类似CodePen的平台上完成答题。

1. 实现一个表单，功能需求如下：

   * 表单字段：姓名、性别、出生日期、住址、手机号码、IP地址、个人简介；

   * 字段验证规则：

     - 姓名：输入框，2-4个汉字，如果出现『.』『·』，则不受此限制；
    
     - 性别：单选；

     - 出生日期：输入框，但不可直接输入，必须通过浮层的方式选择年月日，年龄必须在18-65岁之间；

     - 住址：包含省、市、区、详细地址4项，其中省市区为三级联动菜单，详细地址为输入框；

     - 手机号码：必须为中国大陆地区的手机号码；

     - IP地址：必须为ipv4格式；

     - 个人简介：字数在140个汉字以内，含140个汉字；

     - 以上字段，姓名、性别、出生日期、手机号码为必填项，其他为选填；

   * 防崩溃功能：表单提交之前，如果浏览器崩溃或误操作退出，下次进入时，仍可保留大部分上次填写的内容；

   * 表单提交：需要提交到一个模拟接口，接口返回数据格式自定，此接口将返回错误信息：『服务器正忙，请稍后再试』，并在页面上弹出错误提示；

2. 实现一个人员信息列表，功能需求如下：

   * 数据来源：一个模拟接口，通过 AJAX 的 POST 请求来获取数据，接口返回数据格式自定，内容见后面的表格内容，接口入参为：

     ```
     {
       // 页码
       page: 1,
       // 每页条数
       prePage: 20
     }
     ```

   * 表格内容：姓名、性别、出生日期、住址、手机号码、IP地址、个人简介；

   * 分页功能：包括首页、上一页、下一页、末页、页码；

   * 容错功能：当返回数据为空、接口报错、数据不足以分页等情况发生时，界面和功能应有退化逻辑；

3. 实现一个搜索框，功能需求如下：

   * Suggest功能：接口入参和返回格式可自定，数据自行模拟；

   * 搜索结果：在搜索结果中高亮搜索的关键词；

   * 搜索结果分页： 接口入参和返回格式可自定，数据自行模拟；
