import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    changeType: DS.attr('string'),
    entryDate: DS.attr('string'),
    value: DS.attr('number') //cents
});
