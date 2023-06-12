import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "AI前端手册",
  description: "根据AI回答生成的前端知识库，让你成为最强前端工程师",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/songbing/frontend-Handbook/edit/master/docs/:path',
      text: '帮助我们改善此页面'
    },
    outlineTitle: '本页内容',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '暗黑模式切换',

    footer: {
      copyright: '项目处于初期阶段，目前完成中文部分内容（英文赶制中），欢迎提issue，必回。',
      message: '联系: 1422254429@qq.com',
    },
    
    nav: [
      { text: '理论学习', link: '/zh/learn/index0' },
      { text: '面试', link: '/zh/interview/index0' },
      { text: '编码', link: '/zh/code/' }
    ],


    sidebar: {
      '/zh/learn/': [
        {
          text: '理论学习导览',
          link: '/zh/learn/guide/chapters',
          items: [
            {
              text: '前端的基础概念',
              link: '/zh/learn/guide/concepts',
            }
          ]
        },
        {
          text: 'HTML',
          link: '/zh/learn/html/index0',
          collapsed: true,
          items: [
            {
              text: '基础理论',
              link: '/zh/learn/html/basic_theory',
            },
            {
              text: '基础实战',
              link: '/zh/learn/html/basic_action',
            },
            {
              text: '高级篇',
              link: '/zh/learn/html/advanced/index0',
              collapsed: false,
              items: [
                {
                  text: '语义化与SEO优化',
                  link: '/zh/learn/html/advanced/semantic'
                },
                {
                  text: '其他概念',
                  link: '/zh/learn/html/advanced/other'
                },
              ]
            }
          ]
        },
        {
          text: 'CSS',
          link: '/zh/learn/css/index0',
          collapsed: true,
          items: [
            {
              text: '属性和值',
              link: '/zh/learn/css/value'
            },
            {
              text: '选择器',
              link: '/zh/learn/css/selector'
            },
            {
              text: '盒模型',
              link: '/zh/learn/css/box'
            },
            {
              text: '弹性盒子布局',
              link: '/zh/learn/css/flex'
            },
            {
              text: '网格布局',
              link: '/zh/learn/css/grid'
            },
            {
              text: '媒体查询',
              link: '/zh/learn/css/media'
            },
            {
              text: '其他',
              link: '/zh/learn/css/other'
            },
            {
              text: '高级篇',
              link: '/zh/learn/css/advanced/index0',
              collapsed: false,
              items: [
                
                {
                  text: '图层',
                  link: '/zh/learn/css/advanced/layer'
                },
                {
                  text: '滤镜',
                  link: '/zh/learn/css/advanced/filter'
                },
                {
                  text: '过渡与动画',
                  link: '/zh/learn/css/advanced/transition'
                },
                {
                  text: 'CSS预处理器',
                  link: '/zh/learn/css/advanced/preprocessor'
                },
                {
                  text: 'PostCSS',
                  link: '/zh/learn/css/advanced/postcss'
                },
                {
                  text: 'Tailwind CSS',
                  link: '/zh/learn/css/advanced/tailwind'
                },
              ]
            }
          ]
        },
        {
          text: 'JavaScript',
          link: '/zh/learn/javascript/index0',
          collapsed: true,
          items: [
            {
              text: '数据类型',
              link: '/zh/learn/javascript/data_type'
            },
            {
              text: '变量和常量',
              link: '/zh/learn/javascript/variable'
            },
            {
              text: '操作符',
              link: '/zh/learn/javascript/operate'
            },
            {
              text: '流程控制语句',
              link: '/zh/learn/javascript/control'
            },
            {
              text: '函数',
              link: '/zh/learn/javascript/function'
            },
            {
              text: '对象和属性',
              link: '/zh/learn/javascript/object'
            },
            {
              text: '数组',
              link: '/zh/learn/javascript/array'
            },
            {
              text: 'DOM操作',
              link: '/zh/learn/javascript/dom'
            },
            {
              text: '事件处理',
              link: '/zh/learn/javascript/event'
            },
            {
              text: '异步编程',
              link: '/zh/learn/javascript/async'
            },
            {
              text: '高级篇',
              link: '/zh/learn/javascript/advanced/index0',
              collapsed: false,
              items: [
                {
                  text: '高级函数',
                  link: '/zh/learn/javascript/advanced/advanced_function'
                },
                {
                  text: '面向对象编程（OOP）',
                  link: '/zh/learn/javascript/advanced/oop'
                },
                {
                  text: '模块化',
                  link: '/zh/learn/javascript/advanced/module'
                },
                {
                  text: '错误处理',
                  link: '/zh/learn/javascript/advanced/error'
                },
                {
                  text: '正则表达式',
                  link: '/zh/learn/javascript/advanced/regexp'
                },
                {
                  text: '其他',
                  link: '/zh/learn/javascript/advanced/other'
                },
              ]
            }
          ]
        },
        // {
        //   text: 'Node.js',
        //   link: '/zh/learn/node/index0',
        //   collapsed: true,
        //   items: [
        //     {
        //       text: '模块和包管理',
        //       link: '/zh/learn/node/module_package'
        //     },
        //     {
        //       text: '文件系统操作',
        //       link: '/zh/learn/node/file_system'
        //     },
        //     {
        //       text: 'HTTP服务器',
        //       link: '/zh/learn/node/http_server'
        //     },
        //     {
        //       text: '路由和请求处理',
        //       link: '/zh/learn/node/route_request'
        //     },
        //     {
        //       text: '数据库连接',
        //       link: '/zh/learn/node/database_connect'
        //     },
        //     {
        //       text: '错误处理和调试',
        //       link: '/zh/learn/node/error'
        //     },
        //     {
        //       text: '流处理',
        //       link: '/zh/learn/node/stream'
        //     },
        //     {
        //       text: '模板引擎',
        //       link: '/zh/learn/node/template'
        //     },
        //     {
        //       text: '高级篇',
        //       link: '/zh/learn/node/advanced/index0',
        //       collapsed: false,
        //       items: [
        //         {
        //           text: '高性能和可伸缩性',
        //           link: '/zh/learn/node/advanced/high_performance'
        //         },
        //         {
        //           text: '中间件开发',
        //           link: '/zh/learn/node/advanced/middleware'
        //         },
        //         {
        //           text: '安全性和认证',
        //           link: '/zh/learn/node/advanced/security'
        //         },
        //         {
        //           text: '数据库集成和ORM',
        //           link: '/zh/learn/node/advanced/orm'
        //         },
        //         {
        //           text: '缓存和性能优化',
        //           link: '/zh/learn/node/advanced/cache'
        //         },
        //         {
        //           text: 'WebSockets和实时通信',
        //           link: '/zh/learn/node/advanced/websocket'
        //         },
        //         {
        //           text: '容器化和部署',
        //           link: '/zh/learn/node/advanced/docker'
        //         },
        //         {
        //           text: '性能监控和调优',
        //           link: '/zh/learn/node/advanced/monitor'
        //         },
        //         {
        //           text: '测试和质量保证',
        //           link: '/zh/learn/node/advanced/test'
        //         },
        //       ]
        //     }
        //   ]
        // },
        // {
        //   text: 'Webpack',
        //   link: '/zh/learn/webpack/index0',
        //   collapsed: true,
        //   items: [
        //     {
        //       text: '入口和出口',
        //       link: '/zh/learn/webpack/entry_output'
        //     },
        //     {
        //       text: '加载器（Loaders）',
        //       link: '/zh/learn/webpack/loader'
        //     },
        //     {
        //       text: '插件（Plugins）',
        //       link: '/zh/learn/webpack/plugin'
        //     },
        //     {
        //       text: '模块打包',
        //       link: '/zh/learn/webpack/module'
        //     },
        //     {
        //       text: '开发服务器（Dev Server）',
        //       link: '/zh/learn/webpack/dev_server'
        //     },
        //     {
        //       text: '环境变量',
        //       link: '/zh/learn/webpack/env'
        //     },
        //     {
        //       text: '代码分割（Code Splitting）',
        //       link: '/zh/learn/webpack/code_split'
        //     },
        //     {
        //       text: '模块解析和别名',
        //       link: '/zh/learn/webpack/alias'
        //     },
        //     {
        //       text: '资源管理和优化',
        //       link: '/zh/learn/webpack/resource_manage'
        //     },
        //     {
        //       text: '高级篇',
        //       link: '/zh/learn/webpack/advanced/index0',
        //       collapsed: false,
        //       items: [
        //         {
        //           text: '自定义配置',
        //           link: '/zh/learn/webpack/self_config'
        //         },
        //         {
        //           text: '高级加载器和插件',
        //           link: '/zh/learn/webpack/advanced_plugin'
        //         },
        //         {
        //           text: '缓存和持久化',
        //           link: '/zh/learn/webpack/cache'
        //         },
        //         {
        //           text: '代码分离和懒加载',
        //           link: '/zh/learn/webpack/lazy'
        //         },
        //         {
        //           text: '构建优化和性能监测',
        //           link: '/zh/learn/webpack/build_optimize'
        //         },
        //         {
        //           text: '模块热替换（HMR）',
        //           link: '/zh/learn/webpack/hmr'
        //         },
        //         {
        //           text: '自动化和持续集成',
        //           link: '/zh/learn/webpack/ci_cd'
        //         },
        //       ]
        //     },
        //   ]
        // },
        {
          text: 'Vue',
          link: '/zh/learn/vue/index0',
          collapsed: true,
          items: [
            {
              text: '响应式系统',
              link: '/zh/learn/vue/reactivity',
            },
            {
              text: '虚拟DOM',
              link: '/zh/learn/vue/virtual_dom',
            },
            {
              text: '编译器',
              link: '/zh/learn/vue/compiler',
            },
            {
              text: '实例化',
              link: '/zh/learn/vue/instance',
            },
            {
              text: '组件系统',
              link: '/zh/learn/vue/component',
            },
            {
              text: '指令',
              link: '/zh/learn/vue/directive',
            },
            {
              text: '插件系统',
              link: '/zh/learn/vue/plugin',
            },
          ]
        },
        {
          text: 'React',
          link: '/zh/learn/react/index0',
          collapsed: true,
          items: [
            {
              text: '调度器（Scheduler）',
              link: '/zh/learn/react/scheduler',
            },
            {
              text: 'Fiber',
              link: '/zh/learn/react/fiber',
            },
            {
              text: '调和器（Reconciler）',
              link: '/zh/learn/react/reconciliation',
            },
            {
              text: '组件（Component）',
              link: '/zh/learn/react/component',
            },
            {
              text: '虚拟DOM（Virtual DOM）',
              link: '/zh/learn/react/virtual_dom',
            },
            {
              text: '渲染器（Renderer）',
              link: '/zh/learn/react/renderer',
            },
            {
              text: '事件系统（Event System）',
              link: '/zh/learn/react/event_system',
            },
            {
              text: 'Hooks',
              link: '/zh/learn/react/hooks',
            },
            {
              text: '调试工具（DevTools）',
              link: '/zh/learn/react/devtools',
            },
          ]
        },
        {
          text: '网络',
          link: '/zh/learn/network/index0',
          collapsed: true,
          items: [
            {
              text: 'HTTP协议',
              link: '/zh/learn/network/http',
            },
            {
              text: '网络协议',
              link: '/zh/learn/network/protocols',
            },
            {
              text: 'DNS',
              link: '/zh/learn/network/dns',
            },
            {
              text: 'WebSockets',
              link: '/zh/learn/network/web_sockets',
            },
            {
              text: '高级篇',
              link: '/zh/learn/node/advanced/index0',
              collapsed: false,
              items: [
                {
                  text: '网络性能优化',
                  link: '/zh/learn/node/advanced/optimize',
                },
                {
                  text: '网络安全',
                  link: '/zh/learn/node/advanced/security',
                },
                {
                  text: '网络协议高级',
                  link: '/zh/learn/node/advanced/protocols_advanced',
                },
                {
                  text: 'WebSocket进阶',
                  link: '/zh/learn/node/advanced/web_socket_advanced',
                },
                {
                  text: '服务端知识',
                  link: '/zh/learn/node/advanced/server',
                },
                {
                  text: '移动网络',
                  link: '/zh/learn/node/advanced/mobile',
                },
                {
                  text: 'WebRTC',
                  link: '/zh/learn/node/advanced/web_rtc',
                }
              ]
            }
          ]
        },
        {
          text: '浏览器',
          link: '/zh/learn/browser/index0',
          collapsed: true,
          items: [
            {
              text: '浏览器的工作原理',
              link: '/zh/learn/browser/works',
            },
            {
              text: '浏览器的渲染过程',
              link: '/zh/learn/browser/render_process',
            },
            {
              text: '浏览器存储',
              link: '/zh/learn/browser/storage',
            },
            {
              text: '浏览器的缓存机制',
              link: '/zh/learn/browser/cache',
            },
            {
              text: '跨域通信',
              link: '/zh/learn/browser/cros',
            },
            {
              text: '浏览器安全性',
              link: '/zh/learn/browser/security',
            },
            {
              text: '浏览器开发者工具',
              link: '/zh/learn/browser/devtools',
            },
            {
              text: '浏览器兼容性',
              link: '/zh/learn/browser/compatible',
            },
            {
              text: '高级篇',
              link: '/zh/learn/browser/advanced/index0',
              collapsed: false,
              items: [
                {
                  text: '性能优化',
                  link: '/zh/learn/browser/advanced/optimize',
                },
                {
                  text: '浏览器的渲染机制',
                  link: '/zh/learn/browser/advanced/render_mechanism',
                },
                {
                  text: 'Web Worker',
                  link: '/zh/learn/browser/advanced/web_worker',
                },
                {
                  text: 'WebAssembly',
                  link: '/zh/learn/browser/advanced/web_assembly',
                },
                {
                  text: '浏览器存储机制的深入理解',
                  link: '/zh/learn/browser/advanced/storage_advanced',
                },
                {
                  text: '浏览器内存管理',
                  link: '/zh/learn/browser/advanced/memory',
                },
                {
                  text: '浏览器扩展和API',
                  link: '/zh/learn/browser/advanced/extension',
                },
              ]
            }
          ]
        },
        // {
        //   text: 'Devops',
        //   link: '/zh/learn/devops/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '算法',
        //   link: '/zh/learn/algorithm/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '小程序',
        //   link: '/zh/learn/mini-app/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '移动端',
        //   link: '/zh/learn/mobile/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '其他',
        //   link: '/zh/learn/others/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        {
          text: '帮助中心',
          link: '/help-center'
        }
      ],
      '/zh/interview/': [
        {
          text: '面试问题章节',
          link: '/zh/interview/index0',
          collapsed: true,
        },
        {
          text: '行为面试',
          link: '/zh/interview/behavior/index0',
          collapsed: true,
          items: [
            {
              text: '团队合作',
              link: '/zh/interview/behavior/team',
            },
            {
              text: '问题解决',
              link: '/zh/interview/behavior/resolve',
            },
            {
              text: '项目和时间管理',
              link: '/zh/interview/behavior/manage',
            },
            {
              text: '技术学习和解释',
              link: '/zh/interview/behavior/way',
            },
            {
              text: '提升效率和质量',
              link: '/zh/interview/behavior/efficient',
            },
            {
              text: '对客户和其他人的帮助',
              link: '/zh/interview/behavior/customer',
            },
            {
              text: '面试谈判',
              link: '/zh/interview/behavior/judgement',
            }
          ]
        },
        // {
        //   text: '系统设计',
        //   link: '/zh/interview/system-design/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        {
          text: 'HTML',
          link: '/zh/interview/html/index0',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: '/zh/interview/html/basic',
            },
            {
              text: 'HTML5新特性',
              link: '/zh/interview/html/html5',
            },
            {
              text: '文档结构',
              link: '/zh/interview/html/document',
            },
            {
              text: '链接和资源',
              link: '/zh/interview/html/link',
            },
            {
              text: '表格和表单',
              link: '/zh/interview/html/table',
            },
            {
              text: '可访问性',
              link: '/zh/interview/html/access',
            },
            {
              text: 'Advanced',
              link: '/zh/interview/html/advanced/index0',
              collapsed: false,
              items: [
                {
                  text: 'HTML高级概念和原则',
                  link: '/zh/interview/html/advanced/concept'
                },
                {
                  text: 'HTML5新特性',
                  link: '/zh/interview/html/advanced/html5'
                },
                {
                  text: '性能优化',
                  link: '/zh/interview/html/advanced/optimize'
                },
                {
                  text: '可访问性和可用性',
                  link: '/zh/interview/html/advanced/access'
                },
                {
                  text: 'SEO和语义化',
                  link: '/zh/interview/html/advanced/semantic'
                },
                {
                  text: '多语言和本地化',
                  link: '/zh/interview/html/advanced/locale'
                },
              ]
            }
          ]
        },
        {
          text: 'CSS',
          link: '/zh/interview/css/index0',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: '/zh/interview/css/basic',
            },
            {
              text: '布局和设计',
              link: '/zh/interview/css/layout',
            },
            {
              text: 'CSS3新特性',
              link: '/zh/interview/css/css3',
            },
            {
              text: '响应式和自适应设计',
              link: '/zh/interview/css/responsive',
            },
            {
              text: '高级主题',
              link: '/zh/interview/css/advance',
            },
            {
              text: 'CSS框架和工具',
              link: '/zh/interview/css/frame',
            },
            {
              text: '细节篇',
              link: '/zh/interview/css/advanced/index0',
              collapsed: false,
              items: [
                {
                  text: 'CSS基础',
                  link: '/zh/interview/css/advanced/basic'
                },
                {
                  text: 'CSS3及新特性',
                  link: '/zh/interview/css/advanced/css3'
                },
                {
                  text: 'CSS布局和设计',
                  link: '/zh/interview/css/advanced/layout'
                },
                {
                  text: 'CSS性能优化',
                  link: '/zh/interview/css/advanced/optimize'
                },
                {
                  text: 'CSS预处理器',
                  link: '/zh/interview/css/advanced/preprocessor'
                },
                {
                  text: 'CSS架构',
                  link: '/zh/interview/css/advanced/structure'
                },
                {
                  text: 'CSS动画',
                  link: '/zh/interview/css/advanced/animation'
                },
              ]
            }
          ]
        },
        {
          text: 'JavaScript',
          link: '/zh/interview/javascript/index0',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: '/zh/interview/javascript/basic',
            },
            {
              text: '函数和闭包',
              link: '/zh/interview/javascript/function',
            },
            {
              text: '对象和原型',
              link: '/zh/interview/javascript/object',
            },
            {
              text: '事件和异步编程',
              link: '/zh/interview/javascript/event',
            },
            {
              text: '错误处理',
              link: '/zh/interview/javascript/error',
            },
            {
              text: 'ES6+',
              link: '/zh/interview/javascript/es6',
            },
            {
              text: 'DOM操作和浏览器API',
              link: '/zh/interview/javascript/dom',
            },
            {
              text: '高级主题',
              link: '/zh/interview/javascript/advance',
            },
            {
              text: '细节篇',
              link: '/zh/interview/javascript/advanced/index0',
              collapsed: false,
              items: [
                {
                  text: 'JavaScript基础',
                  link: '/zh/interview/javascript/advanced/basic'
                },
                {
                  text: '异步编程和事件循环',
                  link: '/zh/interview/javascript/advanced/async'
                },
                {
                  text: '函数和原型',
                  link: '/zh/interview/javascript/advanced/function'
                },
                {
                  text: '对象和数据结构',
                  link: '/zh/interview/javascript/advanced/object'
                },
                {
                  text: 'ES6+',
                  link: '/zh/interview/javascript/advanced/es6'
                },
                {
                  text: '错误处理和调试',
                  link: '/zh/interview/javascript/advanced/error'
                },
                {
                  text: '性能优化和内存管理',
                  link: '/zh/interview/javascript/advanced/optimize'
                },
                {
                  text: '网络通信',
                  link: '/zh/interview/javascript/advanced/network'
                },
                {
                  text: 'JavaScript框架和库',
                  link: '/zh/interview/javascript/advanced/frame'
                },
                {
                  text: '测试和部署',
                  link: '/zh/interview/javascript/advanced/test'
                },
                {
                  text: '工具和任务运行器',
                  link: '/zh/interview/javascript/advanced/tools'
                },
                {
                  text: 'JavaScript的未来',
                  link: '/zh/interview/javascript/advanced/future'
                },
                {
                  text: '其他',
                  link: '/zh/interview/javascript/advanced/other'
                },
              ]
            }
          ]
        },
        // {
        //   text: 'Node.js',
        //   link: '/zh/interview/node/index0',
        //   collapsed: true,
        //   items: [
        //     {
        //       text: '基础知识',
        //       link: '/zh/interview/node/basic',
        //     },
        //     {
        //       text: '模块和包管理',
        //       link: '/zh/interview/node/package',
        //     },
        //     {
        //       text: '核心模块和常用模块',
        //       link: '/zh/interview/node/core',
        //     },
        //     {
        //       text: '异步编程和回调函数',
        //       link: '/zh/interview/node/async',
        //     },
        //     {
        //       text: '流和文件操作',
        //       link: '/zh/interview/node/stream',
        //     },
        //     {
        //       text: '网络编程和服务器开发',
        //       link: '/zh/interview/node/server',
        //     },
        //     {
        //       text: '数据库操作',
        //       link: '/zh/interview/node/database',
        //     },
        //     {
        //       text: '安全和认证',
        //       link: '/zh/interview/node/security',
        //     },
        //     {
        //       text: '调试和性能优化',
        //       link: '/zh/interview/node/optimize',
        //     },
        //     {
        //       text: '测试和持续集成',
        //       link: '/zh/interview/node/integrate',
        //     },
        //     {
        //       text: '安全性和错误处理',
        //       link: '/zh/interview/node/error',
        //     },
        //     {
        //       text: '事件循环和异步模型',
        //       link: '/zh/interview/node/event',
        //     },
        //     {
        //       text: '多线程和集群',
        //       link: '/zh/interview/node/clusters',
        //     },
        //     {
        //       text: '调用外部服务和API',
        //       link: '/zh/interview/node/outsource',
        //     },
        //     {
        //       text: '部署和发布',
        //       link: '/zh/interview/node/deploy',
        //     },
        //     {
        //       text: '调试和性能分析工具',
        //       link: '/zh/interview/node/performance',
        //     },
        //     {
        //       text: '异步模块加载和打包工具',
        //       link: '/zh/interview/node/pack_tool',
        //     },
        //     {
        //       text: '定时任务和调度',
        //       link: '/zh/interview/node/timer',
        //     },
        //     {
        //       text: '安全和认证',
        //       link: '/zh/interview/node/certificate',
        //     },
        //     {
        //       text: '性能监测和错误追踪',
        //       link: '/zh/interview/node/monitor',
        //     },
        //     {
        //       text: '日志记录和错误处理',
        //       link: '/zh/interview/node/log',
        //     },
        //   ]
        // },
        // {
        //   text: 'Webpack',
        //   link: '/zh/interview/webpack/index0',
        //   collapsed: true,
        //   items: [
        //     {
        //       text: '基础知识',
        //       link: '/zh/interview/webpack/basic',
        //     },
        //     {
        //       text: '配置和部署',
        //       link: '/zh/interview/webpack/config',
        //     },
        //     {
        //       text: 'Loader和Plugin',
        //       link: '/zh/interview/webpack/plugin',
        //     },
        //     {
        //       text: '代码分割和懒加载',
        //       link: '/zh/interview/webpack/code_split',
        //     },
        //     {
        //       text: '模块热替换',
        //       link: '/zh/interview/webpack/hot',
        //     },
        //     {
        //       text: '优化和性能',
        //       link: '/zh/interview/webpack/optimize',
        //     },
        //     {
        //       text: 'DevServer和调试',
        //       link: '/zh/interview/webpack/dev_server',
        //     },
        //     {
        //       text: '打包分析和性能监测',
        //       link: '/zh/interview/webpack/package',
        //     },
        //     {
        //       text: 'Webpack与其他工具和框架的集成',
        //       link: '/zh/interview/webpack/integrate',
        //     },
        //     {
        //       text: 'Webpack 4和Webpack 5的新特性',
        //       link: '/zh/interview/webpack/new',
        //     },
        //     {
        //       text: 'Webpack生态系统',
        //       link: '/zh/interview/webpack/economy',
        //     },
        //     {
        //       text: '常见问题和故障排除',
        //       link: '/zh/interview/webpack/problem',
        //     },
        //     {
        //       text: '异步加载和动态导入',
        //       link: '/zh/interview/webpack/lazy',
        //     },
        //     {
        //       text: 'Webpack与现代前端工程',
        //       link: '/zh/interview/webpack/project',
        //     },
        //   ]
        // },
        {
          text: 'Vue',
          link: '/zh/interview/vue/index0',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: '/zh/interview/vue/basic',
            },
            {
              text: '组件',
              link: '/zh/interview/vue/component',
            },
            {
              text: '指令',
              link: '/zh/interview/vue/directive',
            },
            {
              text: '路由',
              link: '/zh/interview/vue/route',
            },
            {
              text: '状态管理',
              link: '/zh/interview/vue/state',
            },
            {
              text: 'Ajax和数据请求',
              link: '/zh/interview/vue/ajax',
            },
            {
              text: '模板语法和渲染',
              link: '/zh/interview/vue/render',
            },
            {
              text: 'Vue生态系统',
              link: '/zh/interview/vue/ecology',
            },
            {
              text: '性能优化和调试',
              link: '/zh/interview/vue/performance',
            },
            {
              text: '单元测试和端到端测试',
              link: '/zh/interview/vue/test',
            },
            {
              text: 'Vue3的新特性',
              link: '/zh/interview/vue/vue3',
            },
            {
              text: '部署和构建',
              link: '/zh/interview/vue/build',
            },
            {
              text: '其他',
              link: '/zh/interview/vue/other',
            },
          ]
        },
        {
          text: 'React',
          link: '/zh/interview/react/index0',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: '/zh/interview/react/basic',
            },
            {
              text: '组件',
              link: '/zh/interview/react/component',
            },
            {
              text: '状态管理',
              link: '/zh/interview/react/state',
            },
            {
              text: '路由',
              link: '/zh/interview/react/route',
            },
            {
              text: '表单处理',
              link: '/zh/interview/react/form',
            },
            {
              text: '事件处理',
              link: '/zh/interview/react/event',
            },
            {
              text: '数据请求',
              link: '/zh/interview/react/fetch',
            },
            {
              text: '生命周期',
              link: '/zh/interview/react/lifecycle',
            },
            {
              text: '性能优化',
              link: '/zh/interview/react/optimize',
            },
            {
              text: '测试',
              link: '/zh/interview/react/test',
            },
            {
              text: '样式处理',
              link: '/zh/interview/react/style',
            },
            {
              text: '错误处理',
              link: '/zh/interview/react/error',
            },
            {
              text: '服务器端渲染',
              link: '/zh/interview/react/ssr',
            },
            {
              text: 'React生态系统',
              link: '/zh/interview/react/ecology',
            },
            {
              text: 'React的优势和限制',
              link: '/zh/interview/react/ad_disad',
            },
            {
              text: '其他',
              link: '/zh/interview/react/other',
            },
          ]
        },
        {
          text: '网络',
          link: '/zh/interview/network/index0',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: '/zh/interview/network/basic',
            },
            {
              text: 'HTTP协议',
              link: '/zh/interview/network/http',
            },
            {
              text: '网络安全',
              link: '/zh/interview/network/security',
            },
            {
              text: '网络性能优化',
              link: '/zh/interview/network/optimize',
            },
            {
              text: '网络协议',
              link: '/zh/interview/network/protocols',
            },
            {
              text: '前端网络调试工具',
              link: '/zh/interview/network/devtools',
            },
            {
              text: '前端网络监测和性能分析',
              link: '/zh/interview/network/monitor',
            },
            {
              text: 'CDN',
              link: '/zh/interview/network/cdn',
            },
            {
              text: 'WebSockets',
              link: '/zh/interview/network/web_socket',
            },
            {
              text: '移动网络',
              link: '/zh/interview/network/mobile',
            },
          ]
        },
        {
          text: '浏览器',
          link: '/zh/interview/browser/index0',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: '/zh/interview/browser/basic',
            },
            {
              text: 'DOM和渲染',
              link: '/zh/interview/browser/dom',
            },
            {
              text: '性能优化和加载速度',
              link: '/zh/interview/browser/optimize',
            },
            {
              text: '浏览器存储',
              link: '/zh/interview/browser/storage',
            },
            {
              text: '性能分析和调试',
              link: '/zh/interview/browser/performance',
            },
            {
              text: '跨浏览器兼容性',
              link: '/zh/interview/browser/compatibility',
            },
            {
              text: '浏览器安全性',
              link: '/zh/interview/browser/security',
            },
            {
              text: '浏览器扩展和插件',
              link: '/zh/interview/browser/extension',
            },
            {
              text: '渲染引擎和浏览器差异',
              link: '/zh/interview/browser/render_engine',
            },
            {
              text: '浏览器新特性',
              link: '/zh/interview/browser/new',
            },
            {
              text: '移动端浏览器',
              link: '/zh/interview/browser/mobile',
            },
            {
              text: 'WebRTC',
              link: '/zh/interview/browser/web_rtc',
            },
            {
              text: '浏览器历史和发展',
              link: '/zh/interview/browser/history',
            },
            {
              text: '其他',
              link: '/zh/interview/browser/other',
            },
          ]
        },
        // {
        //   text: 'Devops',
        //   link: '/zh/interview/devops/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '算法',
        //   link: '/zh/interview/algorithm/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '小程序',
        //   link: '/zh/interview/mini-app/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '移动端',
        //   link: '/zh/interview/mobile/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        // {
        //   text: '其他',
        //   link: '/zh/interview/others/index',
        //   collapsed: true,
        //   items: [{}]
        // },
        {
          text: '帮助中心',
          link: '/help-center'
        }
      ],
      '/zh/code/': [
        {
          text: '基础',
          items: [
            {
              text: '判断偶数',
              link: '/zh/code/#even'
            },
            {
              text: '计算器',
              link: '/zh/code/#calculator'
            },
          ]
        },
        {
          text: '字符串',
          items: [
            {
              text: '回文',
              link: '/zh/code/#palindromic'
            },
            {
              text: '统计次数',
              link: '/zh/code/#statistics'
            },
            {
              text: '反转字符串',
              link: '/zh/code/#reverse_string'
            },
            {
              text: '首字母大写',
              link: '/zh/code/#capitalize'
            }
          ]
        },
        {
          text: '数组',
          items: [
            {
              text: '数组之和',
              link: '/zh/code/#sum_array'
            },
            {
              text: '最大值和最小值',
              link: '/zh/code/#max_array'
            },
            {
              text: '找重复元素',
              link: '/zh/code/#duplicate_element'
            },
            {
              text: '找交集',
              link: '/zh/code/#intersection'
            },
            {
              text: '去重',
              link: '/zh/code/#remove_duplicate'
            },
          ]
        },
        {
          text: '数据结构和算法',
          items: [
            {
              text: '栈',
              link: '/zh/code/#stack'
            },
            {
              text: '队列',
              link: '/zh/code/#queue'
            },
            {
              text: '链表',
              link: '/zh/code/#linked_list'
            },
            {
              text: '二叉树',
              link: '/zh/code/#binary_tree'
            },
            {
              text: '二分查找',
              link: '/zh/code/#binary_search'
            },
            {
              text: '选择排序',
              link: '/zh/code/#selection_sort'
            },
            {
              text: '插入排序',
              link: '/zh/code/#insertion_sort'
            },
            {
              text: '归并排序',
              link: '/zh/code/#merge_sort'
            },
            {
              text: '冒泡排序',
              link: '/zh/code/#bubble_sort'
            },
            {
              text: '快速排序',
              link: '/zh/code/#quick_sort'
            }
          ]
        },
        {
          text: 'DOM操作',
          items: [
            {
              text: '判断CSS',
              link: '/zh/code/#class_name'
            },
            {
              text: '添加CSS',
              link: '/zh/code/#class_add'
            },
            {
              text: '获取所有子元素',
              link: '/zh/code/#element_children'
            }
          ]
        },
        {
          text: 'CSS',
          items: [
            {
              text: '位置与图层',
              link: '/zh/code/#position'
            },
            {
              text: 'BFC/z-index',
              link: '/zh/code/#bfc'
            },
            {
              text: 'Flex',
              link: '/zh/code/#flex'
            },
            {
              text: 'Grid',
              link: '/zh/code/#grid'
            },
            {
              text: '过渡',
              link: '/zh/code/#transition'
            },
            {
              text: '动画',
              link: '/zh/code/#animation'
            },
            {
              text: '滤镜',
              link: '/zh/code/#filter'
            },
          ]
        },
        {
          text: 'UI',
          items: [
            {
              text: '虚拟列表',
              link: '/zh/code/#virtual_list'
            },
            {
              text: '走马灯(轮播图)',
              link: '/zh/code/#carousel'
            },
            {
              text: '滑块',
              link: '/zh/code/#slider'
            },
            {
              text: '水印',
              link: '/zh/code/#watermark'
            },
          ]
        },
        {
          text: 'JS手写',
          items: [
            {
              text: 'Promise',
              link: '/zh/code/#promise'
            },
            {
              text: '解析Url',
              link: '/zh/code/#url'
            },
            {
              text: 'bind',
              link: '/zh/code/#bind'
            },
          ]
        },
      ]
    },

  }
}
