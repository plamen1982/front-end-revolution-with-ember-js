import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        console.log('login - beforeModel was called');
    },
    model() {
        console.log('login - model was called');
    },
    afterModel() {
        console.log('login - afterModel was called');
    }
});
