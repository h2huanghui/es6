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
let binary = 0B010101
console.log(binary)
//八进制声明 Octal
let octal = 0o666
console.log(octal)

let a = 11
console.log(Number.isFinite(a)) //判断是否为数字
console.log(Number.isFinite('huanghui'))
console.log(Number.isFinite(NaN))
console.log(Number.isFinite(undefined))
console.log(Number.isNaN(NaN))
console.log(Number.isNaN('2'))
//Numer.isInteger
let a1 = 11.1
console.log('11.1是否整型',Number.isInteger(a1))
console.log(Number.parseInt(a1)) //转换为整型
console.log(Number.parseFloat(a1))

//整型范围
let h1 = Math.pow(2, 53) - 1
console.log(h1)





