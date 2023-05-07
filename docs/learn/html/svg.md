# SVG

## What is SVG?
SVG stands for Scalable Vector Graphics. It is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. Unlike raster images (such as JPEGs, PNGs, or GIFs), which are based on pixels, SVG images are composed of mathematical shapes and can be scaled without losing clarity or resolution. This makes SVG a popular choice for creating logos, icons, charts, maps, and other types of graphics that need to be scalable and adaptable across different devices and screen sizes. SVG is supported by all modern web browsers and can be edited using any text editor or specialized software such as Adobe Illustrator or Inkscape.

## What's the difference between SVG and HTML?
HTML and SVG are both markup languages used for creating content on the web, but they have different purposes and use cases.

HTML (Hypertext Markup Language) is primarily used for structuring and presenting content on the web. It provides a way to define the elements of a web page, such as headings, paragraphs, links, images, lists, forms, and tables. HTML is designed to be semantically meaningful, which means that each element has a specific purpose and conveys some meaning to both humans and machines.

SVG (Scalable Vector Graphics), on the other hand, is a vector image format for creating graphics and illustrations on the web. Instead of describing the structure and content of a web page, SVG defines shapes, lines, curves, and colors to create visual elements that can be scaled and edited without losing quality or resolution. SVG is particularly useful for creating logos, icons, diagrams, charts, and maps that need to be scalable and adaptable across different devices and screen sizes.

In summary, while HTML is used for structuring and presenting content, SVG is used for creating graphics and illustrations. Both are important tools for building websites and web applications, and they can be used together to enhance the visual design and user experience of a web page.

## How to learn SVG?
Learning SVG can be a great way to enhance your web development skills and create high-quality graphics and illustrations for the web. Here are some steps you can follow to learn SVG:

1. Get familiar with the basics of SVG: Start by learning the basic syntax, elements, and attributes of SVG. You can find many online tutorials, courses, and books that can help you get started.

2. Practice drawing simple shapes: Once you understand the basics of SVG, start practicing by creating simple geometric shapes such as rectangles, circles, and polygons. This will help you become more comfortable using SVG and its various tools.

3. Learn how to style SVG: SVG elements can be styled using CSS, just like HTML elements. This means you can use CSS properties to add colors, borders, gradients, shadows, and other visual effects to your SVG graphics.

4. Explore SVG animation: SVG provides many built-in features for creating animations and interactive effects. You can learn how to create simple animations such as transitions, transforms, and keyframes, as well as more advanced techniques such as SMIL animation and JavaScript-based animation libraries.

5. Use SVG in real-world projects: Finally, practice applying SVG to real-world projects such as logos, icons, charts, and maps. This will give you hands-on experience and help you develop a portfolio of work that showcases your SVG skills.

Remember that learning SVG takes time and practice, but with persistence and dedication, you can master this powerful tool for creating stunning graphics and illustrations on the web.

## Could you recommend some websites or tools of learning and creating SVG?
Sure, here are some websites and tools to help you learn and create SVG:

1. Mozilla Developer Network (MDN) - The MDN Web Docs provides a comprehensive guide to SVG, including tutorials, references, and code examples.

2. W3Schools - W3Schools offers interactive tutorials and exercises on SVG, CSS, and HTML, as well as a range of other web development topics.

3. SVG Tutorial - This website provides a step-by-step SVG tutorial for beginners, with clear explanations and interactive examples.

4. Adobe Illustrator CC - Adobe Illustrator is a popular vector graphics editor that can be used to create and edit SVG files.

5. Inkscape - Inkscape is a free and open-source vector graphics editor that supports SVG, as well as other image formats.

6. Canva - Canva is a web-based design tool that includes a range of pre-made SVG templates and graphics that can be customized and downloaded.

7. CodePen - CodePen is an online community for front-end developers where you can find many SVG code examples, demos, and projects.

8. SVGOMG - SVGOMG is a free online tool for optimizing SVG files, which can help reduce file size and improve performance on the web.

These are just a few options to get started with learning and creating SVG. There are many other resources and tools available, so don't be afraid to do some research and explore what works best for you!


## How to style SVG(How to use SVG with HTML)?
You can style SVG elements using CSS, just like you would style HTML elements. Here are some ways to apply styles to SVG:

1. Inline styles: You can apply styles directly to the SVG element using the "style" attribute. For example, to change the fill color of a rectangle, you could add the following style to the rectangle element:

```html
<rect x="10" y="10" width="50" height="50" style="fill: red;" />
```

2. External stylesheets: You can also define styles in an external CSS file and link it to your SVG document using the "link" element. For example, to change the stroke color of all path elements in your SVG, you could define the following rule in your CSS file:

```css
path {
  stroke: blue;
}
```
And then link the CSS file in your SVG document using the following code:
```html
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <title>My SVG Document</title>
  <link href="styles.css" rel="stylesheet" type="text/css" />
  <path d="M10 10 L90 90" />
</svg>
```
3. CSS classes: You can also apply styles using CSS classes. For example, you could define a class called "highlight" in your CSS file that sets the fill color to yellow:
```css
.highlight {
  fill: yellow;
}
```
And then apply the class to any SVG element using the "class" attribute:
```html
<rect x="10" y="10" width="50" height="50" class="highlight" />
```
These are just a few examples of how to style SVG using CSS. Remember that CSS properties for SVG elements may differ from those for HTML elements, so be sure to refer to the SVG specification for a complete list of supported styles and properties.

## How to create a SVG animation?
There are several ways to create animations in SVG, but one common approach is to use CSS or JavaScript. Here are some steps to create a simple SVG animation using CSS:

1. Create the SVG element: Start by creating an SVG element and adding the shapes or elements you want to animate. For example, you might create a circle element like this:
```html
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="#ff6347" />
</svg>
```

2. Define the keyframes: Next, define the keyframes of your animation using the "@keyframes" rule in CSS. For example, you could create an animation that scales the circle from its original size to twice its size over a duration of 2 seconds, then back to its original size over another 2 seconds:
```css
@keyframes scale {
  0%   { transform: scale(1); }
  50%  { transform: scale(2); }
  100% { transform: scale(1); }
}
```
3. Apply the animation: Finally, apply the animation to the SVG element using the "animation" property in CSS. You can specify the name of the animation, the duration, the timing function, and any other parameters. For example, to apply the "scale" animation to the circle element we created earlier, you could add the following style:
```css
circle {
  animation-name: scale;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
```
This will apply the "scale" animation to the circle element, making it scale up and down continuously in a loop.

Note that this is just a simple example of how to create an SVG animation using CSS. There are many other techniques and tools you can use to create more complex animations, such as SMIL animation, JavaScript libraries like GreenSock or Anime.js, or even video editing software.

## Any recommendations for SVG?
+ https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_myfirst
+ https://github.com/willianjusten/awesome-svg
+ https://v4.webpack.js.org/loaders/svg-inline-loader/

## How to transfer SVG to font?
To transfer an SVG image to a font, you can use specialized software or online tools that can generate font files from your SVG graphics. Here are some steps you can follow:

1. Prepare your SVG graphics: Make sure your SVG graphics are properly formatted and optimized for use in a font. This may involve resizing or simplifying the graphics, and ensuring that they have clear lines and shapes.

2. Choose a font generator: There are several font generators available that can create fonts from SVG images. Some popular options include Fontello, IcoMoon, and Fontastic.

3. Upload your SVG graphics: Once you've chosen a font generator, upload your SVG graphics to the tool. Most font generators will allow you to upload multiple SVG files at once.

4. Customize your font: Depending on the font generator you choose, you may be able to customize aspects of your font such as the character codes, spacing, and stylistic effects. Make any necessary adjustments to ensure that your font looks the way you want it to.

5. Download your font: Once you're satisfied with your font, download it in the appropriate format (e.g., .ttf, .woff) and install it on your computer. You can then use the font in your web projects by referencing it in your CSS using the font-family property.

Note that creating a font from SVG graphics can be a complex process, and there may be limitations on the types of SVG images that can be used. It's important to carefully test and verify your font before using it in production environments.

## What's the difference between Icon Fonts and Inline SVG?
Icon Fonts and Inline SVG are two popular ways of using icons on the web, but they differ in how they are created and used.

Icon Fonts are essentially fonts that are made up of icons instead of letters. Each icon is assigned to a specific character code that can be inserted into HTML or CSS using the font-family and content properties. Icon Fonts are typically created using vector graphics software and exported as font files (e.g., .ttf, .woff). They have some advantages, such as small file size, easy scaling, and support for stylistic effects like drop shadows and gradients.

Inline SVG, on the other hand, is a method of embedding SVG images directly into HTML markup. This means that the SVG code is included in the HTML document itself, rather than being referenced from an external file. Inline SVG has some advantages, such as being easy to customize, having more color and style options, and being better for accessibility since they can include alt text. However, they may have larger file sizes than Icon Fonts and require additional markup to display them on a webpage.

In summary, both Icon Fonts and Inline SVG have their pros and cons, and which one you choose depends on your specific needs and preferences. Icon Fonts may be better suited for simple icons that need to be scalable and easily styled, while Inline SVG may be better suited for complex icons that require more customization and color options.