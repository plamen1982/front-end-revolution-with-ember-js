import Route from '@ember/routing/route';

export default Route.extend({
    
    beforeModel() {
        console.log('signup - beforeModel was called');
    },

    model() {
        console.log('signup - model was called');
    },

    afterModel() {
        console.log('signup - afterModel was called');
    }
});
