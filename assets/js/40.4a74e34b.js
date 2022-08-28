(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{355:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ul",[a("li",[s._v("npm install typescript@2.9.2 -g   ————安装ts")]),s._v(" "),a("li",[s._v("npm install ts-node@7.0.0 -g      ————让nodejs支持ts")])]),s._v(" "),a("h1",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[s._v("#")]),s._v(" 类型")]),s._v(" "),a("ul",[a("li",[s._v("参数类型\n"),a("ul",[a("li",[s._v("在参数名称后面后面使用冒号来指定参数的类型")])])]),s._v(" "),a("li",[s._v("默认参数\n"),a("ul",[a("li",[s._v("在参数声明后面用等号来指定参数的默认值")])])]),s._v(" "),a("li",[s._v("可选参数\n"),a("ul",[a("li",[s._v("在方法的参数声明后面用问号来标明此参数为可选参数")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('参数类型\nvar a:any //任何类型\nvar b:number //数字类型\nvar c:boolean // 布尔类型\nfunction test():void{} //不能用任何返回值\n\n在哪声明类型\nvar a:string //在变量中声明类型\nfunction a():string //在方法（函数）中声明返回值类型\nfunction a(name:string) 在参数中声明类型 调用的时候用a("字符串调用")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("默认参数\nfunction test(a:string, b, c:string=\"asd\") { //默认参数一定要放在最后面\n    console.log(a)\n    console.log(b)\n    console.log(c)\n}\ntest('aaa', 'bbb', 'ccc')\ntest('aaa', 'bbb')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("可选参数\nfunction test(a:string, b?:string, c:string=\"asd\") { //可选参数一定要放在最后面\n    console.log(a)\n    console.log(b)\n    console.log(c)\n}\ntest('aaa')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"推断机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推断机制"}},[s._v("#")]),s._v(" 推断机制")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var a=123 // 第一次推断a为数字类型\na='abc' //错误，\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h1",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[s._v("#")]),s._v(" 类型转换")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//数值转字符串\nlet num: number = 123123\nlet str: string = num.toString()\nconsole.log(typeof str, str)\n//字符串转数值\nlet str2: string = '123321'\nlet num2: number = parseInt(str2)\nconsole.log(typeof num2, num2)\n// 对象转字符串\nlet obj:object={'name':'jey','age':'16','id':13212}\nlet str3:string=JSON.stringify(obj)\nconsole.log(typeof str,str3)\n// 字符串转对象\nvar obj2:object=JSON.parse(str3)\nconsole.log(typeof obj2,obj2)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h1",{attrs:{id:"函数新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数新特性"}},[s._v("#")]),s._v(" 函数新特性")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"rest-and-spread-操作符-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-and-spread-操作符-args"}},[s._v("#")]),s._v(" Rest and Spread 操作符 (...args)")]),s._v(" "),a("ul",[a("li",[s._v("用来声明任意数量的方法参数")]),s._v(" "),a("li",[s._v("主要用于：把任意长度的数组转化成一个固定数量参数方法的调用")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function test(...arg) {\n    console.log(arg)\n}\ntest(1,2,3)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"generator-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generator-函数"}},[s._v("#")]),s._v(" generator 函数")]),s._v(" "),a("ul",[a("li",[s._v("控制函数的执行过程，手工暂停和恢复代码执行")]),s._v(" "),a("li",[s._v("使用.next()方法调用执行下一个yield")]),s._v(" "),a("li",[s._v("每个.next()将执行函数内部yield断点")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function* doSomething() {\n    console.log('start')\n    yield\n    console.log('finish')\n}\nvar func1 = doSomething()\n\ndocument.querySelector('html').onclick = function () {\n    func1.next()\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"destructuring-析构表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destructuring-析构表达式"}},[s._v("#")]),s._v(" destructuring 析构表达式")]),s._v(" "),a("ul",[a("li",[s._v("通过表达式将对象或数组拆解成任意数量的变量")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("把对象里的值才出来放到本地变量里\nfunction test(){\n    return {\n        a: 111,\n        b: 'abc',\n        c: {\n            c1: 'c1c1c1',\n            c2: 'c2c2c2'\n        }\n    }\n}\nvar { a, b, c: { c2 } } = test()\nconsole.log(a,b,c2)\n\n把数组里的值拆分成变量放到本地\nvar arr = [1, 2, 3, 4, 5, 6, 7]\nvar [num1, ,num2, ...other] = arr\nconsole.log(num1,num2,other)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h1",{attrs:{id:"表达式和循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表达式和循环"}},[s._v("#")]),s._v(" 表达式和循环")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[s._v("#")]),s._v(" 箭头函数")]),s._v(" "),a("ul",[a("li",[s._v("用来声明匿名函数，消除传统匿名函数的this指针问题")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var sum = (arg1, arg2) => arg1 + arg2 //方法里面只有一行是不用写大括号和return关键字\nvar sum= arg1 => console.log(arg1) //只有一个参数的话不需要括号\nvar sum= () => console.log('没有尝试不') //不需要参数用（）表示\n\nvar arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nconsole.log(arr.filter(value=>value%2==0)) //最常见的用法\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"for-of"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-of"}},[s._v("#")]),s._v(" for of")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,'test']\narr.attribute = '我是属性'\nfor (var n of arr) {\n    if (n>3) break //与for in区别在于循环可以中断\n    console.log(n)\n}\n\n\n还可以用在字符串上\nfor (n of '你好呀，jey') {\n    console.log(n)\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h1",{attrs:{id:"面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[s._v("#")]),s._v(" 面向对象")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"控制符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制符"}},[s._v("#")]),s._v(" 控制符")]),s._v(" "),a("ul",[a("li",[s._v("public 公有（默认）")]),s._v(" "),a("li",[s._v("private 私有，只能在类的内部访问")]),s._v(" "),a("li",[s._v("protectes 受保护，可以在类的内部和子类访问")])])]),s._v(" "),a("li",[a("h3",{attrs:{id:"接口-interface-低配版的类-这是做一个约束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口-interface-低配版的类-这是做一个约束"}},[s._v("#")]),s._v(" 接口————interface  //低配版的类，这是做一个约束")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"声明类的静态属性-static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明类的静态属性-static"}},[s._v("#")]),s._v(" 声明类的静态属性————static")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[s._v("#")]),s._v(" 类")]),s._v(" "),a("ul",[a("li",[s._v("把类当做接口使用，类是高配版的接口")]),s._v(" "),a("li")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"constructor方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor方法"}},[s._v("#")]),s._v(" constructor方法")]),s._v(" "),a("ul",[a("li",[s._v("只有new实例化的时候类里面的constructor方法才会被调用，没实例化一次则调用一次")]),s._v(" "),a("li",[s._v("子类构造函数必须调用父类构造函数，用super来调用")]),s._v(" "),a("li",[s._v("可以在参数加public声明属性，用this调用")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class person{\n    constructor(public name) { } //可以这样写声明一个name属性\n    say() { console.log(this.name) }\n}\nvar a=new person('jey')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"继承extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承extends"}},[s._v("#")]),s._v(" 继承extends")]),s._v(" "),a("ul",[a("li",[s._v("要求：继承一个类的时候必须在constructor方法里面加super()")]),s._v(" "),a("li")])])]),s._v(" "),a("h1",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("p",[s._v("export 暴露属性，方法，类\nimport 引入属性，方法，类")])])}),[],!1,null,null,null);a.default=e.exports}}]);