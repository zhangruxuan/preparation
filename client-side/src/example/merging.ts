// 同名接口会自动合并
// 函数成员会函数重载
interface InfoInter {
    name: string
    getRes(input: string): number
}
interface InfoInter {
    age: number
    getRes(input: number ): string
}
let InfoInter: InfoInter

InfoInter = {
    name: 'mitty',
    age: 18,
    getRes(text: any): any{
        if (typeof text === 'string') return text.length
        else return String(text)
    }
}

// 命名空间 类型 值

// namespace Validations {
//     export const numberReg = /^[0-9]+$/
// }
// namespace Validations {
//     // 同名空间 可以访问export出的内容
//     console.log(numberReg)
// }


// 同名命名空间 类要在命名空间之前定义
// 合并后是包含命名空间为静态属性的类

class Validations {
    constructor() {}
    public chexkType() {}
}
namespace Validations {
    export const numberReg = /^[0-9]+$/
}
console.log(Validations)
console.log(Validations.numberReg)


// 函数和命名空间 函数要在命名空间之前定义
// function countUp() {
//     countUp.count++
// }
// namespace countUp {
//     export let count = 0
// }

// 枚举和命名空间
enum Colors {
    red,
    green,
    blue
}
namespace Colors {
    export const yellow = 3
}
console.log(Colors)