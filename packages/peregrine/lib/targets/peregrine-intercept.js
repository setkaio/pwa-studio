const path = require('path');
const WrapLoaderConfig = require('@magento/pwa-buildpack/lib/WebpackTools/WrapLoaderConfig');

/**
 *
 *
 * @class TalonWrapperConfig
 * @extends {WrapLoaderConfig}
 * @hideconstructor
 */
class TalonWrapperConfig extends WrapLoaderConfig {
    /**
     * @private
     */
    _provideSet(modulePath, ...rest) {
        return super._provideSet(
            path.resolve(__dirname, '../talons/', modulePath),
            ...rest
        );
    }
    /**
     * @type {Set}
     * Paths to all the interceptors that will wrap the `useProductFullDetail`
     * talon. They will execute in order as a composed function.
     *
     * @readonly
     * @memberof TalonWrapperConfig
     */
    get useProductFullDetail() {
        return this._provideSet(
            'ProductFullDetail/useProductFullDetail.js',
            'useProductFullDetail'
        );
    }
    /**
     * @type {Set}
     * Paths to all the interceptors that will wrap the `useApp` talon. They
     * will execute in order as a composed function.
     *
     * @readonly
     * @memberof TalonWrapperConfig
     */
    get useApp() {
        return this._provideSet('App/useApp.js', 'useApp');
    }
}

module.exports = targets => {
    targets.of('@magento/pwa-buildpack').wrapEsModules.tap(wrapConfig => {
        const talonWrapperConfig = new TalonWrapperConfig(wrapConfig);
        targets.own.talons.call(talonWrapperConfig);
        return wrapConfig;
    });
};
