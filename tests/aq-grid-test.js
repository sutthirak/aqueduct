module.exports = {
    'test aq-grid' : function (browser) {
        browser
            .url('http://localhost:9003/')
            .waitForElementVisible('body', 2000)
            .assert.visible('aq-grid')
            .assert.attributeEquals("aq-grid", "field", "name1=label1&name2=label2")
            .end();
    }
};
