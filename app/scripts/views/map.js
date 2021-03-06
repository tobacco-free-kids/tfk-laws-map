/*global TfkLaws, Backbone, JST*/

TfkLaws.Views = TfkLaws.Views || {};

(function () {
    'use strict';

    TfkLaws.Views.Map = Backbone.View.extend({

        template: JST['app/scripts/templates/map.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
