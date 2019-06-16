import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('dashboard', { path: '/' }, function() {
    this.route('overview');
    this.route('incomes', function() {});
    this.route('expenses', function() {});
  });
});

export default Router;
