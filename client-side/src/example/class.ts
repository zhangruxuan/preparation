class Point {
    public x: number
    public y: number
    constructor(x: number, y: number){
        this.x = x
        this.y = y
    }
    public getPosition () {
        return `${this.x}, ${this.y}`
    }
}
const p = new Point(1,2)
console.log(p)
class Parent {
    public name: string
    constructor (name: string) {
        this.name = name
    }
}
class Child extends Parent {
    constructor(name: string) {
        super(name)
    }
}

// 修饰符
// public 默认 外部可以访问
// private 类外无法访问
class Parent2 {
    private age: number
    constructor(age: number){
        this.age = age
    }
}
const p2 = new Parent2(18)
// 会报错 不能访问
// console.log(p2.age)
// console.log(Parent2.age)
// super 只能访问公共和受保护的 下面也报错
// class Child2 extends Parent2 {
//     constructor(age: number){
//         super(age)
//         console.log(super.age)
//     }
// }

// protected 受保护
class Parent3 {
    protected name: string
    constructor (name: string) {
        this.name = name
    }
    // protected getAge(){
    //     return this.age
    // }
}
class Child3 extends Parent3 {
    constructor(name: string) {
        super(name)
        // protected 只能拿到方法不能拿到属性
        // console.log(super.age)
        // console.log(super.getAge)
    }
}

// readonly 将属性设置为只读 只能读不能修改
class UserInfo {
    public readonly name: string
    constructor(name: string){
        this.name = name
    }
}

// 参数属性 在constructor属性前面加 修饰词
class A {
    constructor(public name: string){}
}
const a1 = new A('mitty')
console.log(a1)

// 静态属性
class Parent4 {
    public static age: number = 18
    public static getAge() {
        return Parent4
    }
    constructor() {}
}
const p3 = new Parent4()
// 静态属性 用age拿不到
// console.log(p3.age)
// 只有类本身能够使用
console.log(Parent4.age)
class Parent5 {
    private static age: number = 18
    private static getAge() {
        return Parent4
    }
    constructor() {}
}
const p4 = new Parent5()
// 静态属性 私有 用age拿不到
// console.log(p3.age)
// 私有 拿不到
// console.log(Parent5.age)

class Info {
    public name: string
    public age?: number
    private _infoStr: string
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
    }
    get infoStr() {
        return `${this.name}:${this.age}`
    }
    set infoStr(value) {
        console.log(`setter: ${value}`)
        this._infoStr = value
    }
}

const info1 = new Info('mitty')
const info2 = new Info('mitty',18)
const info3 = new Info('mitty',18, 'woman')
console.log(info1)
// age: undefined
// name: "mitty"
// sex: undefined
console.log(info2)
// age: 18
// name: "mitty"
// sex: undefined
console.log(info3)
// age: 18
// name: "mitty"
// sex: "woman"

// 会调用set 的函数 同时给私有属性赋值
info3.infoStr = 'mitty: 18'

// 抽象类 通常被继承 而不直接创建实例
abstract class People {
    constructor(public name: string) {}
    // 抽象方法：函数名 函数参数 返回值类型
    abstract printName():void
}
// const p1 = new People() 不行
// 先用类继承并实现抽象成员
class Man extends People{
    constructor(name: string) {
        super(name)
        this.name = name
    }
    printName(): void {
        console.log(this.name)
    }
}
// 才能定义实例
const m = new Man('mitty')
m.printName()

abstract class People2 {
    abstract _name: string
    abstract get insideName(): string
    // 存值函数不能标记返回值类型
    abstract set insideName(value: string)
}
class P extends People2 {
    public _name: string
    public insideName: string
}

// 实例属性
class People3 {
    constructor(public name: string){}
}
let p5: People3 = new People3('mitty')
// 想判断实例是不是某个类的实例的时候 还是得用instanceof
class Animal {
    constructor(public name: string) {}
}
p5 = new Animal('mitty')

// 使用接口可以限制某个类的某些内容
interface FoodInterface {
    type: string,
    name: string
}
class FoodClass implements FoodInterface {
    // 接口检测的是使用类创建的实例 静态的话实例上是没有这个属性的 所以会报错
    // static type: string
    type: string
    name: string
}

// 接口继承类 会继承成员 但不会实现
// 当继承的是private 和 protected的成员时
// 接口只能被这个类或子类实现
// protected值能是继承这个类的子类访问

class A2 {
    protected name: string
}
interface I extends A2 {}
class B extends A2 implements I {
    protected name: string
}

// 在泛型中使用类 类型

// 创建create函数 
// 传入的参数是一个类  new() => T 代表创建实例后返回的类
// 返回的是类创建的实例 return new c() 返回的是用传入的类创建的实例
const create = <T>(c: new() => T):T => {
    return new c()
}
class Infos {
    public age: number
    constructor(){
        this.age = 18
    }
}
console.log(create<Infos>(Infos).age)
