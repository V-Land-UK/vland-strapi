module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  wysiwyg: {
    enabled: true,
    resolve: "./src/plugins/wysiwyg",
  },
  publisher: {
    enabled: true,
  },

  'preview-button':{
    enabled: true,
    config:{
      contentTypes:[
        {
          uid:'api::article.article',
          targetField:'slug',
          draft:{
            query:{
              type:'article'
            }

          },
          published:{
            basePath:'article'
          }
        }
      ]
      
    }
  },

  graphql:{
    enabled: true,
    config:{
      generateArtifacts: true,
      apolloServer:{
        tracing:true
      }
    },

  },
  seo:{
    enabled: true,

  }
  

  // ...
});
