import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("portfolio");
  this.route("about");
  this.route("resume");
});

export default Router;
