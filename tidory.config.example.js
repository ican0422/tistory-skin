const ESLintPlugin = require('eslint-webpack-plugin')

/**
 * Tidory Configuration
 * @see https://tidory.github.io/docs/configuration/
 */
module.exports = {
  ts_session: '4d5e29aadf509d40510c69756ea64f3584c70d78',
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
