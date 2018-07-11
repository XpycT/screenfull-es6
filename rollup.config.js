import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'

import pkg from './package.json';

const input = path.resolve(__dirname, 'src/screenfull.js');

const plugins = [
  buble({
    objectAssign: 'Object.assign'
  }),
  resolve(),
  commonjs()
]

export default[
  {
    input,
    plugins,
    output: {
      name: 'ScreenFull',
      file: pkg.module,
      format: 'umd'
    }
  },
  {
    input,
    plugins,
    output: {
      name: 'ScreenFull',
      file: pkg.commonjs,
      format: 'cjs'
    }
  }, {
    input,
    plugins,
    output: {
      name: 'ScreenFull',
      file: pkg.iife,
      format: 'iife'
    }
  }
]
