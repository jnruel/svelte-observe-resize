import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const thisName = 'SvelteObserveResize';

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/index.js',
    name: thisName
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
