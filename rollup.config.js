import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'src/ObserveTodoStore.js',
    format: 'iife',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ],
    dest: './dist/ObserveTodoStore.bundle.js'
};
