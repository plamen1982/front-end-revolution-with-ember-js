import DS from 'ember-data';
import Ember from 'ember';
import { underscore } from '@ember/string';
import ENV from 'expenses-app/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    authorizer: 'authorizer:application',
    host: ENV.serverUrl,
    namespace: ENV.apiNamespace,
    pathForType(modelName) {
        let underscoreModelName = underscore(modelName);
        return Ember.String.pluralize(underscoreModelName);
    }
});