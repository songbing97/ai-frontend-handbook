import{_ as s,o as a,c as l,N as n}from"./chunks/framework.c893c7c5.js";const F=JSON.parse('{"title":"JavaScript数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"zh/learn/javascript/data_type.md"}'),o={name:"zh/learn/javascript/data_type.md"},p=n(`<h1 id="javascript数据类型" tabindex="-1">JavaScript数据类型 <a class="header-anchor" href="#javascript数据类型" aria-label="Permalink to &quot;JavaScript数据类型&quot;">​</a></h1><h2 id="javascript有哪些数据类型" tabindex="-1">JavaScript有哪些数据类型？ <a class="header-anchor" href="#javascript有哪些数据类型" aria-label="Permalink to &quot;JavaScript有哪些数据类型？&quot;">​</a></h2><p>JavaScript有以下几种数据类型：</p><ol><li><p>基本数据类型（Primitive Data Types）：</p><ul><li>数字（Number）：包括整数和浮点数，如 <code>42</code>、<code>3.14</code>。</li><li>字符串（String）：用于表示文本，用引号括起来，如 <code>&#39;Hello World&#39;</code>。</li><li>布尔值（Boolean）：表示真（<code>true</code>）或假（<code>false</code>）。</li><li>undefined：表示未定义或未赋值。</li><li>null：表示空值或不存在的对象。</li><li>Symbol（ES6新增）：表示唯一的、不可变的值。</li></ul></li><li><p>引用数据类型（Reference Data Types）：</p><ul><li>对象（Object）：一种复合数据类型，用于存储多个键值对（属性和方法）的集合。</li><li>数组（Array）：用于存储多个值的有序集合，通过索引访问。</li><li>函数（Function）：用于封装可重复使用的代码块。</li><li>日期（Date）：用于表示日期和时间。</li><li>正则表达式（RegExp）：用于匹配和处理文本模式。</li><li>等等。</li></ul></li></ol><p>JavaScript是一种动态类型语言，变量的数据类型可以根据赋值的值自动推断。同时，JavaScript还具有一些特殊的值，如NaN（非数字）、Infinity（无穷大）和-Infinity（负无穷大），它们属于特殊的数字类型。</p><p>需要注意的是，JavaScript的数据类型与其他编程语言中的数据类型有些许差异，因此在编写JavaScript代码时，需要了解这些数据类型及其特性，以便正确地处理数据和进行相应的操作。</p><h2 id="如何使用基本数据类型-请给出示例。" tabindex="-1">如何使用基本数据类型，请给出示例。 <a class="header-anchor" href="#如何使用基本数据类型-请给出示例。" aria-label="Permalink to &quot;如何使用基本数据类型，请给出示例。&quot;">​</a></h2><p>在JavaScript中，可以使用基本数据类型进行变量声明、赋值和操作。以下是基本数据类型的使用示例：</p><ol><li>数字（Number）：</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9.99</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="2"><li>字符串（String）：</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="3"><li>布尔值（Boolean）：</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isTrue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isFalse </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="4"><li>undefined：</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> variable</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(variable)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: undefined</span></span></code></pre></div><ol start="5"><li>null：</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span></code></pre></div><ol start="6"><li>Symbol：</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uniqueKey</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>在这些示例中，我们使用关键字 <code>let</code> 声明了变量，并将基本数据类型的值赋给这些变量。然后可以使用这些变量进行各种操作。</p><p>需要注意的是，基本数据类型的变量是不可变的，即它们的值不能被修改。每次对变量的操作都会创建一个新的值。例如，对字符串进行拼接或对数字进行数学计算时，会返回一个新的字符串或数字，而不会修改原始值。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> greeting </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 创建一个新的字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(greeting)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: Hello, John</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 创建一个新的数字</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(y)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: 7</span></span></code></pre></div><p>通过使用基本数据类型，可以存储和操作不同类型的数据，并根据需要进行相应的操作和计算。</p><h2 id="null和undefined的区别是什么" tabindex="-1">null和undefined的区别是什么？ <a class="header-anchor" href="#null和undefined的区别是什么" aria-label="Permalink to &quot;null和undefined的区别是什么？&quot;">​</a></h2><p>在JavaScript中，null和undefined是两个特殊的值，表示变量的空值或不存在。</p><p>区别如下：</p><ol><li>undefined：表示未定义或未赋值。当声明一个变量但未给它赋值时，它的默认值为undefined。也可以将一个已赋值的变量设置为undefined。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(y)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: undefined</span></span></code></pre></div><ol start="2"><li>null：表示空值或不存在的对象。可以将null赋给一个已定义的变量，表示该变量的值为空。与undefined不同，null是一个特殊的对象类型。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: null</span></span></code></pre></div><p>主要区别：</p><ul><li>undefined表示变量声明但未赋值，或者尚未被设置为其他值，是JavaScript的默认未定义值。</li><li>null表示变量的值为空，它是一个特殊的对象类型，用于表示变量不引用任何有效对象。</li></ul><p>在使用时，可以根据上下文和需求来选择使用undefined还是null。通常情况下，如果需要明确表示变量为空，可以使用null；如果变量还未被赋值，或者无需显式设置为空，可以使用undefined。</p><p>需要注意的是，undefined和null在逻辑比较时并不相等，它们是不同的值和类型。例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: false</span></span></code></pre></div><p>综上所述，undefined表示未定义或未赋值，null表示空值或不存在的对象。</p><h2 id="如何判断数据类型" tabindex="-1">如何判断数据类型？ <a class="header-anchor" href="#如何判断数据类型" aria-label="Permalink to &quot;如何判断数据类型？&quot;">​</a></h2><p>在JavaScript中，可以使用不同的方式来判断数据的类型。以下是几种常见的方法：</p><ol><li>typeof 操作符：typeof操作符可以返回一个字符串，表示操作数的数据类型。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;number&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;string&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;boolean&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;object&quot;（这是一个历史遗留问题，null被错误地归类为对象）</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">； </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;object&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;object&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;function&quot;</span></span></code></pre></div><ol start="2"><li>instanceof 操作符：instanceof操作符用于检查对象是否属于某个特定类型的实例。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 true</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">date </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 true</span></span></code></pre></div><ol start="3"><li>Object.prototype.toString() 方法：通过调用对象的toString()方法，并使用Object.prototype.toString()来检查返回的类型字符串。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object Number]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object String]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object Boolean]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object Undefined]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object Null]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object Array]&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;[object Function]&quot;</span></span></code></pre></div><p>需要注意的是，这些方法有其局限性和特定的用途。在某些情况下，可能需要结合多种方式来判断数据类型以获取更准确的结果。此外，使用typeof来判断特定类型的变量时，要注意null会被错误地归类为&quot;object&quot;，这是JavaScript的历史遗留问题。</p><p>总体而言，选择适当的方式来判断数据类型取决于具体的场景和需求。</p>`,47),t=[p];function e(c,r,y,D,i,C){return a(),l("div",null,t)}const u=s(o,[["render",e]]);export{F as __pageData,u as default};