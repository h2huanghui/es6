let state = 1

function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭')
    if (state === 1) {
        resolve('洗菜做饭--完成')
    } else {
        resolve('洗菜做饭--出错')
    }
}


function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭')
    if (state === 1) {
        resolve('坐下来吃饭--完成')
    } else {
        resolve('坐下来吃饭--出错')
    }
}

function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗碗')
    if (state === 1) {
        resolve('收拾桌子洗碗--完成')
    } else {
        resolve('收拾桌子洗碗--出错')
    }
}

new Promise(step1).then(val => {
    console.log(val)
    return new Promise(step2)
}).then(val => {
    console.log(val)
    return new Promise(step3)
}).then(val => {
    console.log(val)
})

async function basicDemo() {
    let result = await Math.random()
    console.log(result)
}

basicDemo()

//async表示函数异步,定义的函数会返回一个promise对象
//可以使用then方法添加回调函数
async function demo01() {
    return 123
}
demo01().then(val => {
    console.log(val)
    //如果async定义的函数有返回值,return 123 <=> Promise.resolve(123)
    //没有声明式的return则相当于执行了Promise.resolve()
})

//await(async wait) await必须出现在async函数内部,不能单独使用
function notAsyncFunc() {
    await Math.random() //await is only valid in async function
}
notAsyncFunc() 

//await后面可以跟任何的JS表达式。虽然await可以等很多类型的东西,但是它最主要的意图是用来等待Promise对象的状态被resolved。如果await的是promise对象,会造成异步函数停止执行并且等待promise的解决。如果等的是正常的表达式则立即执行

function sleep(second) {
    return new Promise((resolve, reject) => {
        //使用setTimeout模拟异步请求
        setTimeout(() => {
            resolve('enough sleep~')
        },second)
    })
}

function normalFunc() {
    console.log('normalFunc')
}

async function awaitDemo() {
    await normalFunc() //await是一个正常的表达式,立即执行
    console.log('something,~~~')
    let result = await sleep(2000) //await是一个promise对象,异步函数awaitDemo停止执行并且等待promise的解决
    console.log(result) //两秒之后被打印
}

awaitDemo()


function sleep(second,param) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(param)
        },second)
    })
} 

async function test() {
    let result1 = await (2000, 'req01')
    let result2 = await (1000, 'req02' + result1) //第二个请求依赖第一个请求的结果
    let result3 = await (500, 'req03' + result2) //第三个请求依赖第二个请求的结果
    console.log(`${result3} 
    ${result2}
    ${result1}
    `) 
}

test()

//错误处理 try-catch
function sleep(second) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('success')
            // reject('want to sleep')
        },second)
    })
}

async function errorDemo() {
    try {
        let result = await sleep(1000)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}
errorDemo()

//并行处理(三个异步请求需要发送,相互没有关联,只是需要当请求都结束后,将界面的loading清除掉即可)
function sleep(second) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('request done' + Math.random())
        },second)
    })
}

// async function bugDemo() {
//     await sleep(1000)
//     await sleep(1000)
//     await sleep(1000)
//     console.log('clear the loading') //请求是一个结束后再发另一个的
// }
// bugDemo()

async function correctDemo() {
    let p1 = sleep(1000)
    let p2 = sleep(1000)
    let p3 = sleep(1000)
    await Promise.all([p1, p2, p3]) //await并不能取代promise
    console.log('clear')
}

correctDemo()

//await必须在async函数的上下文中
async function forDemo() {
    let arr = [1, 2, 3, 4, 5]
    for (let i = 0; i < arr.length; i++) {
        let result = await arr[i]
        console.log(result)
    }
}

forDemo()

async function forBugDemo() {
    let arr = [1, 2, 3, 4, 5]
    arr.forEach(item => {
        console.log(item)
        await item // await is only valid in async function
    })
}

forBugDemo()



