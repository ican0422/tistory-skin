const ESLintPlugin = require('eslint-webpack-plugin')

/**
 * Tidory Configuration
 * @see https://tidory.github.io/docs/configuration/
 */
module.exports = {
  ts_session: '78c01e2d4d64d90f7b365a60ffd6ac5a6e5e824e',
  url: 'https://hyun-my-it-blog.tistory.com',

  preview: {
    /**
     * homeType
     *
     * NONE
     * COVER
     */
    homeType: 'NONE',

    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag
     * guestbook
     */
    mode: 'index'
  },

  /**
   * Alias
   */
  alias: {
    '@': 'assets'
  },

  /**
   * Webpack Configuration
   *
   * @param {object} webpackConfig
   */
  extends (webpackConfig) {
    webpackConfig.plugins = [
      new ESLintPlugin({ configType: 'flat' }),
      ...webpackConfig.plugins
    ]
  }
}
