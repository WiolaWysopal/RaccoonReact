import logModuleNamePlugin from './logModuleNamePlugin.mjs';

export default {
  input: 'main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyBundle'
  },
  plugins: [
    logModuleNamePlugin()
  ]
};
