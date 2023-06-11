# 对象

## JavaScript有哪些原生对象？
JavaScript有许多原生对象，它们是内置的、预定义的对象，可以直接在JavaScript中使用。以下是一些常见的原生对象：

1. Object：所有对象的基础，其他所有对象都继承自它。

2. Array：用于表示和操作有序的数据集合。

3. String：用于表示和操作文本字符串。

4. Number：用于表示和操作数字。

5. Boolean：表示布尔值（true或false）。

6. Date：用于处理日期和时间。

7. Math：提供了一组数学相关的方法和常量。

8. RegExp：用于创建和操作正则表达式。

9. Function：用于定义和调用函数。

10. Error：表示运行时错误的对象，包含有关错误的信息。

此外，还有其他一些对象，如：
- JSON：用于解析和序列化JSON格式的数据。
- Map、Set、WeakMap、WeakSet：用于存储和操作键值对、集合和对象引用等特定数据结构。
- Promise：用于处理异步操作和生成回调函数。
- ArrayBuffer、ArrayBufferView、TypedArray、DataView：用于处理二进制数据。
- Reflect、Proxy：用于元编程，提供了操作对象和函数行为的能力。

这只是一部分常见的原生对象，JavaScript还提供了许多其他对象和特性，以支持不同的编程任务和场景。使用这些原生对象，开发者可以利用它们提供的属性和方法来处理不同类型的数据、执行操作和构建功能丰富的应用程序。

## JavaScript的继承机制是怎么样的？
在JavaScript中，继承是通过原型链（Prototype Chain）来实现的。

每个JavaScript对象都有一个原型（Prototype），它是一个对象或null。当访问一个对象的属性或方法时，如果对象本身没有该属性或方法，JavaScript引擎会沿着原型链向上查找，直到找到对应的属性或方法为止。

继承的过程可以描述如下：

1. 构造函数（Constructor Function）：定义了一个对象的初始状态和行为，可以通过`new`关键字来创建对象的实例。构造函数可以有自己的属性和方法。

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(this.name + ' is eating.');
};
```

2. 创建对象实例：通过构造函数和`new`关键字来创建对象的实例。实例将继承构造函数的属性和方法。

```javascript
let dog = new Animal('Dog');
dog.eat(); // 输出: Dog is eating.
```

3. 原型链的继承：对象实例通过原型链继承构造函数的原型上的属性和方法。

```javascript
Animal.prototype.sleep = function() {
  console.log(this.name + ' is sleeping.');
};

dog.sleep(); // 输出: Dog is sleeping.
```

4. 多级继承：原型链可以继续向上延伸，实现多级继承。

```javascript
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(this.name + ' is barking.');
};

let goldenRetriever = new Dog('Golden Retriever', 'Dog');
goldenRetriever.eat(); // 输出: Golden Retriever is eating.
goldenRetriever.sleep(); // 输出: Golden Retriever is sleeping.
goldenRetriever.bark(); // 输出: Golden Retriever is barking.
```

在上述示例中，`Animal`是一个构造函数，`Dog`通过`Animal.call(this)`调用父类的构造函数来继承父类的属性，然后通过`Object.create(Animal.prototype)`来继承父类的原型。这样，`Dog`实例既能访问`Dog`自身定义的方法，也能访问`Animal`构造函数和原型中定义的方法。

通过原型链继承，JavaScript实现了对象之间的继承关系。这种继承机制允许对象共享属性和方法，并实现了代码的重用和扩展。