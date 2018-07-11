import fs from 'fs'
import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import {uglify} from 'rollup-plugin-uglify'

import pkg from './package.json';

const commitHash = (function () {
  try {
    return fs.readFileSync('.commithash', 'utf-8');
  } catch (err) {
    return 'unknown';
  }
})();

const now = new Date(
  process.env.SOURCE_DATE_EPOCH ? process.env.SOURCE_DATE_EPOCH * 1000 : new Date().getTime()
).toUTCString();

const banner = `/*!
 * screenfull-es6.js v${pkg.version}, ${pkg.description}
 * ${now} - commit ${commitHash}
 * (c) ${new Date().getFullYear()} Aleksandr Tar <XpycT.TOP@gmail.com>
 *
 * ${pkg.homepage}
 *
 * Released under the MIT License.
 */`;

const input = path.resolve(__dirname, 'src/screenfull.js');

const plugins = [
  buble({
    objectAssign: 'Object.assign'
  }),
  resolve(),
  commonjs()
];

export default[
  {
    input,
    plugins,
    output: [
      {file: pkg.module, format: 'es', sourcemap: false, banner},
      {file: pkg.main, format: 'umd', sourcemap: false, banner, name: "ScreenFull"},
      {file: pkg.iife, format: 'iife', sourcemap: false, banner, name: "ScreenFull"}
    ]
  },{
    input,
    plugins: [uglify()].concat(plugins || []),
    output: [
      {file: pkg.unpkg, format: 'umd', sourcemap: true, name: 'ScreenFull'},
      {file: pkg.iifemin, format: 'iife', sourcemap: true, name: 'ScreenFull'}
    ]
  }
]
