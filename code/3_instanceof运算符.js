//instanceof运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
function myInstanceof(left,right){
    //基本数据类型返回false
    if(typeof left!=='object'||!left) return false;
    //获取对象的原型
    let proto=Object.getPrototypeOf(left);
    //获取构造函数的prototype对象
    let prototype=right.prototype;
    while(true){
        if(!proto) return false;
        if(proto===prototype) return true;
        //如果没有找到，就继续从原型上找，Object.getPrototypeOf方法用于获取指定对象的原型
        proto=Object.getPrototypeOf(proto);
    }
}

//测试1
function Foo(name) {
    this.name = name;
}
const f = new Foo('Tstto')
console.log(myInstanceof(f,Foo))

//测试2
console.log(myInstanceof([],Array))