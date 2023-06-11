# 操作符

## 什么是操作符？
操作符（Operator）是用于执行特定操作的符号或关键词。在编程语言中，操作符用于操作数据、执行运算和比较值。操作符可以用于各种数据类型，包括数字、字符串、布尔值等，用于执行不同的操作和计算。

常见的操作符类型包括：

1. 算术操作符（Arithmetic Operators）：用于执行数学运算，如加法、减法、乘法、除法等。

```javascript
let a = 5;
let b = 3;
let sum = a + b; // 加法
let difference = a - b; // 减法
let product = a * b; // 乘法
let quotient = a / b; // 除法
let remainder = a % b; // 取余
```

2. 赋值操作符（Assignment Operators）：用于给变量赋值。

```javascript
let x = 10; // 赋值
x += 5; // 等同于 x = x + 5，加法赋值
x -= 3; // 等同于 x = x - 3，减法赋值
x *= 2; // 等同于 x = x * 2，乘法赋值
x /= 4; // 等同于 x = x / 4，除法赋值
x %= 3; // 等同于 x = x % 3，取余赋值
```

3. 比较操作符（Comparison Operators）：用于比较两个值，并返回布尔值（`true`或`false`）。

```javascript
let a = 5;
let b = 3;
let isEqual = a === b; // 等于
let isNotEqual = a !== b; // 不等于
let isGreater = a > b; // 大于
let isLess = a < b; // 小于
let isGreaterOrEqual = a >= b; // 大于等于
let isLessOrEqual = a <= b; // 小于等于
```

4. 逻辑操作符（Logical Operators）：用于执行逻辑运算，如逻辑与（`&&`）、逻辑或（`||`）和逻辑非（`!`）。

```javascript
let a = 5;
let b = 3;
let result1 = (a > 0) && (b < 10); // 逻辑与
let result2 = (a > 0) || (b < 10); // 逻辑或
let result3 = !(a > 0); // 逻辑非
```

5. 位操作符（Bitwise Operators）：用于对数字进行位级操作，如按位与（`&`）、按位或（`|`）和按位异或（`^`）。

```javascript
let a = 5;
let b = 3;
let result1 = a & b; // 按位与
let result2 = a | b; // 按位或
let result3 = a ^ b; // 按位异或
```

6. 条件（三元）操作符（Conditional (

Ternary) Operator）：用于基于条件表达式的结果选择不同的值。

```javascript
let age = 18;
let isAdult = (age >= 18) ? '成年人' : '未成年人';
console.log(isAdult); // 输出: '成年人'
```

以上只是一些常见的操作符类型，JavaScript还有其他类型的操作符，如位移操作符、typeof操作符、instanceof操作符等。不同的操作符用于不同的目的，可以根据需求选择适当的操作符来执行特定的操作和计算。
