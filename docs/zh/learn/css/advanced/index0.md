# CSS（高级篇）

- [图层](layer.md)
- [滤镜](filter.md)
- [过渡与动画](transition.md)
- [CSS预处理器](preprocessor.md)
- [PostCSS](postcss.md)
- [Tailwind CSS](tailwind.md)
- [CSS（基础篇）](../index0.md)

## CSS高级包含哪些内容？
CSS的高级内容涵盖以下几个方面：

1. Flexbox（弹性盒子布局）：掌握Flexbox布局模型，它提供了更灵活和响应式的布局方式，可以轻松实现各种复杂的布局需求。

2. Grid（网格布局）：学习使用CSS Grid布局，它是一个强大的二维布局系统，可以实现复杂的网格布局，简化页面的布局设计。

3. 响应式设计（Responsive Design）：了解和应用响应式设计的原则和技术，使用媒体查询和断点来适应不同设备和屏幕尺寸的布局和样式。

4. 过渡和动画（Transitions & Animations）：学习如何使用CSS过渡和动画效果，创建平滑的过渡和吸引人的动画效果，增强用户体验。

5. 过滤和混合模式（Filter & Blend Modes）：掌握使用CSS滤镜和混合模式来改变图像和元素的外观和颜色。

6. 自定义变量（Custom Properties）：了解CSS自定义属性的概念和用法，通过定义和使用自定义变量，提高CSS的可维护性和可重用性。

7. CSS预处理器（CSS Preprocessors）：了解使用CSS预处理器（如Sass、Less）的概念和语法，可以通过使用变量、嵌套规则、混合等功能，提高CSS的开发效率和可维护性。

8. CSS架构和模块化（CSS Architecture & Modularization）：学习如何组织和管理大型CSS代码库，采用模块化的方法，分解样式表为可维护和可扩展的模块。

9. CSS性能优化（CSS Performance Optimization）：了解优化CSS性能的技巧和最佳实践，包括减少选择器嵌套、避免重复样式、压缩和合并样式表等方法。

10. CSS预加载和代码分割（CSS Preloading & Code Splitting）：学习如何在页面加载过程中优化CSS的加载和渲染，提高页面的性能和用户体验。

这些高级内容可以帮助你更好地掌握CSS，并应用于更复杂和具有挑战性的项目中。通过不断学习和实践，你将能够运用这些高级技术来创建出令人印象深刻的用户界面和交互效果。

## CSS3有哪些新特性?


## CSS有哪些布局？
:::tip 提示
- 弹性盒子布局和网格布局是主流，尤其是弹性盒子布局是重点
  :::
CSS提供了多种布局技术，用于控制和组织HTML元素在网页中的布局和排列。以下是一些常见的CSS布局技术：

1. 块级布局（Block Layout）：默认情况下，HTML中的大多数元素都采用块级布局。块级元素在垂直方向上一个接一个地堆叠，并占据父元素的整个可用宽度。

2. 行内布局（Inline Layout）：行内元素按照从左到右的方式水平排列，直到一行不足以容纳更多元素，然后会自动换行。行内元素不会独占一行。

3. **弹性盒子布局（Flexbox Layout）**：Flexbox是一种用于创建灵活的、自适应的布局的CSS模块。它通过使用`display: flex`将容器元素定义为Flex容器，并使用Flex属性来控制内部项目的排列和对齐。

4. **网格布局（Grid Layout）**：Grid布局是一种二维布局系统，通过将容器元素定义为Grid容器，并使用Grid属性来划分网格和定位内部项目，以创建复杂的网格式布局。

5. 流式布局（Fluid Layout）：流式布局是一种响应式设计的布局方式，它使用相对单位（如百分比）和媒体查询来实现在不同屏幕尺寸下的自适应布局。元素的尺寸会根据视口大小的变化而自动调整。

6. 定位布局（Positioning Layout）：通过CSS的定位属性（如`position: absolute`、`position: relative`）和偏移属性（如`top`、`right`、`bottom`、`left`）来控制元素的位置和层叠关系。

7. 多列布局（Multi-column Layout）：多列布局允许将文本内容分为多列显示，类似于报纸的版面布局。可以通过`column-count`、`column-width`等属性来定义列的数量和宽度。

这些布局技术可以单独使用，也可以组合使用，以创建丰富和复杂的页面布局。具体的选择取决于您的设计目标、需求和目标浏览器的兼容性要求。