/**
 * These targets are available for interception to modules which depend on `@magento/peregrine`.
 * Their implementations are found in `./peregrine-intercept.js`.
 */
module.exports = targets => {
    targets.declare({
        /**
         *
         */
        talons: new targets.types.Sync(['talons'])
    });
};
