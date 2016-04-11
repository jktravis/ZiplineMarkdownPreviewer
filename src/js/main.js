require('../../vendor/bootstrap/css/bootstrap.css');
require('../../vendor/bootstrap/css/bootstrap-theme.css');
require('../../vendor/bootstrap/js/bootstrap');
require('../css/main.scss');

var marked = require('marked');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, Real world!</h1>,
  document.getElementById('example')
);
console.log('hello, real world');

$('.jumbotron').html('For reelz, Herro!');
