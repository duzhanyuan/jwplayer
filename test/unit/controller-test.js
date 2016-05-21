define([
    'test/underscore',
    'jquery',
    'controller/controller',
    'data/config-small'
], function (_, $, Controller) {
    /* jshint qunit: true */

    function instantiateController(id) {
        var container = createContainer(id);
        return new Controller(container);
    }

    function createContainer(id) {
        var container = $('<div id="' + id + '"></div>')[0];
        $('#qunit-fixture').append(container);
        return container;
    }

    QUnit.module('Controller');
    var test = QUnit.test.bind(QUnit);

    test('instantiate', function(assert) {
        var controller = instantiateController();
        assert.ok(controller instanceof Controller);
    });


});
