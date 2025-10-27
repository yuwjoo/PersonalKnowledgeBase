
静态检查
有些语言根本不允许那些有缺陷的程序运行。无需运行代码就能检测代码中的错误，这种做法被称为_静态检查_

静态类型检查
根据操作值的类型来确定哪些是错误，哪些不是，这种做法被称为静态_类型_检查

关于ts类型定义
TypeScript 是一个_类型_超集，这意味着它添加了关于如何使用不同类型的值的规则
TypeScript 的类型检查器旨在允许正确的程序通过，同时尽可能多地捕获常见错误
可以通过配置改变对代码校验的严重程度
因为ts本质只是静态类型检查器，所以TypeScript**永远不会**改变 JavaScript 代码的运行时行为

ts=带类型的js

TypeScript 是 JavaScript 的运行时，并带有编译时类型检查器

ts类型
1. js基本类型：string number boolean null undefined symbol bigint
2. any：任意类型
3. void：返回undefined或者没有返回值
4. unknown：需要使用者定义该类型是什么
5. never：这种类型不可能存在

声明类型的两种方式： interface type

泛型：为类型提供变量

在结构化的类型系统中，如果两个对象具有相同的结构，则认为它们是相同的（鸭子类型/结构类型）