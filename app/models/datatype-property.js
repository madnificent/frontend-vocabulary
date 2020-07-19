import Model, { attr, hasMany } from '@ember-data/model';

export default class DatatypePropertyModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('number') order;
  @hasMany('klass') domains;
  @hasMany('datatype') ranges;
}
