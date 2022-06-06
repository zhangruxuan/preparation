// 数字枚举 从0开始 自增
let test = 6
enum Status {
    Uploading,
    Success = 3,
    Failed = test,
}
// 访问
// console.log(Status.Uploading)
// console.log(Status['Uploading'])

// 反向映射
// 字符串枚举
enum message {
    Error = 'Sorry, error',
    Source = 'Hoho, sucess',
    Failed = Error
}
console.log(message.Failed,message.Source)

// 异构枚举
enum Result {
    Failed = 0,
    Success = 'success'
}
// 枚举成员类型 联合枚举类型
// 满足某些条件时这个枚举可做类型使用

// 1.不带初始值的枚举成员 enum E {A}
// 2.值为字符串 enum E {A = 'a'}
// 3.数值自变量 enum E {A = -2}

// 枚举成员类型
enum Animals {
    Dog = 1,
    Cat = 2,
}

interface Dog {
    type: Animals.Dog
}

const dog: Dog = {
    type: Animals.Dog
}

// 联合枚举类型
