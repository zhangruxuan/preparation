// 一、函数类型

function add1(arg1: number, arg2: number): number {
    return arg1 + arg2
}
// 箭头函数写法
const add2 = (arg1: number,arg2: number) => arg1 + arg2


// 二、函数参数

// 回调函数是常常需要约束 返回参数等
let add3: (x: number, y: number) => number
add3 = (arg1: number, arg2: number): number => arg1 + arg2
// 使用类型别名定义函数
// 返回值
type Add = (x: number, y: number) => number

// 函数中使用了函数体之外的变量 这个变量的类型是不体现在函数类型定义中的
let arg3 = 3
add3 = (arg1: number, arg2: number): number => arg1 + arg2 + arg3

// 使用接口定义函数类型
// interface Add2 {
//     (x: number, y: number): number
// }
// 使用类型别名定义函数类型
type isString = string
let AddFunc: Add
AddFunc = (arg1: number, arg2: number) => arg1 + arg2
let addFunc
addFunc = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 ? arg3 : 0)

// 类型别名 定义可选参数
// ts中可选参数得在必选参数后面
type AddFunction = (arg1: number, arg2: number, arg3?: number ) => number
let addFunction:AddFunction
addFunction = (x:number, y: number) => x+ y
addFunction = (x: number, y: number, z: number) => x + y + z

// 定义参数默认值
// tslint:disable-next-line: only-arrow-functions
// 没有传入y的话默认为0
let  addFunctions = function (x: number, y: number) {
    y = y || 0
    return x + y
}
// x默认2，y默认3 y自动检测3是number 给y做限制
let addFunction2 = (x: number = 2, y = 3) => x+ y

// 剩余参数
// es6之前获取参数列表需要使用arguments对象
function handleData() {
    // arguments.length: 调用这个函数 传入的实际参数个数
    if(arguments.length === 1) return arguments[0] * 2
    else if(arguments.length === 2) return arguments[0] * arguments[1]
    // Array.prototype.slice 返回符合length长度的数组 apply:在arguments上调用
    // join: 连接 但不能直接用 先转成数组再用
    else return Array.prototype.slice.apply(arguments).join('_')
}
// es6标准
const handleData2 = (...args) => {
    console.log(args)
}
// ...拆解操作符
let arr7 = [1, 2, 3]
let arr8 = [...arr7]
let arr9 = [4]
// 把arr7的元素一个个push到arr9中 而不是作为一个数组push进去 对象同理 拆成属性
arr9.push(...arr7)
// 用args接收除了第一个参数以外的所有参数 并指定为number类型的数组
const handleData3 = (arg1: number, ...args: number[]) => {}

// 三、函数重载
// 一般是同名函数有好几种不同的实现 调用时根据参数调用不同函数
// 使用function 定义函数重载
function handleData4(x: string):string[]
function handleData4(x: number): number[]
function handleData4(x: any): any{
    if(typeof x === 'string'){
        // 把传进来的字符串拆成数组 是JOIN的逆方法
        return x.split('')
    } else {
        return x.toString().split('').map((item) => Number(item))
    }
}
handleData4('abc')
handleData4(123)