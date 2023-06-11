# 数组

## 什么是数组？
在编程中，数组（Array）是一种数据结构，用于存储和组织多个相同类型的元素。它是一个有序的、可变长度的集合，其中每个元素都有一个对应的索引。

数组可以包含任意类型的数据，包括数字、字符串、布尔值、对象和其他数组。数组中的每个元素可以通过索引访问，索引从0开始，依次递增。

以下是JavaScript中创建和操作数组的示例：

```javascript
// 创建一个包含一些元素的数组
let fruits = ['apple', 'banana', 'orange'];

// 获取数组长度
console.log(fruits.length); // 输出: 3

// 访问数组元素
console.log(fruits[0]); // 输出: 'apple'
console.log(fruits[1]); // 输出: 'banana'
console.log(fruits[2]); // 输出: 'orange'

// 修改数组元素
fruits[1] = 'grape';
console.log(fruits); // 输出: ['apple', 'grape', 'orange']

// 添加新元素到数组末尾
fruits.push('kiwi');
console.log(fruits); // 输出: ['apple', 'grape', 'orange', 'kiwi']

// 删除数组末尾的元素
let lastElement = fruits.pop();
console.log(fruits); // 输出: ['apple', 'grape', 'orange']
console.log(lastElement); // 输出: 'kiwi'

// 遍历数组元素
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

数组提供了一种有效的方式来存储和访问多个相关元素，并且可以通过索引进行快速检索。通过数组，我们可以处理集合、列表、数据集和其他需要组织数据的场景。

