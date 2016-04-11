"use strict";

var React = require('react');
var marked = require('marked');

var PreviewPane = React.createClass({
  getInitialState: function getInitialState() {
    return {
      markdown: ('**This** has `been` *markeddown*')
    };
  },
  rawMarkup: function rawMarkup(text) {
    var raw = marked(text.toString(), {sanitize: true});
    return {__html: raw};
  },

  render: function () {
    return (
      <div className="previewPane form-control"
           dangerouslySetInnerHTML={this.rawMarkup(this.state.markdown)}>
      </div>
    );
  }
});

module.exports = PreviewPane;
