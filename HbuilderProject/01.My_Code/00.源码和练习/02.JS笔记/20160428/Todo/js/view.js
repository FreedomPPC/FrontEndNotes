/**
 * Created by cuijn on 2016/4/28.
 */
var ItemView = Backbone.View.extend({
    el: 'li',
    initialize: function () {


    }
});

var TodoView = Backbone.View.extend({
    el: '#todo-list',
    initialize: function (options) {
        var self = this;
        this.model = options.model;

        this.model.on('change', function () {
            self.updateList(self.model.get('items'));
        });

        this.model.getData();
    },

    updateList: function (data) {
        //TODO:
        console.log(data);
    }
});
