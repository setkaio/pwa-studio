const path = require('path');
const webpack = require('@magento/pwa-buildpack/lib/testHelpers/webpack/compiler');
const {
    mockTargets
} = require('@magento/pwa-buildpack/lib/testHelpers/targets');
const {
    evalScript
} = require('@magento/pwa-buildpack/lib/testHelpers/evaluate');
const declare = require('../peregrine-declare');
const intercept = require('../peregrine-intercept');

const fromProject = (...args) =>
    path.resolve(__dirname, '__fixtures__/project', ...args);

test('declares a sync target talons', () => {
    const targets = mockTargets('@magento/peregrine');
    declare(targets);
    expect(targets.own.talons.tap).toBeDefined();
    const hook = jest.fn();
    // no implementation testing in declare phase
    targets.own.talons.tap('test', hook);
    targets.own.talons.call('woah');
    expect(hook).toHaveBeenCalledWith('woah');
});

// test('intercepts compiler and calls talons in wrapEsModules phase', async () => {
//     const targets = mockTargets('@magento/venia-ui');
//     declare(targets);
//     intercept(targets);

//     const { compiler, runCompile } = webpack({
//         context: fromProject(),
//         entry: fromProject('entry.js'),
//         output: {
//             filename: 'main.js',
//             globalObject: 'global',
//             library: 'renderers',
//             libraryExport: 'default',
//             libraryTarget: 'assign'
//         },
//         target: 'node',
//         resolve: {
//             alias: {
//                 './plainHtmlRenderer': fromProject('fakePlainHtmlRenderer.js')
//             }
//         }
//     });

//     targets.of('@magento/pwa-buildpack').webpackCompiler.call(compiler);

//     const { files } = await runCompile();
//     const { renderers } = evalScript(files['main.js']);
//     expect(renderers).toHaveLength(1);
//     const { Component, canRender } = renderers[0];
//     expect(canRender()).toBeTruthy();
//     expect(Component({ html: 'BANKRUPTCY!!!' })).toBe(
//         'I declare BANKRUPTCY!!!'
//     );
// });
