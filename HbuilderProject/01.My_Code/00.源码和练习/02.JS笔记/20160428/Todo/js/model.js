/**
 * Created by cuijn on 2016/4/28.
 */

var items = [{
    complete: true,
    content: 'have meal'
}, {
    complete: false,
    content: 'take a shower'
}, {
    complete: true,
    content: 'have a sleep'
}];

var TodoModel = Backbone.Model.extend({
    initialize: function () {
        //this.getData();
    },

    getData: function () {
        this.set({
            items: items
        })
    }
});