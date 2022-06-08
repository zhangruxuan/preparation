// @函数名
// 这个函数在运行时会被调用 被装饰的声明作为参数自动传入

// 装饰器 要紧挨着要修饰的内容前面
// 不能用在。d.ts中 或者任何生命文件中

// 装饰器工厂 函数返回一个函数 返回的函数作为装饰器的调用函数

// function setProp () {
//     return function (target){}
// }
// @setProp('')

// 装饰器工厂从上往下执行 装饰器从后往前执行

// function setName () {
//     console.log('get setname')
//     return (target) => {
//         console.log('setname')
//     }
// }
// function setAge () {
//     console.log('get setage')
//     return (target) => {
//         console.log('setage')
//     }
// }
// @setName()
// @setAge()
// class ClassDec {
// }


// 参数装饰器 方法装饰器 类装饰器

// 类装饰器 当做函数被调用 唯一参数是装饰的类
let sign = null
function setName3(name:string) {
    return (target: new() => any) => {
        sign = target
        console.log(target.name)
    }
}
@setName3('mitty')
class ClassDec {
    constructor() {}
}