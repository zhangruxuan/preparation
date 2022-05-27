//用来表示独一无二的值

const s1 = Symbol()
const s2 = Symbol()
// console.log(s1 === s2)  false

//用字符串做标识 但标识一样的也不能三等 symbol是独一无二的
const s3 = Symbol('mitty')

//参数只能是字符串 数字 undefined 
//在浏览器直接写会把对象转成字符串再传 [object object]
// const s4 = Symbol({a: 'a'}) 

//输出字符串Symbol(mitty) 但变量本身还是symbol
console.log(s3.toString())

let prop = 'name'
const s5 = Symbol('name')
const info = {
    // name: 'mitty'
    [s5]: 'mitty',
    [`my${prop}is`]: 'mitty'

}
// console.log(info)
// console.log(info.name)
//普通字符串作为标识时访问
info.name
info['name']
//symbol作为属性名时访问
info[s5]


//遍历
//返回所有属性名构成的数组 但不包含symbol属性名
for(const key in info){
    //打印属性名
    console.log(key)

}
//返回所有属性名构成的数组 但不包含symbol属性名 数组
console.log(Object.keys(info))
Object.getOwnPropertyNames(info)
JSON.stringify(info)
//返回所有symbol属性名 数组
Object.getOwnPropertySymbols(info)
//返回所有属性名 包含Symbol  数组
Reflect.ownKeys(info)


//静态方法
//创建之前在全局内找有无相同symbol 有的话直接赋值 没有再新创建
//全局包含当前页面、ifram/serficrwork
const s7 = Symbol('mitty')
const s6 = Symbol.for('mitty')
// console.log(s6 === s7) 直接在控制台打

//返回用symbol.for创建的标识
console.log(Symbol.keyFor(s6))  //mitty


//11个内置的symbol值
//1. 使用instanceof时就会调用该方法
Symbol.hasInstance
const obj1 = {
    [Symbol.hasInstance](otherObj: any) {
        console.log(otherObj)
    }
}
console.log({a:'a'} instanceof <any>obj1)


//2. concat时不会被扁平化
Symbol.isConcatSpreadable
let arr5 = [1,2]
console.log([].concat(arr5,[3,4,5]))
arr5[Symbol.isConcatSpreadable] = false //未设置时是unde
console.log([].concat(arr5,[3,4,5]))

//3. 
// Symbol.species
// class C extends Array {
// static get [Symbol.species]() {
//     return Array
// }
//     getName() {
//         return 'mitty'
//     }
// }
// const c = new C(1, 2, 3)
// //a是c的衍生对象
// const a = c.map(item => {
//     console.log(item)
//     return item + 1
// })
// console.log(a instanceof C) 
// //true 加了species以后是false
// console.log(a instanceof Array) 
// //true


//4. 
Symbol.match
let obj3 = {
    [Symbol.match] (string) {
        console.log(string.length)
    },
    [Symbol.split] (string) {
        console.log('split', string.length)
    }
}
console.log('abcde'.match(<RegExp>obj3))
const s = /^[a-z]$/
console.log('a'.match(s))
//5. Symbol.replace
//6. Symbol.search
//7. Symbol.split 用法同上 都是调用时调用

//8. Symbol
Symbol.iterator
const arr6 = [1,2,3]
const iterator = arr[Symbol.iterator]()
console.log(iterator)
console.log(iterator.next)

//9.Symbol.
//unknown
let obj4:unknown = {
    [Symbol.toPrimitive](type) {
        console.log(type)
    }
}

// const res = (obj4 as number)++
const res = `abc${obj4}`
//ts输出 default js输出 string 不懂为什么

//10.Symbol.toStringTag

let obj5 = {
    // [Symbol.toStringTag]: 'mitty'
    get [Symbol.toStringTag](){
        return 'mitty'
    }
}
console.log(obj5.toString()) 
//[object mitty]

//11. Symbol.unscopables
// const obj6 = {
//     a:'a',
//     b:'b'
// }
// with(obj6){
//     console.log(a)
//     console.log(b)
// }
// //返回使用with时，哪些属性被过滤掉
// console.log(Array.prototype[Symbol.unscopables])

// const arr= [1,2]
// with(arr){
//     console.log(filter(item =>item === 1))
// }

