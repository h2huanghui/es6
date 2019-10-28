/* 1、var let const  */
// var a = "2";
// console.log(a)
// window.onload = function () {
//     console.log(a)
// }

// {
//     let a = "3"
// }
// console.log(a)
// for (let i = 0;i<10; i++) {
//     console.log('循环体内'+ i)
// }
// console.log('循环体外' + i)

// const a = 'hh'
// // var a = '1' 不可以对常量重复定义
// console.log(a)

/* 2、变量解构和赋值 */

//数组解构
// let [a, b, c] = [1, 2, 3]
// console.log(a)
// console.log(b)
// console.log(c)

// //解构有默认值
// let [foo = true] = []
// console.log(foo)

// //注意值为undefined和null的情况;undefined(就还是用默认值) null(有值但是为空,覆盖默认值)
// let [aa, bb = 'hh'] = ['huangui',null]
// console.log(aa)
// console.log(bb)

// let { a1, b1, c1 } = { a1: 'hh', b1: 'happy',d:'come on' }
// console.log(a1, b1, c1) //c1 undefined

// let a2
// ({ a2 } = { a2: 'huanghuih2' }) //如果先声明再解构,必须加()
// console.log(a2)

/* 3.扩展运算符 */
//函数参数未知
// function hh(...args) {
//     console.log(args[0])
//     console.log(args[1])
//     console.log(args[2])
//     console.log(args[3])
// }
// hh(1,2,3)

// var arr1 = ['1', '2', '3']
// var arr2 = [...arr1]  
// console.log(arr2)
// arr2.push('4')
// console.log(arr2)
// console.log(arr1)

//rest
// function hh2(first,...arg) {
//     console.log(arg.length)
//     for (let val of arg) { //for of循环
//         console.log(val)
//     }
// }

// hh2(0,1,2,3,4)

/* 4.字符串模板 */
// let hh = 'huanghui'
// let blog = `lvhan${hh}love`
// // document.write(blog.indexOf(hh) !== -1)
// // let a = 1
// // let b = 2
// // let result = `${a + b}` //运算
// // document.write(result)
// //字符串查找
// document.write(blog.includes(hh))
// document.write(blog.startsWith(hh)) //以***开头
// document.write(blog.endsWith('love')) //以***结尾
// document.write('hh|'.repeat(3)) //重复3次,字符串复制

/* 5.数字操作 */
//二进制声明 Binary
// let binary = 0B010101
// console.log(binary)
// //八进制声明 Octal
// let octal = 0o666
// console.log(octal)

// let a = 11
// console.log(Number.isFinite(a)) //判断是否为数字
// console.log(Number.isFinite('huanghui'))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(undefined))
// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN('2'))
// //Numer.isInteger
// let a1 = 11.1
// console.log('11.1是否整型',Number.isInteger(a1))
// console.log(Number.parseInt(a1)) //转换为整型
// console.log(Number.parseFloat(a1))

// //整型范围
// let h1 = Math.pow(2, 53) - 1
// console.log(h1)
// console.log(Number.MAX_SAFE_INTEGER) //最大安全整数
// console.log(Number.MIN_SAFE_INTEGER) //最小安全整数
// console.log(Number.isSafeInteger(h1))

/* 6.json数组格式 */
// let json = {
//     '0': 'hh',
//     '1': 'huanghui',
//     '2': 'come on',
//     length: 3
// }
// let arr = Array.from(json) //转化为数组
// console.log(arr) //["hh", "huanghui", "come on"]

// let arr1 = Array.of(3, 4, 5, 6)
// console.log(arr1)

// let arr2 = '[1,2,3,4]'
// let arr3 = eval(arr2) //性能比较低
// console.log(arr3)

// //find 实例方法
// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr4.find(function (value,index,arr4) {
//   return value > 5 //找到就返回符合条件的值,不会继续查找;没有符合条件的值返回undefined
// }))

// //fill 实例方法
// let arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr5.fill('hh', 2, 5) //第二位到第五位进行填充
// console.log(arr5)

// //数组的遍历 for...of
// let arr6 = ['a', 'b', 'c']
// for (let item of arr6) {
//     console.log(item) //数组的每一个元素
// }
// for (let index of arr6.keys()) {
//     console.log(index)  //数组的索引
// }

// //entries实例方式生成的是Iterator形式的数组(好处:需要时用next()手动跳转到下一个值)
// for (let [index, val] of arr6.entries()) {
//     console.log(index + ':' + val) //索引和值
// }

// let list = arr6.entries()
// console.log(list)
// console.log(list.next().value) //[0,"a"]
// console.log(list.next().value) //[1,"b"]
// console.log(list.next().value) //[2,"c"]


/* 7.箭头函数 */
// function add(a, b=1) {
//     // 'use strict' //写在函数体中,针对函数使用。如果使用默认值,再使用严格模式,就会有冲突
//     if (a === 0) {
//         throw new Error('error') //ES6中使用throw new Error,就可以抛出错误
//     }
//     return a + b
// }
// console.log(add.length) //add.length用来获取函数必须参数的个数

// var add = (a, b = 1) => a + b
// console.log(add(1))
//方法体内两句话,需要使用{}
var add = (a, b = 1) => {
    console.log('22')
    return a + b
}
console.log(add(3))











