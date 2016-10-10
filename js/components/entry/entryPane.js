"use strict";

var React = require('react');

var EntryPane = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      input: 'Please enter your Markdown.'
    };
  },
  render: function render() {
    return (
      <div className="entryPane">
        <textarea className="form-control"
                  placeholder={this.state.input}
                  onChange={this.props.onChange}></textarea>
      </div>
    );
  }
});

module.exports = EntryPane;
