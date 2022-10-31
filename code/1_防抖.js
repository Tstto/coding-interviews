//触发高频时间后n秒内函数只会执行一次，如果n秒内高频时间内再次触发，则重新计算时间。
//防抖常用于与用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只触发一次。
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        } else {
            setTimeout(() => {
                fn.apply(this, args);
            }, delay)
        }
    }
}

//测试
function test() {
    console.log("回城中...")
}

const debounceTest = debounce(test, 3000)

window.addEventListener('scroll', debounceTest)