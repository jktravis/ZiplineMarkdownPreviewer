"use strict";
var React = require('react');
var EntryPane = require('./entry/entryPane');
var PreviewPane = require('./preview/previewPane');
var marked = require('marked');

var App = React.createClass({
  getInitialState: function () {
    return {
      markdown: '**This** has `been` *markeddown*'
    };
  },

  render: function render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <h1>Markdown Previewer</h1>
          </div>
          <div className="row">
            <div className="col-lg-5 col-lg-offset-1">
              <EntryPane />
            </div>
            <div className="col-lg-5">
              <PreviewPane markdown={this.state.markdown}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
