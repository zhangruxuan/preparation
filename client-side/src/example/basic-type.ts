let bool:boolean = true


let num:number = 123
num = 0b1101
num = 0o123
num = 0x1a1

let str:string = 'abc'

str = `number is ${num}`
console.log(str)

//数组
let arr: number[]
arr = [1,3,5]
let arr2: Array<number>

let arr3:(string | number)[]
arr3 = [1,3,5,'a']

//元组类型 固定长度 固定类型
let tuple: [string, number, boolean]
tuple = ['a', 11, true]

//枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
//返回2 自动给索引值 可用于权限识别
console.log(Roles.USER)
console.log(Roles[2])

//any类型 可以是任何类型
let value: any

value = 'as'
value = 123
const arr4: any[] = [1, 'a']

//void类型 什么类型都不是
const consoleText = (text: string): void =>{
    console.log(text)
}
let v:void
v = undefined
//"strictNullChecks": false
// v = null
consoleText('asb')

//null 和 undefined
//其他类型都能赋值为这两个 但这两个类型只能赋值为be
let u: null
u = null

//never类型 返回值
//never是任意类型的子类型 没有其他类型是never的子类型
const errorFunc = (message: string): never=> {
    throw new Error(message)
}
const infiniteFunc = (): never =>{
    while(true){}
}
const neverVariable = (()=>{
    while(true){}
})

//object对象类型 在内存中存引用 上面的都是存值
let obj = {
    name: 'mitty'
}
let obj2 = obj
//obj.name也会被修改 浅拷贝
obj2.name = 'm'

function getObject(obj: object): void{
    console.log(obj)
}
getObject(obj2)

// //类型断言 把某个值强行转换成需要的类型
const getLength = (target: string | number): number => {
    if((<string>target).length || (target as string).length === 0){
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
getLength(12)
