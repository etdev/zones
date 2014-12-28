import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("a");
  this.route("b");
  this.route("c");
  this.route("d");
});

export default Router;
