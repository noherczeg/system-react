import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
    input: 'src/index.tsx',
    output: {
        dir: 'dist',
        format: 'system'
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __buildDate__: () => JSON.stringify(new Date()),
            __buildVersion: pkg.dependencies.react.replace(/[\^~]/g, ''),
        }),
        typescript(),
        terser(),
    ],
};
