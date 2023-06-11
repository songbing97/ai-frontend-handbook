import{_ as e,o as s,c as a,N as t}from"./chunks/framework.c893c7c5.js";const g=JSON.parse('{"title":"Next.js","description":"","frontmatter":{},"headers":[],"relativePath":"full-stack/nextjs/index.md"}'),o={name:"full-stack/nextjs/index.md"},n=t(`<h1 id="next-js" tabindex="-1">Next.js <a class="header-anchor" href="#next-js" aria-label="Permalink to &quot;Next.js&quot;">​</a></h1><h2 id="what-is-next-js" tabindex="-1">What is Next.js? <a class="header-anchor" href="#what-is-next-js" aria-label="Permalink to &quot;What is Next.js?&quot;">​</a></h2><p>Next.js is a popular open-source framework for building React-based web applications. It provides a set of tools and features that make it easier to build scalable, production-ready web applications. Key features include:</p><ol><li><p>Server-side rendering: Next.js allows developers to render React components on the server as well as on the client, improving application performance and search engine optimization.</p></li><li><p>Automatic code splitting: With Next.js, code is automatically split into small chunks and loaded on demand, reducing initial load times and improving user experience.</p></li><li><p>Static site generation: Next.js supports static site generation, allowing developers to pre-render pages at build time and serve them as static HTML files.</p></li><li><p>API routes: Next.js makes it easy to create API endpoints that can be used by both server-side and client-side code.</p></li><li><p>Automatic optimization: Next.js automatically optimizes images, CSS, and JavaScript files for better performance and faster page loads.</p></li></ol><p>Overall, Next.js provides a powerful set of tools and features that make it easier to build complex, high-performance web applications using React. Its focus on developer productivity and ease-of-use has made it a popular choice among frontend developers.</p><h2 id="how-to-learn-next-js" tabindex="-1">How to learn Next.js? <a class="header-anchor" href="#how-to-learn-next-js" aria-label="Permalink to &quot;How to learn Next.js?&quot;">​</a></h2><p>There are several resources available to learn Next.js, including documentation, tutorials, courses, and communities. Here are a few options:</p><ol><li><p>Next.js Documentation: The official Next.js documentation is a great place to start learning about the framework. It provides a comprehensive overview of Next.js features, with tutorials and examples to help you get started.</p></li><li><p>Interactive Tutorials: Next.js provides a set of interactive tutorials that allow you to learn by doing. These tutorials cover a range of topics, from basic setup to more advanced features like server-side rendering and static site generation.</p></li><li><p>Video Courses: There are several video courses available on platforms like Udemy, Pluralsight, and Frontend Masters. These courses provide in-depth coverage of Next.js concepts and best practices, with hands-on exercises and real-world projects.</p></li><li><p>Community Resources: There are several online communities dedicated to Next.js, including forums, Slack channels, and Discord servers. These communities provide a space to ask questions, share knowledge, and connect with other developers.</p></li></ol><p>Overall, learning Next.js requires both theoretical knowledge and practical experience. By combining resources like documentation, tutorials, courses, and communities, you can gain a solid understanding of Next.js and how it can be used to build powerful, high-performance web applications.</p><h2 id="what-the-most-commonly-used-api-in-next-js" tabindex="-1">What the most commonly used API in Next.js? <a class="header-anchor" href="#what-the-most-commonly-used-api-in-next-js" aria-label="Permalink to &quot;What the most commonly used API in Next.js?&quot;">​</a></h2><h2 id="could-i-get-a-client-render-page-from-next-js" tabindex="-1">Could I get a client-render page from Next.js? <a class="header-anchor" href="#could-i-get-a-client-render-page-from-next-js" aria-label="Permalink to &quot;Could I get a client-render page from Next.js?&quot;">​</a></h2><p>Yes, it is possible to render pages on the client side using Next.js.</p><p>By default, Next.js uses server-side rendering (SSR) to generate HTML for each page on the server and send it to the browser. However, Next.js also supports client-side rendering (CSR) using several methods:</p><ol><li><p>Dynamic imports: You can use dynamic imports to load components or modules asynchronously on the client side after initial page load.</p></li><li><p>Static HTML export: Next.js supports exporting a pre-rendered static HTML version of your application that can be served directly from a CDN or other static file server.</p></li><li><p>Client-side rendering with useEffect: You can use React&#39;s useEffect hook to fetch data from an API or perform other client-side rendering tasks after initial page load.</p></li></ol><p>To use client-side rendering in Next.js, you can simply create a new page component and add any necessary client-side logic using one of the above methods. When navigating to that page, Next.js will automatically handle both server-side and client-side rendering as appropriate.</p><h2 id="wrong-the-no-2-method-is-server-side-rendering-not-client-side-rendering" tabindex="-1">Wrong, the no.2 method is server-side rendering, not client-side rendering. <a class="header-anchor" href="#wrong-the-no-2-method-is-server-side-rendering-not-client-side-rendering" aria-label="Permalink to &quot;Wrong, the no.2 method is server-side rendering, not client-side rendering.&quot;">​</a></h2><p>You are correct, I apologize for the confusion. The second method I mentioned, static HTML export, is actually related to server-side rendering (SSR) rather than client-side rendering (CSR). With this approach, Next.js pre-renders all pages at build time and exports them as static HTML files that can be served directly from a CDN or static file server, allowing for fast page loads and improved SEO. Thank you for bringing this to my attention.</p><p>reference: <a href="https://github.com/vercel/next.js/discussions/15181" target="_blank" rel="noreferrer">https://github.com/vercel/next.js/discussions/15181</a></p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MyNotSsrComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dynamic</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../components/hello3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ssr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyPage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyNotSsrComponent</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="what-is-amp-in-next-js" tabindex="-1">what is AMP in next.js? <a class="header-anchor" href="#what-is-amp-in-next-js" aria-label="Permalink to &quot;what is AMP in next.js?&quot;">​</a></h2><p>AMP (Accelerated Mobile Pages) is a web component framework developed by Google that helps to create fast-loading mobile pages. In Next.js, the next/amp module provides built-in support for generating AMP-compatible pages.</p><ol><li><p>Using the next/amp module in Next.js, you can easily create AMP versions of your pages by following a few guidelines and best practices. These include:</p></li><li><p>Using valid HTML: To be compatible with AMP, your pages must use valid HTML without any custom JavaScript or CSS.</p></li><li><p>Using AMP components: AMP provides a set of pre-built components, such as amp-img, amp-video, and amp-ad, which can be used to replace standard HTML tags on your pages.</p></li><li><p>Following performance guidelines: AMP has strict performance guidelines, including size limitations and restrictions on certain types of content (such as third-party scripts).</p></li></ol><p>Validating your pages: Before publishing your AMP pages, it&#39;s important to validate them using the AMP Validator tool provided by Google.</p><p>By following these guidelines and using the next/amp module in Next.js, you can create fast-loading, mobile-friendly pages that are optimized for performance and user experience.</p><h2 id="what-is-api-routes" tabindex="-1">What is API routes? <a class="header-anchor" href="#what-is-api-routes" aria-label="Permalink to &quot;What is API routes?&quot;">​</a></h2>`,25),i=[n];function r(l,p,c,d,h,u){return s(),a("div",null,i)}const y=e(o,[["render",r]]);export{g as __pageData,y as default};
