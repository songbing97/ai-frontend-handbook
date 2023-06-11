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
          link: '/interview/behavior/index',
          collapsed: true,
          items: [{}]
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
          link: '/interview/html/index',
          collapsed: true,
          items: [
            {
              text: 'Tag',
              link: '/interview/html/tag',
            },
            {
              text: 'Advanced',
              link: '/interview/html/advanced/index',
              collapsed: false,
              items: [
                {
                  text: 'SEO',
                  link: '/interview/html/advanced/seo'
                }
              ]
            }
          ]
        },
        {
          text: 'CSS',
          link: '/interview/css/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'JavaScript',
          link: '/interview/javascript/index',
          collapsed: true,
          items: [{}]
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