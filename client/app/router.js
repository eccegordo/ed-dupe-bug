import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("post", function() {});
  this.resource("comment", function() {});
});

export default Router;
