"use strict";
var React = require('react');
var EntryPane = require('./entry/entryPane');
var PreviewPane = require('./preview/previewPane');

var App = React.createClass({
  getInitialState: function () {
    return {
      markdown: '**This** has `been` *markeddown*'
    };
  },

  setMarkdownState: function (event) {
    return this.setState({markdown: event.target.value});
  },

  render: function render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <header>
              <h1 className="text-primary">Markdown Previewer</h1>
            </header>
          </div>
          <div className="row">
            <div className="col-lg-5 col-lg-offset-1 col-md-6 col-sm-6 col-xs-6">
              <EntryPane onChange={this.setMarkdownState}/>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-6">
              <PreviewPane markdown={this.state.markdown}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
