import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    name: 'localematcher',
    dir: 'output',
    format: 'iife'
  },
  plugins: [nodeResolve(), terser()]
};