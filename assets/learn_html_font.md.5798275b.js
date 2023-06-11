import{_ as e,o as s,c as o,N as t}from"./chunks/framework.c893c7c5.js";const u=JSON.parse('{"title":"font","description":"","frontmatter":{},"headers":[],"relativePath":"learn/html/font.md"}'),a={name:"learn/html/font.md"},n=t(`<h1 id="font" tabindex="-1">font <a class="header-anchor" href="#font" aria-label="Permalink to &quot;font&quot;">​</a></h1><h2 id="how-websites-use-external-fonts" tabindex="-1">How websites use external fonts？ <a class="header-anchor" href="#how-websites-use-external-fonts" aria-label="Permalink to &quot;How websites use external fonts？&quot;">​</a></h2><p>Websites can use external fonts by referencing the font files hosted on a separate server or by importing pre-existing font libraries. The website&#39;s HTML or CSS code references the font files, which are then downloaded and rendered by the user&#39;s web browser when they visit the site. This allows websites to use a wide variety of custom fonts beyond the standard set of fonts installed on most computers.</p><h2 id="could-you-explain-it-by-code" tabindex="-1">could you explain it by code? <a class="header-anchor" href="#could-you-explain-it-by-code" aria-label="Permalink to &quot;could you explain it by code?&quot;">​</a></h2><p>Sure! Here&#39;s an example of how a website can use an external font in its CSS code:</p><ol><li>First, you need to link to the font file in your HTML document using the &lt;link&gt; tag. This should be placed in the &lt;head&gt; section of your HTML. Here&#39;s an example:</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head\\</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  \\</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://fonts.googleapis.com/css?family=Open+Sans</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">\\</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\\</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head\\</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>In this example, we&#39;re linking to the &quot;Open Sans&quot; font hosted by Google Fonts.</p><ol start="2"><li>Next, you can specify which elements on your page should use this font in your CSS code. Here&#39;s an example:</li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Open Sans</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>In this example, we&#39;re setting the font-family property for the body element to &#39;Open Sans&#39;, which is the name of our external font. We&#39;ve also specified sans-serif as a fallback font in case the user&#39;s browser can&#39;t load the external font.</p><p>That&#39;s it! With these two steps, your website can now use the external font you&#39;ve linked to in your HTML document.</p><h2 id="what-are-the-formats-of-font-files-how-to-open-it" tabindex="-1">What are the formats of font files? How to open it? <a class="header-anchor" href="#what-are-the-formats-of-font-files-how-to-open-it" aria-label="Permalink to &quot;What are the formats of font files? How to open it?&quot;">​</a></h2><p>There are several formats of font files, including:</p><ol><li><p>TrueType Font (.ttf) - This is a popular font format developed by Apple and Microsoft.</p></li><li><p>OpenType Font (.otf) - This is a newer font format that was developed jointly by Adobe and Microsoft.</p></li><li><p>Web Open Font Format (.woff) - This is a font format specifically designed for web use.</p></li><li><p>Embedded OpenType Font (.eot) - This is a font format developed by Microsoft for use on the web.</p></li><li><p>Scalable Vector Graphics Font (.svg) - This is a vector-based font format that can be scaled without losing quality.</p></li></ol><p>To open a font file, you&#39;ll need to install it on your computer&#39;s operating system or application. Most modern operating systems (such as Windows, macOS, and Linux) allow you to install fonts by copying the font file to a specific folder on your computer or by using a font management tool.</p><p>Once a font is installed, it can be used in various applications such as word processors, graphic design software, and web development tools. In web development, you can reference the font file in your CSS code to use it on your website (as I explained in my previous answer).</p>`,17),l=[n];function p(i,r,c,f,h,d){return s(),o("div",null,l)}const m=e(a,[["render",p]]);export{u as __pageData,m as default};
