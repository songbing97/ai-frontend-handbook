import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_URL = 'https://github/songbing97/frontend-Handbook'


export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

  themeConfig: {
    nav: [
      { text: 'Learn', link: '/learn/' },
      { text: 'Interview', link: '/interview/' },
      { text: 'Code', link: '/code/' },
      // { text: 'Full-Stack', link: '/full-stack/' },
    ],

    sidebar: {
      '/learn/': [
        {
          text: 'Guide',
          link: '/learn/',
          collapsed: false,
          items: [
            {
              text: 'Theory Chapters',
              link: '/learn/guide/chapters',
            },
            {
              text: 'Basic Concepts of FE',
              link: '/learn/guide/concepts',
            }
          ]
        },
        {
          text: 'HTML',
          link: '/learn/html/index',
          collapsed: true,
          items: [
            {
              text: 'Tag',
              link: '/learn/html/tag',
            },
            {
              text: 'Advanced',
              link: '/learn/html/advanced/index',
              collapsed: false,
              items: [
                {
                  text: 'SEO',
                  link: '/learn/html/advanced/seo'
                }
              ]
            }
          ]
        },
        {
          text: 'CSS',
          link: '/learn/css/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'JavaScript',
          link: '/learn/javascript/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Node.js',
          link: '/learn/node/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Webpack',
          link: '/learn/webpack/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Vue',
          link: '/learn/vue/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'React',
          link: '/learn/react/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Network',
          link: '/learn/network/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Browser',
          link: '/learn/browser/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Devops',
          link: '/learn/devops/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Algorithm',
          link: '/learn/algorithm/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Mini app',
          link: '/learn/mini-app/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Mobile',
          link: '/learn/mobile/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Others',
          link: '/learn/others/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Help Center',
          link: '/help-center'
        }
      ],
      '/interview': [
        {
          text: 'Interview Chapters',
          link: '/interview/'
        },
        {
          text: 'Behavior',
          link: '/interview/behavior/index0',
          collapsed: true,
          items: [
            {
              text: 'Leadership and Teamwork',
              link: '/interview/behavior/teamwork',
            },
            {
              text: 'Problem Solving and Decision Making',
              link: '/interview/behavior/resolve',
            },
            {
              text: 'Collaboration and Communication',
              link: '/interview/behavior/collaboration',
            },
            {
              text: 'Adaptability and Learning',
              link: '/interview/behavior/adaptability',
            },
            {
              text: 'Self-Development and Growth',
              link: '/interview/behavior/growth',
            },
            {
              text: 'Salary',
              link: '/interview/behavior/salary',
            },
          ]
        },
        {
          text: 'System Design',
          link: '/interview/system-design/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Judgement',
          link: '/interview/judgement/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'HTML',
          link: '/interview/html/index0',
          collapsed: true,
          items: [
            {
              text: 'HTML Basics',
              link: '/interview/html/basic',
            },
            {
              text: 'HTML Structure and Semantics',
              link: '/interview/html/semantics',
            }
          ]
        },
        {
          text: 'CSS',
          link: '/interview/css/index0',
          collapsed: true,
          items: [
            {
              text: 'CSS Basics',
              link: '/interview/css/basic'
            },
            {
              text: 'CSS Layout and Positioning',
              link: '/interview/css/layout'
            },
            {
              text: 'CSS Responsive Design',
              link: '/interview/css/responsive'
            },
            {
              text: 'CSS Transitions and Animations',
              link: '/interview/css/transition'
            },
            {
              text: 'CSS Preprocessors and Tools',
              link: '/interview/css/tool'
            },
          ]
        },
        {
          text: 'JavaScript',
          link: '/interview/javascript/index0',
          collapsed: true,
          items: [
            {
              text: 'Core JavaScript Concepts',
              link: '/interview/javascript/core'
            },
            {
              text: 'Data Types and Variables',
              link: '/interview/javascript/data_type'
            },
            {
              text: 'Arrays and Objects',
              link: '/interview/javascript/object'
            },
            {
              text: 'ES6 Features',
              link: '/interview/javascript/es6'
            },
            {
              text: 'Functions and Scope',
              link: '/interview/javascript/function'
            },
            {
              text: 'Modules and Bundlers',
              link: '/interview/javascript/module'
            },
            {
              text: 'Browser APIs and Events',
              link: '/interview/javascript/browser'
            },
            {
              text: 'Async Programming',
              link: '/interview/javascript/async'
            },
          ]
        },
        {
          text: 'Node.js',
          link: '/interview/node/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Webpack',
          link: '/interview/webpack/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Vue',
          link: '/interview/vue/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'React',
          link: '/interview/react/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Network',
          link: '/interview/network/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Browser',
          link: '/interview/browser/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'devops',
          link: '/interview/devops/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Algorithm',
          link: '/interview/algorithm/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Mini app',
          link: '/interview/mini-app/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Mobile',
          link: '/interview/mobile/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Others',
          link: '/interview/others/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Help Center',
          link: '/help-center'
        }
      ],
      '/code/': [
        {
          text: '基础',
          items: [
            {
              text: '判断偶数',
              link: '/code/#even'
            },
          ]
        },
        {
          text: '字符串',
          items: [
            {
              text: '回文',
              link: '/code/#palindromic'
            },
            {
              text: '统计次数',
              link: '/code/#statistics'
            },
            {
              text: '反转字符串',
              link: '/code/#reverse_string'
            },
            {
              text: '首字母大写',
              link: '/code/#capitalize'
            }
          ]
        },

      ]
    },
  }
}