// 使用命名空间代替内部模块
// 在程序内部防止全局污染用 想把相关内容放在一起 用命名空间
// 封装了库要适用于模块系统引入 用模块 模块也能方全局污染

namespace Validation {
    export const isLetterReg = /^[A-Za-z]+$/
    // 会添加到Validation对象上
    // export const isNumberReg = /^[0-9]+$/
    export const checkLetter = (text:any) => {
        return isLetterReg.test(text)
    }
}