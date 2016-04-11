"use strict";

var React = require('react');

var EntryPane = React.createClass({
  getInitialState: function getInitialState() {
    return {
      input: 'Please entry your Markdown.'
    };
  },
  render: function render() {
    return (
      <div className="entryPane">
        <textarea className="form-control" placeholder={this.state.input}></textarea>
      </div>
    );
  }
});

module.exports = EntryPane;
