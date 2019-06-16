import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from 'expenses-app/config/environment';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
    session: service(),
    sessionAuthenticated() {
        this._super(...arguments); //for keeping the defaults (attempted transition, routeAfterAuth config etc..);
        this.loadUser();
    },
    loadUser() {
        if(!this.get('session.isAuthenticated')) {
            return;
        }

    this.store.findRecord('user', 'me')
        .then((user) => {
            this.set('session.currentUser', user);
        }).catch((e) => {
            console.log(e)
        })
    },
    beforeModel() {
        this._super(...arguments);
        this.loadUser();
    }
});
