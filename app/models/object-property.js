import Model, { attr, hasMany } from '@ember-data/model';

export default class ObjectPropertyModel extends Model {
  @attr('string') label;
  @attr('string') comment;
  @hasMany('klass') domains;
  @hasMany('klass') ranges;
}
