import{_ as s,o as l,c as a,N as n}from"./chunks/framework.c893c7c5.js";const C=JSON.parse('{"title":"基础实战","description":"","frontmatter":{},"headers":[],"relativePath":"zh/learn/html/basic_action.md"}'),o={name:"zh/learn/html/basic_action.md"},p=n(`<h1 id="基础实战" tabindex="-1">基础实战 <a class="header-anchor" href="#基础实战" aria-label="Permalink to &quot;基础实战&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">建议</p><ul><li>实战部分，强烈建议亲自动手，<a href="https://www.runoob.com/try/try.php?filename=tryhtml_intro%E3%80%82" target="_blank" rel="noreferrer">https://www.runoob.com/try/try.php?filename=tryhtml_intro。</a></li></ul></div><h2 id="如何使用html制作一个列表" tabindex="-1">如何使用HTML制作一个列表？ <a class="header-anchor" href="#如何使用html制作一个列表" aria-label="Permalink to &quot;如何使用HTML制作一个列表？&quot;">​</a></h2><p>在HTML中，有多种标签可用于创建不同类型的列表。以下是三种常见的列表类型以及它们的用法：</p><ol><li><p>无序列表（Unordered List）：使用<code>&lt;ul&gt;</code>标签创建无序列表，列表项使用<code>&lt;li&gt;</code>标签表示。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Item 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Item 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Item 3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在上述示例中，<code>&lt;ul&gt;</code>表示无序列表的开始，每个列表项由<code>&lt;li&gt;</code>标签定义。</p></li><li><p>有序列表（Ordered List）：使用<code>&lt;ol&gt;</code>标签创建有序列表，列表项同样使用<code>&lt;li&gt;</code>标签表示。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ol</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">First item</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Second item</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Third item</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ol</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在上述示例中，<code>&lt;ol&gt;</code>表示有序列表的开始，每个列表项由<code>&lt;li&gt;</code>标签定义。</p></li><li><p>定义列表（Definition List）：使用<code>&lt;dl&gt;</code>、<code>&lt;dt&gt;</code>和<code>&lt;dd&gt;</code>标签创建定义列表。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dl</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Term 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dt</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dd</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Definition 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dd</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Term 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dt</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dd</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Definition 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dd</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在上述示例中，<code>&lt;dl&gt;</code>表示定义列表的开始，每个术语（Term）由<code>&lt;dt&gt;</code>标签定义，每个定义（Definition）由<code>&lt;dd&gt;</code>标签定义。</p></li></ol><p>这些列表类型可以根据需要进行嵌套和组合。例如，可以在无序列表或有序列表中嵌套另一个列表，或者在定义列表中嵌套其他列表。</p><p>列表标签可以与其他HTML元素结合使用，以创建更丰富的列表效果。例如，可以在列表项中包含链接、图像或其他HTML元素来定制列表的内容。</p><p>使用这些列表标签，您可以轻松创建并呈现不同类型的列表，以便在网页中组织和展示信息。</p><h2 id="如何使用html制作一个表格" tabindex="-1">如何使用HTML制作一个表格？ <a class="header-anchor" href="#如何使用html制作一个表格" aria-label="Permalink to &quot;如何使用HTML制作一个表格？&quot;">​</a></h2><p>要使用HTML制作一个表格，可以使用<code>&lt;table&gt;</code>、<code>&lt;tr&gt;</code>、<code>&lt;td&gt;</code>等标签来定义表格的结构和内容。下面是一个基本的表格结构的示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Header 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Header 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Header 3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Data 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Data 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Data 3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Data 4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Data 5</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Data 6</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在上面的示例中，<code>&lt;table&gt;</code>标签用于定义表格，<code>&lt;tr&gt;</code>标签用于定义表格的行，<code>&lt;td&gt;</code>标签用于定义表格的单元格。<code>&lt;th&gt;</code>标签用于定义表格的表头单元格。</p><ul><li><code>&lt;table&gt;</code>：定义表格的开始和结束标记，表示整个表格。</li><li><code>&lt;tr&gt;</code>：定义表格的行，包含在<code>&lt;table&gt;</code>标签内部。每个<code>&lt;tr&gt;</code>标签定义表格的一行。</li><li><code>&lt;th&gt;</code>：定义表头单元格，用于标识列的标题。通常出现在表格的第一行。</li><li><code>&lt;td&gt;</code>：定义普通的数据单元格，用于填充表格中的数据。</li></ul><p>通过添加和嵌套这些标签，可以创建具有多行多列的表格。在每个<code>&lt;tr&gt;</code>标签内，使用相应数量的<code>&lt;td&gt;</code>或<code>&lt;th&gt;</code>标签来定义单元格的内容。</p><p>可以使用CSS样式表来进一步设置表格的样式，如边框、背景色、对齐等。</p><h2 id="如何使用html制作一个表单" tabindex="-1">如何使用HTML制作一个表单？ <a class="header-anchor" href="#如何使用html制作一个表单" aria-label="Permalink to &quot;如何使用HTML制作一个表单？&quot;">​</a></h2><p>要使用HTML制作一个表单，可以使用<code>&lt;form&gt;</code>标签和不同类型的表单元素来收集和提交用户输入的数据。下面是一个简单的表单的示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">action</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">method</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Name:</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Email:</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Message:</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在上述示例中，<code>&lt;form&gt;</code>标签用于定义表单，<code>action</code>属性指定了表单提交的URL，<code>method</code>属性指定了表单提交的HTTP方法（通常为GET或POST）。</p><ul><li><code>&lt;label&gt;</code>：用于为表单元素创建标签，通过<code>for</code>属性与对应的表单元素建立关联。</li><li><code>&lt;input&gt;</code>：用于创建各种表单输入元素，如文本框、复选框、单选按钮等。<code>type</code>属性用于指定输入元素的类型。</li><li><code>&lt;textarea&gt;</code>：用于创建多行文本输入框。</li><li><code>&lt;input type=&quot;submit&quot;&gt;</code>：用于创建提交按钮，用户点击该按钮时会提交表单数据。</li></ul><p>每个表单元素都有一个<code>name</code>属性，它定义了表单数据的键名，这些键值对将在提交表单时发送到服务器。</p><p>可以根据需要使用其他属性和标签来增强表单的功能，例如<code>required</code>属性可以指定必填字段，<code>placeholder</code>属性可以在输入框中显示提示文本，<code>select</code>标签用于创建下拉菜单等。</p><p>通过在表单元素中使用不同的标签和属性，可以创建一个完整的HTML表单，用于收集用户的输入数据，并在提交时将数据发送到服务器进行处理。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>`,24),t=[p];function e(c,r,D,F,y,i){return l(),a("div",null,t)}const A=s(o,[["render",e]]);export{C as __pageData,A as default};