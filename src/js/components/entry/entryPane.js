"use strict";

var React = require('react');

var EntryPane = React.createClass({
  getInitialState: function getInitialState() {
    return {
      input: 'This is an Entry pane.'
    };
  },
  render: function render() {
    return (
      <div>
        <textarea>{this.state.input}</textarea>
      </div>
    );
  }
});

module.exports = EntryPane;
