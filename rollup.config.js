import { readFileSync } from 'node:fs';
import { normalize } from 'node:path';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import define from 'rollup-plugin-define';

const pkg = JSON.parse(readFileSync(normalize('./package.json'), { encoding:'utf8', flag:'r' }).toString());

const ENV = process.env.NODE_ENV;

function parseDependencyJSON(depName) {
    const from = normalize(`./node_modules/${depName}/package.json`);
    return JSON.parse(readFileSync(from, { encoding:'utf8', flag:'r' }).toString());
}

function getEffectiveVersionForDependency(d) {
    return parseDependencyJSON(d).version;
}

function systemCopyObject(depName, suffix, skipFolder = false) {
    return {
        src: `node_modules/${depName}` + (suffix ? suffix : '') + (!skipFolder ? '/*' : ''),
        dest: `dist/${depName}@${getEffectiveVersionForDependency(depName)}` + (!skipFolder ? suffix : ''),
    };
}

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
        define({
            replacements: {
                'process.env.NODE_ENV': '"production"', // shake off jsx-runtime dev-mode...
            }
        }),
        commonjs(),
        nodeResolve(),
        typescript(),
        // ...[ENV === 'production' ? terser() : undefined],
        copy({
            targets: [
                { src: 'public/*', dest: 'dist' },
                systemCopyObject('systemjs', '/dist'),
                systemCopyObject('react', '/umd'),
                systemCopyObject('react-dom', '/umd'),
                systemCopyObject('@mui/material', '/umd'),
            ],
        }),
    ],
    external: [
        ...Object.keys(pkg.dependencies)
    ],
};
