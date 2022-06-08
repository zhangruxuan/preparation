// 交叉类型 做与的操作
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U =>{
    let res = {} as T & U
    res = Object.assign(arg1, arg2)
    return res
}
// 联合类型 做或的操作
const getLengthFunc = (content: string | number): number =>{
    if(typeof content === 'string') return content.length
    else return content.toString().length
}

// 类型保护

const valueList = [123, 'abc']
const getRandomValue = () => {
    const number = Math.random() * 10
    if(number < 5) return valueList[0]
    else return valueList[1]
}
const item = getRandomValue()
// console.log(item)
// 用类型断言
// if((item as string).length) {
//     console.log((item as string).length)
// }else {
//     console.log((item as number).toFixed())
// }

// 用类型保护
function isString(value: number| string): value is string{
    return typeof value === 'string'
}
// 或者if里面写typeof value === 'string' 
// 类型保护的时候typeof只能是=== 或！==
// 判断的只能是string、number、Boolean、symbol中的一种
if(isString(item)) {
    console.log(item.length)
}else {
    console.log(item.toFixed())
}

// null / undefined 是任何类型的子类型 严格模式可关掉这个
// "strictNullChecks": true

// 类型保护 和 类型断言
const getLengthFunction  = (value:string | null): number =>{
    if(value === null) return 0
    else return value.length
    // 精简写法
    return (value || '').length
}
// "strictNullChecks": true 下需要
// 手动指明类型不是null
// 类型断言 在变量后加个！ 表明不是null
function getSplicedStr(num: number | null):string {
    function getRes (prefix: string){
        return prefix + num!.toFixed().toString()
    }
    num = num || 0.1
    return getRes("mitty-")
}

// 类型别名
type PositionType<T> = {x: T, y: T}
const position1: PositionType<number> = {
    x: 1,
    y: -1,
}
// 只能在属性中引用类型别名自己 不能直接自己等于自己
type Childs<T> = {
    current: T,
    child?: Childs<T>
}
let ccc: Childs<string> = {
    current: 'first',
    child: {
        current: 'second',
        child: {
            current: 'third',
        }
    }
}

// 接口和类型别名 都可以定义只包含number的东西 创建出来的实例也能=赋值 即兼容
// 什么时候用类型别名 什么时候用接口呢？
// 要扩展即要implements、extends 的时候用接口
// 不扩展 且要使用联合类型或元组类型的时候用类型别名


// 字面量类型
// 字符串字面量
type Name = 'mitty'
const name3:Name = 'mitty'  // 只能定义成mitty
// 字符串字面量联合类型
type Direction = 'north'|'east'|'south'|'west'

function getDIRECTIONfIRSTlETTER(direction:Direction) {
    return direction.substr(0,1)
}
// 数字字面量类型
type Age = 18
interface InfoInterface {
    name: string
    age: Age // 这样实例age只能是18
}

// 枚举成员类型
// 不带初始值 成员是字符串字面量 值是数字字面量 满足其一就能作为类型使用

/** 可辨识联合
 * 两要素
 * 1.要有普通的单例类型属性 
 * 2.一个类型别名包含了那些类型的联合
 */
interface Square {
    kind: 'square' // 1.都有kind 且值不一样 可做特征
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    height:number
    width: number
}
interface Circle {
    kind: 'circle'
    radius: number
}
type Shape = Square | Rectangle | Circle// 2.
function assertNever(value: never): never {
    throw new Error('Unexpected object:' + value)
}
function getArea(s: Shape):number{
    switch(s.kind){
        case 'square': return s.size * s.size; break;
        case 'rectangle': return s.height * s.width; break;
        case 'circle': return Math.PI * s.radius ** 2; break;
        default: return assertNever(s)
    }
}
// 完整性检查
// 方式一："strictNullChecks": true  :number就会检查了
// 方式二： default: return assertNever(s)
