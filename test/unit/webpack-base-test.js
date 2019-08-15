const assert = require('assert');

describe('webpack.base.js test case', () => {

    const baseConfig = require('../../lib/webpack.base.js');

    console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexOf('smoke/template/src/pages/index/index.js') > -1, true)
        assert.equal(baseConfig.entry.search.indexOf('smoke/template/src/pages/search/index.js') > -1, true)
    })
})