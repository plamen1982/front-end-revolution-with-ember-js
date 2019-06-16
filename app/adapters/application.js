import DS from 'ember-data';
import Ember from 'ember';
import { underscore } from '@ember/string';
import ENV from 'expenses-app/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.serverUrl,
    namespace: ENV.apiNamespace,
    pathForType(modelName) {
        let underscoreModelName = underscore(modelName);
        return Ember.String.pluralize(underscoreModelName);
    }
});
