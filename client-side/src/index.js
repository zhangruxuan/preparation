// 使用命名空间代替内部模块
// 在程序内部防止全局污染用 想把相关内容放在一起 用命名空间
// 封装了库要适用于模块系统引入 用模块 模块也能方全局污染
var Validation;
(function (Validation) {
    Validation.isLetterReg = /^[A-Za-z]+$/;
    // 会添加到Validation对象上
    // export const isNumberReg = /^[0-9]+$/
    Validation.checkLetter = function (text) {
        return Validation.isLetterReg.test(text);
    };
})(Validation || (Validation = {}));
// 使用命名空间代替内部模块
// 在程序内部防止全局污染用 想把相关内容放在一起 用命名空间
// 封装了库要适用于模块系统引入 用模块 模块也能方全局污染
var Validation;
(function (Validation) {
    var isLetterReg = /^[A-Za-z]+$/;
    // 会添加到Validation对象上
    Validation.isNumberReg = /^[0-9]+$/;
    Validation.checknumber = function (text) {
        return isLetterReg.test(text);
    };
})(Validation || (Validation = {}));
// 导入
// import {name} from './b'
// console.log(name)
// import * as info from './b'
// console.log(info)
// import {name as nameProp} from './b'
// console.log(nameProp)
// import * as AData from './a'
// console.log(AData)
// 只适用于全局作用的代码
// import './a'
// import name from './c'
// import name = require('./c')
// console.log(name)
// import moment from 'moment'
// import * as moment from 'moment'
// import moment = require('moment')
// 引入命名空间
/// <reference path = "./letter-validation.ts"/>
/// <reference path = "./number-validation.ts"/>
var isLetter = Validation.checkLetter('abc');
var isNumber = Validation.checknumber('abc');
console.log(Validation,isLetter,isNumber);
// tsc --outFile src/index.js src/ts-modules/index.ts
