// 这是一个包含多种语法错误的JavaScript文件

// 错误1: 缺少分号
var name = "张三"
var age = 25

// 错误2: 未闭合的字符串
var message = "这是一个未闭合的字符串"

// 错误3: 未定义的变量
console.log(undefinedVariable)

// 错误4: 语法错误 - 缺少括号
if (condition {
    console.log("条件为真")
}

// 错误5: 对象字面量语法错误
var person = {
    name: "李四",
    age: 30,
    city: "北京"
    // 缺少逗号
    country: "中国"
}

// 错误6: 函数定义语法错误
function greet(name {
    return "你好, " + name
}

// 错误7: 数组语法错误
var numbers = [1, 2, 3, 4, 5,]

// 错误8: 模板字符串语法错误
var template = `当前时间是: ${new Date()}`

// 错误9: 箭头函数语法错误
const multiply = (a, b => a * b

// 错误10: 类定义语法错误
class Person {
    constructor(name) {
        this.name = name
    }
    
    sayHello() {
        console.log("你好, " + this.name)
    }
    // 缺少闭合大括号 