// es5中如何定义构造函数 创建实例
// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.getPostion = function(){
//     return '(' + this.x + ',' + this.y + ')'

// }
// var p1 = new Point(2, 3)
// console.log(p1.getPostion())
// var p2 = new Point(4,5)
// console.log(p2.getPostion())


// es6中有了类的概念
// 每一个类都有construct
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // 创建结果是return的东西 而不是类了
        // return { a: 'a'}
    }
    getPostion() {
        return `(${this.x}, ${this.y})`
    }
}
// const p1 = new Point(1, 2)
// console.log(p1.getPostion())
// // x是固有属性 true
// console.log(p1.hasOwnProperty('x'))
// // getPosition是继承自原型对象的方法 false
// console.log(p1.hasOwnProperty('getPostion'))
// // true
// console.log(p1.__proto__.hasOwnProperty('getPostion'))

//取值函数 读值时调用 存值函数 存值时调用
var info = {
    _age: 18,
    set age(newValue) {
        //新值就是newValue
        if(newValue > 18){
            console.log("老")
        }else {
            console.log("年轻")
        }
    },
    get age() {
        console.log("年龄")
        return this._age
    }
}
// console.log(info.age)
// info.age = 17
// info.age = 19

class Info {
    constructor (age) {
        this._age = age
    }
    set age (newAge) {
        console.log('new age is:' + newAge)
        this._age = newAge
    }
    get age () {
        return this._age
    }
}

const info2 = new Info(18)
info2.age = 17
console.log(info2._age)

// 函数两种定义形式
// const func = function () {}
// function func () {}

// class两种定义形式
// class infoss {
//     constructor(){}
// }

// const info4 = class c{  // c可直接省略
//     constructor(){}
// }
// const testinfo = new Info4

class Point2 {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getPostion() {
        return `(${this.x}, ${this.y})`
    }
    // 静态方法继承不了 不能直接调用
    static getClassName () {
        return Point2.name
    }
}

const p = new Point2(1, 2)
console.log(p.getPostion())
// 用类名调用静态方法
console.log(Point2.getClassName())

// 下例只能在console中实现
// class Point3 {
//     z = 0
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     getPostion() {
//         return `(${this.x}, ${this.y})`
//     }
//     // 静态方法继承不了 不能直接调用
//     static getClassName () {
//         return Point3.name
//     }
// }

// es6类只有静态方法 没有静态属性
// 但也可以设置静态属性 如下
class Point4 {
    constructor(){
        this.x = 0
    }
}
Point4.y = 2
const p2 = new Point4()
// 静态属性 不能直接访问 undefined
console.log(p2.y)
// 直接用类名访问
console.log(Point4.y)

// 私有方法 只能在内部使用 不暴露给使用者
class Point5 {
    func1() {

    }
    // 以下划线命名通常是约定俗成的私有方法
    _func2() {

    }
}
// 方式2 将私有方法移出
const _func2 = () =>{}
class Point6 {
    func1() {
        _func2.call(this)
    }
}
const p3 = new Point6()
//无法访问
// p3._func2()

//方式3 利用symbol 
// 在模块内创建symbol作为方法名 这样在模块外就无法访问到方法了
// 因为在模块外无法获取到这个文件模块里的值

// a.js
// const func3 = Symbol('func3')
// export default class Point7 {
//     static [func3] (){

//     }
// }
// b.js
import Point7 from './a.js'
const p4 = new Point7()
console.log(p4)

//方式四 利用# (还是提案 无法使用)
// class Point {
//     #ownProp = 12
// }

// new.target 
// 用于构造函数中 返回new命令作用于的构造函数

function Point8() {
    console.log(new.target) // 返回的是Point8的构造函数
}
const p5 = new Point8() 
// 返回下面这些 
// ƒ Point8() {
//     console.log(new.target)
// }
const p6 = Point8()  // 没有new 没构造函数 只是普通地调用了一下函数 返回undefined

class Point9 {
    constructor() {
        console.log(new.target)
    }
}
const p7 = new Point9()
// 返回下面这些 
// class Point9 {
//     constructor() {
//         console.log(new.target)
//     }
// }

class Parent {
    constructor () {
        console.log(new.target)
    }
}
class Child extends Parent {
    constructor() {
        super()
    }
}
const c = new Child()
// 打印的是子类的构造函数
// class Child extends Parent {
//     constructor() {
//         super()
//     }
// }

//只能通过子类创建实例
class Parent2 {
    constructor () {
        if(new.target === Parent2)
        throw new Error('不能实例化')
    }
}
class Child2 extends Parent2 {
    constructor() {
        super()
    }
}
// 失败
const c2 = new Parent2()
// 成功
const c3 = new Child2()