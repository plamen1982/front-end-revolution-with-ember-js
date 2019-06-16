import DS from 'ember-data';
import Ember from 'ember';
import { underscore } from '@ember/string';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    authorizer: 'authorizer:application',
    namespace: ENV.apiNamespace,
    host: ENV.serverURL,

    pathForType(modelName) {
        let underscoreModelName = underscore(modelName);
        return Ember.String.pluralize(underscoreModelName);
    }
});