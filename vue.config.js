
const debug = process.env.NODE_ENV !== 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const Timestamp = new Date().getTime()

module.exports = {
  // 静态资源目录 (js, css, img, fonts)
  publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,

  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md   webpack链接API，用于生成和修改webapck配置
  chainWebpack: (config) => {
      config.entry('main').add('babel-polyfill')
      config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
        .loader('babel-loader')
        .end()        
      if (debug) {
      // 本地开发配置
      } else {
      // 生产开发配置
      }
  },

  configureWebpack:config => {
      return {
          output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
              filename: `[name]${Timestamp}.js`,
              chunkFilename: `[name]${Timestamp}.js`
          },
          plugins:[new CompressionWebpackPlugin({
              test:/\.js$|\.html$|\.css/,
              threshold:10240,
              deleteOriginalAssets:false
          }),
          
      ]    
      }
  },

  // configureWebpack: { // webpack 配置
  //     
  //   },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置 配置高于chainWebpack中关于css loader的配置
  css: {
    loaderOptions: {
      less: {
        modifyVars: {

          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },

  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,

  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        // 目标 API 地址
      target: process.env.NODE_ENV === "dev"?'http://127.0.0.1:3000/api/':'http://www.ergouzi.com.cn:3000/api/',
      changeOrigin: true,
          pathRewrite: {                
            '^/api': ''
        }
        
      }
    }, // 设置代理
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    before: app => {}
    },

  // 第三方插件配置
  pluginOptions: {
  // ...
  }
}
