// // This is where project configuration and plugin options are located.
// // Learn more: https://gridsome.org/docs/config

// // Changes here require a server restart.
// // To restart press CTRL + C in terminal and run `gridsome develop`

// const tailwindcss = require('tailwindcss');
// const purgecss = require('@fullhuman/postcss-purgecss');

// const postcssPlugins = [tailwindcss()];

// if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

// module.exports = {
//   siteName: 'Slatarian Snacks',
//   siteDescription: 'Snacks for Slatarians',
//   siteUrl: 'https://slatariansnacks.netlify.com',
//   icon: './src/favicon.png',
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: postcssPlugins
//       }
//     }
//   }
// };

// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Snacks for Slatarians',
  siteUrl: 'https://slatariansnacks.netlify.com',
  siteDescription: 'Snacks for Slatarians',

  chainWebpack: config => {
    config.module
      .rule('css') // css, sass, scss, less, postcss, stylus
      .oneOf('normal') // normal, module
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(
          ...[
            require('postcss-import'),
            require('tailwindcss')('./tailwind.config.js'),
            require('postcss-preset-env')({
              stage: 0,
              autoprefixer: false
              // features: {
              //   'nesting-rules': {
              //     bubble: ['apply', 'variants', 'responsive', 'screen'],
              //   },
              // },
            })
          ]
        );

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[require('@fullhuman/postcss-purgecss')]);
        }

        return options;
      });

    //   config.module
    //     .rule('vue')
    //     .use('vue-svg-inline-loader')
    //     .loader('vue-svg-inline-loader')
    //     .options({ /* ... */ })
  },

  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE_ID, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
};
