var React = require('react');
var EntryPane = require('./entry/entryPane');
var PreviewPane = require('./preview/previewPane');

var App = React.createClass({
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
            <div className="col-lg-5 col-lg-offset-1">
              <PreviewPane />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
