const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   //设计稿等分之后的值，等分的比例同页面rem的比例是一致的
})


module.exports = {
  lintOnSave: false, // 关闭EsLint的规则
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}