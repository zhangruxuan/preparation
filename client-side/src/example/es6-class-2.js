// 继承 
// es5中继承要修改原型链
// 函数的继承
function Food() {
    this.type = 'food'
}
Food.prototype.getType = function(){
    return this.type
}
function Vegetables(name) {
    this.name = name
}
// 让Vegetables继承Food的构造函数 
Vegetables.prototype = new Food()
const tamato = new Vegetables('tamato')
console.log(tamato.getType())

// es6中类的继承
class Parent {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    static getName(){
        return this.name
    }
}
class Child extends Parent {
    constructor(name, age) {
        // 只有调用了super方法之后 才能在子类中用this
        super(name)
        this.age = age
    }
}
const c = new Child('mitty', 18)
console.log(c)
console.log(c.getName())
console.log(c instanceof Child) //true
console.log(c instanceof Parent)//true
console.log(Child.getName()) //Child
//获取构造函数的原型对象
console.log(Object.getPrototypeOf(Child) === Parent)


//super 既可以当做函数使用 也可以当做对象使用
// 函数 代表父类的construct 子类的construct必须调用也仅能在这里面调用 
//      super的this指向子类
//对象  普通方法中 指向父类的原型对象 静态方法中 指向父类

class Parent2 {
    constructor() {
        this.type = 'parent'
    }
    getName() {
        return this.type
    }
}
// 类方法 不需要实例 这个地方把parent2视作变量 getType不在Parent2的原型上
Parent2.getType = () => {
    return 'is parent'
}
const c4 = new Parent2()
// 普通方法 需要实例
Parent2.prototype.getName = () =>{
    console.log("parent father")
    return 'haha'
}
class Child2 extends Parent2 {
    constructor(){
        super()
        console.log('construct:' + super.getName())
    }
    getParentName() {
        console.log('getParentName:' + super.getName())
    }
    static getParentType() {
        console.log('getParentType:' + super.getType())
    }
}
const c2 = new Child2()
c2.getParentName()
//静态方法 得用类名调用 不能用实例名
Child2.getParentType()

class Parent3 {
    constructor() {
        this.name = 'parent'
    }
    point() {
        console.log(this.name)
    }
}
class Child3 extends Parent3 {
    constructor() {
        super()
        this.name = 'child'
    }
    ChildPrint() {
        //super的this指向子类
        super.point()
    }
}
const c3 = new Child3()
c3.ChildPrint()

// prototype 方法固有
// __proto__ 对象固有 指向构造函数的prototype属性
var objs = new Object()
console.log(objs.__proto__ === Object.prototype) //true

// 子类的__proto__指向父类本身
// 子类的prototype属性的__protp__指向父类的prototyp属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// es5原生构造函数 不能继承
// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object

// es6原生构造函数可以继承
class CustomArray extends Array {
    constructor(...args) {
        super(...args)
    }
}
const arr = new CustomArray(3,3,4)
console.log(arr)
//数组全部填充
arr.fill('+')
console.log(arr)
arr.fill('-')
console.log(arr)
//数组拼接成字符串
arr.join('_')

//继承
// es5：构造函数先创建子构造函数的实例this，然后将父构造函数的属性方法添加到这个this上
// es6：先从父类取到实例对象this，在调用super函数后，再将子类的属性方法添加到这个this上


