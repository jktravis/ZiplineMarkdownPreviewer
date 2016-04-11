var React = require('react');
var ReactDOM = require('react-dom');

var App = ReactDOM.createClass({
  render: function render() {
    return (
      <div>
        <div className="container-fluid">
          Hello, World
        </div>
      </div>
    );
  }
});

module.exports = App;
