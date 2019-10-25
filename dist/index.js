"use strict";

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

/* 扩展运算符 */
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

function hh2(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    console.log(arg.length);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

hh2(0, 1, 2, 3, 4);
