'use strict';

var state = 1;

function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state === 1) {
        resolve('洗菜做饭--完成');
    } else {
        resolve('洗菜做饭--出错');
    }
}

function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭');
    if (state === 1) {
        resolve('坐下来吃饭--完成');
    } else {
        resolve('坐下来吃饭--出错');
    }
}

function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗碗');
    if (state === 1) {
        resolve('收拾桌子洗碗--完成');
    } else {
        resolve('收拾桌子洗碗--出错');
    }
}

new Promise(step1).then(function (val) {
    console.log(val);
    return new Promise(step2);
}).then(function (val) {
    console.log(val);
    return new Promise(step3);
}).then(function (val) {
    console.log(val);
});
