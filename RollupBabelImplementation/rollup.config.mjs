import babel from '@rollup/plugin-babel';

export default {
  input: 'main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyBundle'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env']
    })
  ]
};
