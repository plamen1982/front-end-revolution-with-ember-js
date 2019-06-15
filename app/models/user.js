import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    currency: DS.attr('string'),
    email: DS.attr('string'),
});
