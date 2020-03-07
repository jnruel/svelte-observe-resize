import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const thisName = 'SvelteObserveResize';

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/bundle.js',
    name: thisName
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
}
