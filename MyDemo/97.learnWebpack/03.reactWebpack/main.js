var React = require('react');
var ReactDOM = require('react-dom');
var MainComponent = React.createClass({
    render: function() {
        return ( 
            <h1> Hello React JSX </h1>
        )
    }
});
ReactDOM.render( <
    MainComponent / > ,
    document.getElementById('app')
);