# Loader

## Webpack5实现Loader的源码在哪几个文件和文件夹里？
在Webpack 5中，实现Loader的源码主要位于Webpack源码仓库的以下几个文件和文件夹中：

1. `lib/NormalModule.js`：`lib/NormalModule.js`文件是Webpack的普通模块类，负责处理各种类型的模块。在该文件中，有关于Loader的处理逻辑，包括模块加载、解析和转换等过程。

2. `lib/loaders`目录：`lib/loaders`目录包含了Webpack内置的一些Loader实现。在这个目录下，你可以找到一些常用的Loader，如`lib/loaders/css-loader.js`用于处理CSS文件、`lib/loaders/babel-loader.js`用于处理JavaScript文件等。

3. `lib/webpack/Compilation.js`：`lib/webpack/Compilation.js`文件是Webpack的编译流程中的一个关键文件，负责管理和处理编译过程中的各个阶段。在该文件中，有关于Loader的调用和处理逻辑，包括Loader的加载、解析和应用等。

需要注意的是，以上提到的文件和文件夹是Webpack源码中与Loader相关的一部分。Webpack提供了丰富的Loader生态系统，开发者可以根据自己的需求编写自定义的Loader，以满足特定的资源处理需求。自定义Loader的源码可以位于任意位置，具体的实现和组织方式根据个人或项目的需要而定。
