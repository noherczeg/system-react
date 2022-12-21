import { readFileSync } from 'node:fs';
import { normalize } from 'node:path';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import { copyObjects } from './rollup/utils.js';

const pkg = JSON.parse(readFileSync(normalize('./package.json'), { encoding:'utf8', flag:'r' }).toString());
const ENV = process.env.NODE_ENV;

export default {
    input: 'src/index.tsx',
    output: {
        dir: 'dist',
        format: 'system',
        sourcemap: ENV === 'production',
    },
    plugins: [
        clear({
            targets: ['dist'],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'), // shake off jsx-runtime dev-mode...
        }),
        commonjs(),
        nodeResolve(),
        typescript(),
        copy({
            targets: [
                { src: 'public/*', dest: 'dist' },
                copyObjects('systemjs', '/dist'),
                copyObjects('axios', '/dist'),
                copyObjects('material-icons', '/iconfont'),
                copyObjects('@fontsource/roboto', ''),
                copyObjects('dayjs', '/dayjs.min.js', true),
                copyObjects('react', '/umd'),
                copyObjects('react-dom', '/umd'),
                copyObjects('i18next', '/dist/umd'),
                copyObjects('react-i18next', '/dist/umd'),
                copyObjects('@remix-run/router', '/dist'),
                copyObjects('react-router', '/dist/umd'),
                copyObjects('react-router-dom', '/dist/umd'),
                copyObjects('@emotion/react', '/dist'),
                copyObjects('@emotion/styled', '/dist'),
                copyObjects('@mui/material', '/umd'),
            ],
        }),
    ],
    external: [
        ...Object.keys(pkg.dependencies).filter(name => name !== '@mui/x-data-grid' && name !== '@mui/x-date-pickers')
    ],
};
