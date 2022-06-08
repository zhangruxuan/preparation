// 两种导出方法
export const name = 'mitty'
const age = 18
const address = 'beijing'
export {age, address}

// 也可以导出函数和类 在之前加export即可
// 可以起别名
export function func () {}
class B{}
export {
    B as classb,

}
//只能导出接口不能直接导出具体的值 export default 可以直接导出具体的值
// export 'aa'

// export导出的地方发生变化了的话  import引入的也会变化