import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("a", { path: '/a' });
  this.route("b", { path: '/b' });
  this.route("c", { path: '/c' });
  this.route("d", { path: '/d' });
});

export default Router;
