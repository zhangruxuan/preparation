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
let isLetter = Validation.checkLetter('abc')
let isNumber = Validation.checknumber('abc')
console.log(isLetter)
// tsc --outFile src/index.js src/ts-modules/index.ts
// node src/index.js

namespace Shape {
    export namespace Polygons {
        export class Triangle {}
        export class Squaire {}
    }
}
import polygond = Shape.Polygons
let triangle = new polygond.Triangle()

// 模块解析
// 相对和非相对模块的导入
// 相对导入 / ./ ../

// 模块解析策略
// "moduleResolution": "node" | classic
// "module": 'ese2015' 用 classic 其他用node

// classic es6
// 相对导入模块 .ts .d.ts 向外找

// nodejs 在编译阶段
// packge.json 的入口

// 模块解析配置项
// tsconfig.json
// "baseUrl": "./",     要求运行时模块都在一个文件夹里 
// "paths": {},  设置模块默认映射
// "rootDirs": [],  设置路径列表 构建时会放到同一目录下
 // "noResolve": true,
//  tsc indexedDB.ts ./a.ts --onResolve
