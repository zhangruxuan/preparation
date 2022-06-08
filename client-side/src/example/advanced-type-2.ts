// 链式调用
class Counter {
    constructor(public count: number = 0){}
    add(value: number){
        this.count += value
        return this
    }
    subtract(value: number){
        this.count -= value
        return this
    }
}
let counter1 = new Counter(10)
console.log(counter1.add(3).subtract(2))

// 索引类型查询 keyof
// 连接一个类型 然后返回这个类型所有属性名的联合类型
interface InfoInterfaceAdvanced {
    name: string;
    age: number
}
let infoProp: keyof InfoInterfaceAdvanced
infoProp = 'name'
infoProp = 'age'

// 通过和泛型结合使用 就能检查使用了动态属性 名的代码
// 返回属性名对应值 的数组
function getValue<T, K extends keyof T>(obj: T, names: K[]){
    return names.map( (n)=> obj[n])
}
const infoObj = {
    name: 'mitty',
    age: 18
}
let value5 = getValue(infoObj,['name'])

// [] 索引访问操作符

// 结合接口

// 映射类型
// 转换属性
interface Info1 {
    age: number;
    name: string;
    set: string;
}
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
}
// 1.Readonly 2.Partial 3.Pick 同态
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

// 4.record 不同态
// 适用于将每一个属性值转换成其他值

// 映射类型进行推断




