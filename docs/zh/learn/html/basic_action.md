# 基础实战

:::tip 建议
- 实战部分，强烈建议亲自动手，https://www.runoob.com/try/try.php?filename=tryhtml_intro。
  :::

## 如何使用HTML制作一个列表？
在HTML中，有多种标签可用于创建不同类型的列表。以下是三种常见的列表类型以及它们的用法：

1. 无序列表（Unordered List）：使用`<ul>`标签创建无序列表，列表项使用`<li>`标签表示。

   ```html
   <ul>
     <li>Item 1</li>
     <li>Item 2</li>
     <li>Item 3</li>
   </ul>
   ```

   在上述示例中，`<ul>`表示无序列表的开始，每个列表项由`<li>`标签定义。

2. 有序列表（Ordered List）：使用`<ol>`标签创建有序列表，列表项同样使用`<li>`标签表示。

   ```html
   <ol>
     <li>First item</li>
     <li>Second item</li>
     <li>Third item</li>
   </ol>
   ```

   在上述示例中，`<ol>`表示有序列表的开始，每个列表项由`<li>`标签定义。

3. 定义列表（Definition List）：使用`<dl>`、`<dt>`和`<dd>`标签创建定义列表。

   ```html
   <dl>
     <dt>Term 1</dt>
     <dd>Definition 1</dd>
     <dt>Term 2</dt>
     <dd>Definition 2</dd>
   </dl>
   ```

   在上述示例中，`<dl>`表示定义列表的开始，每个术语（Term）由`<dt>`标签定义，每个定义（Definition）由`<dd>`标签定义。

这些列表类型可以根据需要进行嵌套和组合。例如，可以在无序列表或有序列表中嵌套另一个列表，或者在定义列表中嵌套其他列表。

列表标签可以与其他HTML元素结合使用，以创建更丰富的列表效果。例如，可以在列表项中包含链接、图像或其他HTML元素来定制列表的内容。

使用这些列表标签，您可以轻松创建并呈现不同类型的列表，以便在网页中组织和展示信息。

## 如何使用HTML制作一个表格？
要使用HTML制作一个表格，可以使用`<table>`、`<tr>`、`<td>`等标签来定义表格的结构和内容。下面是一个基本的表格结构的示例：

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
  </tr>
  <tr>
    <td>Data 4</td>
    <td>Data 5</td>
    <td>Data 6</td>
  </tr>
</table>
```

在上面的示例中，`<table>`标签用于定义表格，`<tr>`标签用于定义表格的行，`<td>`标签用于定义表格的单元格。`<th>`标签用于定义表格的表头单元格。

- `<table>`：定义表格的开始和结束标记，表示整个表格。
- `<tr>`：定义表格的行，包含在`<table>`标签内部。每个`<tr>`标签定义表格的一行。
- `<th>`：定义表头单元格，用于标识列的标题。通常出现在表格的第一行。
- `<td>`：定义普通的数据单元格，用于填充表格中的数据。

通过添加和嵌套这些标签，可以创建具有多行多列的表格。在每个`<tr>`标签内，使用相应数量的`<td>`或`<th>`标签来定义单元格的内容。

可以使用CSS样式表来进一步设置表格的样式，如边框、背景色、对齐等。

## 如何使用HTML制作一个表单？
要使用HTML制作一个表单，可以使用`<form>`标签和不同类型的表单元素来收集和提交用户输入的数据。下面是一个简单的表单的示例：

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>

  <input type="submit" value="Submit">
</form>
```

在上述示例中，`<form>`标签用于定义表单，`action`属性指定了表单提交的URL，`method`属性指定了表单提交的HTTP方法（通常为GET或POST）。

- `<label>`：用于为表单元素创建标签，通过`for`属性与对应的表单元素建立关联。
- `<input>`：用于创建各种表单输入元素，如文本框、复选框、单选按钮等。`type`属性用于指定输入元素的类型。
- `<textarea>`：用于创建多行文本输入框。
- `<input type="submit">`：用于创建提交按钮，用户点击该按钮时会提交表单数据。

每个表单元素都有一个`name`属性，它定义了表单数据的键名，这些键值对将在提交表单时发送到服务器。

可以根据需要使用其他属性和标签来增强表单的功能，例如`required`属性可以指定必填字段，`placeholder`属性可以在输入框中显示提示文本，`select`标签用于创建下拉菜单等。

通过在表单元素中使用不同的标签和属性，可以创建一个完整的HTML表单，用于收集用户的输入数据，并在提交时将数据发送到服务器进行处理。

## 