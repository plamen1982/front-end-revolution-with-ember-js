import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(UnauthenticatedRouteMixin, {
    session: service(),
    actions: {
        login(username, password) {
            this.controller.set('isLoggingIn', true);
            this.get('session').authenticate('authenticator:oauth2', username, password)
            .catch(() => { this.controller.set('errorMessage', 'Invalid login.')})
            .finally(() => { this.controller.set('isLoggingIn', false) })
        }
    }

});
