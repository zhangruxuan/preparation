// const getFullName = ({firstName, lastName }) => {
//     return `${firstName} ${lastName}`
// }
// getFullName({
//     firstName: 18,
//     lastName: 'mitty',
// })
// 用接口限定传入对象的类型
interface NameInfo {
    firstName: string,
    lastName: string
}
const getFullName = ({firstName, lastName }: NameInfo) => {
    return `${firstName} ${lastName}`
}

// getFullName({
//     firstName: 'hhh',
//     //赋值为别的类型的时候就会报错
//     // lastName: 18
// })

interface Vegetable {
    // 可选属性
    color?: string,
    // 只读属性
    readonly type: string
    // 增加属性 方法二
    [prop: string]: any
}
// 不写:Vegetable那所有属性都得有 否则报错
const getVegetables = ({ color, type}:Vegetable) => {
    return `A ${color ? (color + ' '): ''}${type}`
}
// 属性增加时 绕过规则 
// 方法一 类型断言
console.log(getVegetables({
    color: 'red',
    type: 'tomato',
    size: 2
} as Vegetable))

let vegetableObj: Vegetable = {
    // 只读， 不能修改
    type: 'tamato'
}
interface ArrInter {
    0: number,
    readonly 1: string
}

let arr1: ArrInter = {
    0: 1,
    1: 'a'
}
// 会报错 arr1[1] = 'b'

type AddFunc = (num1:number, num2: number) => number
const add: AddFunc = (n1,n2) => n1+n2

interface RoleDic {
    [id: number]: string
}
const role1: RoleDic = {
    0: 'super_admin',
}

//接口的继承
interface Vegetables {
    color: string
}
interface Tomato extends Vegetables{
    color: string,
    radius: number
}
interface Carrot {
    length: number
}
const tomato: Tomato = {
    radius: 1,
    color: 'red',
}
const carrot: Carrot = {
    length: 1,
}

// 混合类型接口
const countUp = (() => {
    let count = 0
    return () => {
        return count++
    }
})()

// console.log(countUp())
// 每次调用都会加加

// 返回的函数需要具有这个接口定义的所有条件
interface Counter {
    (): void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => {c.count++}
    c.count = 0
    return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)