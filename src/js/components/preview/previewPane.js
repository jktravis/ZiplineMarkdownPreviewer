"use strict";

var React = require('react');
var marked = require('marked');

var PreviewPane = React.createClass({
  propTypes: {
    markdown: React.PropTypes.object.isRequired
  },

  rawMarkup: function rawMarkup(text) {
    var raw = marked(text.toString(), {sanitize: true});
    return {__html: raw};
  },

  render: function () {
    return (
      <div className="previewPane form-control"
           dangerouslySetInnerHTML={this.rawMarkup(this.props.markdown)}>
      </div>
    );
  }
});

module.exports = PreviewPane;
