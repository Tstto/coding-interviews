//高频时间触发，但n秒内只会执行一次，所以节流会稀释函数的执行频率。
//节流常应用于鼠标不断点击触发、监听滚动事件。
function throttle(fn, delay) {
    let flag = true;
    return (...args) => {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, args);
            flag = true;
        }, delay)
    }
}

//测试
window.addEventListener('scroll', throttle(() => {
    console.log("技能CD冷却中...")
}, 3000))