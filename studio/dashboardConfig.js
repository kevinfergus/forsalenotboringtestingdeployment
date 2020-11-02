export default {
  widgets: [
    {
      name: 'document-list',
      options: { title: 'Recent listings', order: '_createdAt desc', types: ['listing'] },
      layout: { width: 'medium' }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8746a2ee6a7948f235d84f',
                  title: 'CMS',
                  name: 'fsnb-cms',
                  apiId: '7e6b1aec-5b73-46a6-9844-1abde4f7901c'
                },
                {
                  buildHookId: '5f8746a3b7471339d3bfc116',
                  title: 'Website',
                  name: 'fsnbv2',
                  apiId: 'ceaacb28-32d5-4cf7-b8ed-94693c89fb29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wernecke/sanity-sapper-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-sapper-blog-web-cx49edh6.netlify.app',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
