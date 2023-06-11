import{_ as s,o as a,c as l,N as n}from"./chunks/framework.c893c7c5.js";const i=JSON.parse('{"title":"操作符","description":"","frontmatter":{},"headers":[],"relativePath":"zh/learn/javascript/operate.md"}'),p={name:"zh/learn/javascript/operate.md"},o=n(`<h1 id="操作符" tabindex="-1">操作符 <a class="header-anchor" href="#操作符" aria-label="Permalink to &quot;操作符&quot;">​</a></h1><h2 id="什么是操作符" tabindex="-1">什么是操作符？ <a class="header-anchor" href="#什么是操作符" aria-label="Permalink to &quot;什么是操作符？&quot;">​</a></h2><p>操作符（Operator）是用于执行特定操作的符号或关键词。在编程语言中，操作符用于操作数据、执行运算和比较值。操作符可以用于各种数据类型，包括数字、字符串、布尔值等，用于执行不同的操作和计算。</p><p>常见的操作符类型包括：</p><ol><li>算术操作符（Arithmetic Operators）：用于执行数学运算，如加法、减法、乘法、除法等。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 加法</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> difference </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 减法</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> product </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 乘法</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> quotient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 除法</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> remainder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 取余</span></span></code></pre></div><ol start="2"><li>赋值操作符（Assignment Operators）：用于给变量赋值。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 等同于 x = x + 5，加法赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 等同于 x = x - 3，减法赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">*=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 等同于 x = x * 2，乘法赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">/=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 等同于 x = x / 4，除法赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">%=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 等同于 x = x % 3，取余赋值</span></span></code></pre></div><ol start="3"><li>比较操作符（Comparison Operators）：用于比较两个值，并返回布尔值（<code>true</code>或<code>false</code>）。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isEqual </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 等于</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isNotEqual </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 不等于</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isGreater </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 大于</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isLess </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 小于</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isGreaterOrEqual </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 大于等于</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isLessOrEqual </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 小于等于</span></span></code></pre></div><ol start="4"><li>逻辑操作符（Logical Operators）：用于执行逻辑运算，如逻辑与（<code>&amp;&amp;</code>）、逻辑或（<code>||</code>）和逻辑非（<code>!</code>）。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> (b </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 逻辑与</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (b </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 逻辑或</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">(a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 逻辑非</span></span></code></pre></div><ol start="5"><li>位操作符（Bitwise Operators）：用于对数字进行位级操作，如按位与（<code>&amp;</code>）、按位或（<code>|</code>）和按位异或（<code>^</code>）。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 按位与</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 按位或</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 按位异或</span></span></code></pre></div><ol start="6"><li>条件（三元）操作符（Conditional (</li></ol><p>Ternary) Operator）：用于基于条件表达式的结果选择不同的值。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isAdult </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (age </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成年人</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">未成年人</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(isAdult)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: &#39;成年人&#39;</span></span></code></pre></div><p>以上只是一些常见的操作符类型，JavaScript还有其他类型的操作符，如位移操作符、typeof操作符、instanceof操作符等。不同的操作符用于不同的目的，可以根据需求选择适当的操作符来执行特定的操作和计算。</p>`,18),t=[o];function e(c,r,C,y,D,A){return a(),l("div",null,t)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};
