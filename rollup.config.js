import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only'
import postcss from 'rollup-plugin-postcss'
import precss from 'precss';
// import cssVariables from 'postcss-css-variables';
import cssVars from 'css-vars-ponyfill';

const config = {
  input: ['src/main.js'],
  output: {
    dir: './dist',
    format: 'iife' // or system
  },
  plugins: [
    minifyHTML(),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      babelHelpers: 'bundled'
    }),
    resolve({ browser: true }),
    commonjs(),
    // css({ output: 'button.css' }),
    postcss({
      extract: true,
      minimize: true,
      plugins: [
        // precss()
        // cssVariables()
        cssVars()
      ]
    }),
    terser() // minificar
  ]
};

export default config;