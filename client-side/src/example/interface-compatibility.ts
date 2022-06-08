// 类型推论
// 等号右边向左边推断
let name2 = 'mitty'
// 定义成string就不能再赋值number了
// name2 = 123

// 多类型联合
// 自动指定成为 iarr: Array< string | number>
let iarr = [1, 'a']

// 等号左边向右边推断
window.onmousedown = (mouseEvent) => {
    // 按理说会报错
    console.log(mouseEvent.a)
}

interface InfoInterface {
    name: string
    // info: {age: number}
}
let infos: InfoInterface
const infos1 = {name: 'mitty', info:{age:18}}
const infos2 = {age: 18}
const infos3 = {name: 'mitty', age: 18}
// infos = infos1
// infos = infos2  // 无string会报错
// infos = infos3  // 多了一个number 也没关系 不会报错
// 检测是深层递归的 对象内的类型也会检测

// 函数兼容性
// 参数个数

let x = (a:number) =>0
let y = (b:number, c: string) => 0
// 函数赋值时 等号后面的参数个数要小于等于前面的参数个数
// y = x 无错
// x = y 报错

// foreach (item元素，index元素下标，array元素所在数组)

// 参数类型
let x2 = (a: number) => 0
let y2 = (b: string) =>0
// 参数类型不匹配
// x2 = y2

// 可选参数和剩余参数
const getSum = (arr: number[], callback:(...args:number[])=>number):number =>{
    return callback(...arr)
}

const res3 = getSum([1, 2, 3],(...args: number[]):number => args.reduce((a,b) => a + b, 0))
// console.log(res3)

const res4 =getSum([1, 2, 3],(arg1: number,arg2: number,arg3: number): number => arg1 + arg2 + arg3)
// console.log(res4)

// 函数参数双向协变
let funcA = (arg: number | string): void => {}
let funcB = (arg: number): void => {}
funcA = funcB
// funcb = funcA // 会报错 因为开启了禁止双向协变

// 返回值类型
let x3 = (): string| number => 0
let y3 = (): string => 'a'
x3 = y3
// y3 = x3 // 会报错 返回值限制小的赋给返回值限制大的了


// 函数重载
// 调用时根据参数不同 找到对应的返回值限制
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
    return arg1 + arg2
}

function sum2(arg1: number, arg2: number):number
function sum2(arg1: any, arg2:any): any {
    return arg1 + arg2
}
let func = merge

// func = sum // 报错 func有两种函数重载 sum只有一种 不兼容

// 数值类型类型和数字枚举兼容
// 不同数字枚举之间不兼容 即使数值一样

enum StatusInterface {
    On,
    Off,
}
let s4 = StatusInterface.On
s4 = 2

class AnimalClass {
    public static age: number
    constructor(public name: string){}
}
class PeopleClass {
    public static age: string
    constructor(public name: string){}
}
class FoodClass2 {
    constructor(public name: number){}
}
let animal: AnimalClass
let people: PeopleClass
let food: FoodClass2
// 不会比较类上的静态成员 只会比较实例成员 没错
// animal = people
// 报错
// animal = food

// private protected

class ParentClass {
    private age: number
    constructor(){}
}
class ChildClass extends ParentClass {
    constructor(){
        super()
    }
}
class OtherClass {
    private age: number
    constructor() {}
}
const children: ParentClass = new ChildClass()
// 会报错 虽然看起来类型一样 但private有影响
// cosnt other: ParentClass = new OtherClass()

// 泛型
// interface Data<T> {}
// let data1: Data<number>
// let data2: Data<string>
// 不会报错 因为接口中没用到泛型 相当于空值 用到就会报错了