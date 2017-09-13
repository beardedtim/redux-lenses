import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

var config = {
  format: 'umd',
  moduleName: 'ReactMenu',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ],
  external: ['react', 'prop-types', 'classnames'],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
    classnames: 'classnames'
  }
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
