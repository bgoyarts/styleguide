// eslint-disable-next-line import/unambiguous
module.exports = {
  presets: [
    '@babel/react',
    '@babel/typescript',
    ['@babel/env', { modules: false }],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'transform-es2015-modules-commonjs',
    'dynamic-import-node',
  ],
}
