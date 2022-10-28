function debounce(fn,wait){
    let timer;
    return function(){
        if(time){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            console.log("回城启动中...")
        },wait)
    }
}

myDebounce(debounce,500)