// 用泛型变量T指定 返回值类型和value类型一样
const getArray = <T>(value: T, times: number = 5): T[] => {
    // 创建times个元素的数组 用fill函数把value填充进去
    return new Array(times).fill(value)
}
// 能够在编译阶段检测出length不是number的属性
// console.log(getArray<number>(2,3).map((item) => item.length))

// 泛型变量 指定
const getArray1 = <T, U>(param1: T, param2: U, times: number): [T, U][] =>{
    return new Array(times).fill([param1,param2])

}
// item[0]是数字无length item[1]是字符串有length 通过泛型自动限制
let a = getArray1(1, 'a', 3).forEach((item) =>{
    // console.log(item[0].length)
    console.log(item[1].length)
})

// forEach出来的元素也可以修改
// a.forEach((item) =>{
//     item[0] = 2 // Number(item[0].toString().split('').map((ite) =>{return ite+1}))
//     console.log(item[1])
// })

// console.log(a)
// 使用类型别名定义泛型
let getArray2: <T>(arg: T, times: number) => T[]
getArray2 = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}
// 会检测
// getArray(123,3).map((item) => item.length)

type GetArray3 = <T>(arg: T, times: number) => T[]
let getArray3: GetArray3 = (arg:any, times:number) => {
    return new Array(times).fill(arg)
}
// 使用接口定义泛型
// 在接口名后<T> 在整个接口中都可以用 也可以在一行最前面加<T>
interface GetArray<T> {
    // tslint:disable-next-line: no-shadowed-variable
    <T>(arg: T, times: number): T[],
    array: T[]
}

// 泛型约束
// 对可以赋给泛型变量的类型做一些约束

interface valueWithLength {
    length: number
}
// 赋给范型变量T的类型必须有length属性
const getArray4 = <T extends valueWithLength>(arg: T, times): T[] => {
    return new Array(times).fill(arg)
}

getArray4([1,2], 3)
getArray4('123', 3)
getArray4({
    length: 3
}, 3)

// 在泛型约束中使用类型参数
// 对函数提供类型提示 在编译阶段就报错
// k是T属性中的一个 keyof返回所有key
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}

const objs = {
    a: 'a',
    b: 'b'
}
getProps(objs, 'a')
// 所以会查到objs里面没c 报错
// getProps(objs, 'c')