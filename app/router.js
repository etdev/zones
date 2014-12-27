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

  this.route("navbar1");
  this.route("navbar2");
  this.route("navbar3");
});

export default Router;
