import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'expenses-app/config/environment';

export default Route.extend({
    ajax: service(),
    actions: {
        signup(email, password) {
            const userParams = {
                data: {
                    attributes: {
                        email,
                        password,
                        currency: 'USD'
                }
            }
        };

            this.controller.set('isSingingUp', true);

            const url = `${ENV.apiBaseURL}/users`;
            const request = this.get('ajax').request(url, {
                method: 'POST',
                data: userParams,
            });
            request
            .then(() => { this.transitionTo('login') })
            .catch((e) => { this.controller.set('signupError', 'Signup error.') })
            .finally(() => { this.controller.set('isSigningUp', false) })
        }
    }
});
