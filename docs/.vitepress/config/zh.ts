import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "AI前端手册",
  description: "根据ChatGPT回答生成的前端知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/songbing/frontend-Handbook/edit/master/docs/:path',
      text: '帮助我们改善此页面'
    },
    outlineTitle: '本页内容',
    
    nav: [
      { text: '学习', link: '/zh/learn/' },
      { text: '面试', link: '/zh/interview/' }
    ],

    sidebar: {
      '/zh/learn/': [
        {
          text: 'Learning Chapters',
          link: '/zh/learn/'
        },
        {
          text: 'HTML',
          link: '/zh/learn/html/index',
          collapsed: true,
          items: [
            {
              text: 'Tag',
              link: '/zh/learn/html/tag',
            },
            {
              text: 'Advanced',
              link: '/zh/learn/html/advanced/index',
              collapsed: false,
              items: [
                {
                  text: 'SEO',
                  link: '/zh/learn/html/advanced/seo'
                }
              ]
            }
          ]
        },
        {
          text: 'CSS',
          link: '/zh/learn/css/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'JavaScript',
          link: '/zh/learn/javascript/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Node.js',
          link: '/zh/learn/node/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Webpack',
          link: '/zh/learn/webpack/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Vue',
          link: '/zh/learn/vue/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'React',
          link: '/zh/learn/react/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Network',
          link: '/zh/learn/network/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Browser',
          link: '/zh/learn/browser/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'devops',
          link: '/zh/learn/devops/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Algorithm',
          link: '/zh/learn/algorithm/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'mini app',
          link: '/zh/learn/mini-app/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Mobile',
          link: '/zh/learn/mobile/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Others',
          link: '/zh/learn/others/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Help Center',
          link: '/help-center'
        }
      ],
      '/zh/interview/': [
        {
          text: 'Interview Chapters',
          link: '/zh/interview/'
        },
        {
          text: 'Behavior',
          link: '/zh/interview/behavior/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'System Design',
          link: '/zh/interview/system-design/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Judgement',
          link: '/zh/interview/judgement/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'HTML',
          link: '/zh/interview/html/index',
          collapsed: true,
          items: [
            {
              text: 'Tag',
              link: '/zh/interview/html/tag',
            },
            {
              text: 'Advanced',
              link: '/zh/interview/html/advanced/index',
              collapsed: false,
              items: [
                {
                  text: 'SEO',
                  link: '/zh/interview/html/advanced/seo'
                }
              ]
            }
          ]
        },
        {
          text: 'CSS',
          link: '/zh/interview/css/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'JavaScript',
          link: '/zh/interview/javascript/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Node.js',
          link: '/zh/interview/node/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Webpack',
          link: '/zh/interview/webpack/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Vue',
          link: '/zh/interview/vue/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'React',
          link: '/zh/interview/react/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Network',
          link: '/zh/interview/network/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Browser',
          link: '/zh/interview/browser/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'devops',
          link: '/zh/interview/devops/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Algorithm',
          link: '/zh/interview/algorithm/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'mini app',
          link: '/zh/interview/mini-app/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Mobile',
          link: '/zh/interview/mobile/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Others',
          link: '/zh/interview/others/index',
          collapsed: true,
          items: [{}]
        },
        {
          text: 'Help Center',
          link: '/help-center'
        }
      ]
    },

  }
}
