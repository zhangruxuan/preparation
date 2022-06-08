// es6中引入了模块的概念
// import 和 export
import {name as nameProp, age, info} from './c'
console.log(nameProp,age)
//引入的内容是只读的

// 引入的是对象的话可以修改其属性
// info.name = 'mmm'

// 全局的可以直接导入不用export
import './d'

//import 有提升效果 在引入之前用也可以
getName()
import { getName } from './e'

// 在编译阶段就要确定从哪引入 不能计算或用模板字符串等
// 重复import同一个元素或同一个文件中多次引入 会只执行一次

import * as infos from './a'
console.log(infos)

