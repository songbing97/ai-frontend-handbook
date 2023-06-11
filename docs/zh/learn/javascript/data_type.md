# JavaScript数据类型

## JavaScript有哪些数据类型？
JavaScript有以下几种数据类型：

1. 基本数据类型（Primitive Data Types）：
   - 数字（Number）：包括整数和浮点数，如 `42`、`3.14`。
   - 字符串（String）：用于表示文本，用引号括起来，如 `'Hello World'`。
   - 布尔值（Boolean）：表示真（`true`）或假（`false`）。
   - undefined：表示未定义或未赋值。
   - null：表示空值或不存在的对象。
   - Symbol（ES6新增）：表示唯一的、不可变的值。

2. 引用数据类型（Reference Data Types）：
   - 对象（Object）：一种复合数据类型，用于存储多个键值对（属性和方法）的集合。
   - 数组（Array）：用于存储多个值的有序集合，通过索引访问。
   - 函数（Function）：用于封装可重复使用的代码块。
   - 日期（Date）：用于表示日期和时间。
   - 正则表达式（RegExp）：用于匹配和处理文本模式。
   - 等等。

JavaScript是一种动态类型语言，变量的数据类型可以根据赋值的值自动推断。同时，JavaScript还具有一些特殊的值，如NaN（非数字）、Infinity（无穷大）和-Infinity（负无穷大），它们属于特殊的数字类型。

需要注意的是，JavaScript的数据类型与其他编程语言中的数据类型有些许差异，因此在编写JavaScript代码时，需要了解这些数据类型及其特性，以便正确地处理数据和进行相应的操作。

## 如何使用基本数据类型，请给出示例。
在JavaScript中，可以使用基本数据类型进行变量声明、赋值和操作。以下是基本数据类型的使用示例：

1. 数字（Number）：

```javascript
let age = 25;
let price = 9.99;
```

2. 字符串（String）：

```javascript
let name = 'John';
let message = "Hello, World!";
```

3. 布尔值（Boolean）：

```javascript
let isTrue = true;
let isFalse = false;
```

4. undefined：

```javascript
let variable;
console.log(variable); // 输出: undefined
```

5. null：

```javascript
let value = null;
```

6. Symbol：

```javascript
let key = Symbol('uniqueKey');
```

在这些示例中，我们使用关键字 `let` 声明了变量，并将基本数据类型的值赋给这些变量。然后可以使用这些变量进行各种操作。

需要注意的是，基本数据类型的变量是不可变的，即它们的值不能被修改。每次对变量的操作都会创建一个新的值。例如，对字符串进行拼接或对数字进行数学计算时，会返回一个新的字符串或数字，而不会修改原始值。

```javascript
let name = 'John';
let greeting = 'Hello, ' + name; // 创建一个新的字符串
console.log(greeting); // 输出: Hello, John

let x = 5;
let y = x + 2; // 创建一个新的数字
console.log(y); // 输出: 7
```

通过使用基本数据类型，可以存储和操作不同类型的数据，并根据需要进行相应的操作和计算。

## null和undefined的区别是什么？
在JavaScript中，null和undefined是两个特殊的值，表示变量的空值或不存在。

区别如下：

1. undefined：表示未定义或未赋值。当声明一个变量但未给它赋值时，它的默认值为undefined。也可以将一个已赋值的变量设置为undefined。

```javascript
let x;
console.log(x); // 输出: undefined

let y = undefined;
console.log(y); // 输出: undefined
```

2. null：表示空值或不存在的对象。可以将null赋给一个已定义的变量，表示该变量的值为空。与undefined不同，null是一个特殊的对象类型。

```javascript
let value = null;
console.log(value); // 输出: null
```

主要区别：

- undefined表示变量声明但未赋值，或者尚未被设置为其他值，是JavaScript的默认未定义值。
- null表示变量的值为空，它是一个特殊的对象类型，用于表示变量不引用任何有效对象。

在使用时，可以根据上下文和需求来选择使用undefined还是null。通常情况下，如果需要明确表示变量为空，可以使用null；如果变量还未被赋值，或者无需显式设置为空，可以使用undefined。

需要注意的是，undefined和null在逻辑比较时并不相等，它们是不同的值和类型。例如：

```javascript
console.log(undefined == null); // 输出: true
console.log(undefined === null); // 输出: false
```

综上所述，undefined表示未定义或未赋值，null表示空值或不存在的对象。

## 如何判断数据类型？
在JavaScript中，可以使用不同的方式来判断数据的类型。以下是几种常见的方法：

1. typeof 操作符：typeof操作符可以返回一个字符串，表示操作数的数据类型。

```javascript
typeof 42; // 返回 "number"
typeof "Hello"; // 返回 "string"
typeof true; // 返回 "boolean"
typeof undefined; // 返回 "undefined"
typeof null; // 返回 "object"（这是一个历史遗留问题，null被错误地归类为对象）
typeof {}； // 返回 "object"
typeof []; // 返回 "object"
typeof function() {}; // 返回 "function"
```

2. instanceof 操作符：instanceof操作符用于检查对象是否属于某个特定类型的实例。

```javascript
const arr = [];
arr instanceof Array; // 返回 true
const date = new Date();
date instanceof Date; // 返回 true
```

3. Object.prototype.toString() 方法：通过调用对象的toString()方法，并使用Object.prototype.toString()来检查返回的类型字符串。

```javascript
Object.prototype.toString.call(42); // 返回 "[object Number]"
Object.prototype.toString.call("Hello"); // 返回 "[object String]"
Object.prototype.toString.call(true); // 返回 "[object Boolean]"
Object.prototype.toString.call(undefined); // 返回 "[object Undefined]"
Object.prototype.toString.call(null); // 返回 "[object Null]"
Object.prototype.toString.call({}); // 返回 "[object Object]"
Object.prototype.toString.call([]); // 返回 "[object Array]"
Object.prototype.toString.call(function() {}); // 返回 "[object Function]"
```

需要注意的是，这些方法有其局限性和特定的用途。在某些情况下，可能需要结合多种方式来判断数据类型以获取更准确的结果。此外，使用typeof来判断特定类型的变量时，要注意null会被错误地归类为"object"，这是JavaScript的历史遗留问题。

总体而言，选择适当的方式来判断数据类型取决于具体的场景和需求。