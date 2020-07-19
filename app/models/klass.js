import Model, { attr, hasMany } from '@ember-data/model';

export default class KlassModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @hasMany('datatype-property') datatypeProperties;
  @hasMany('object-property') objectProperties;
  @hasMany vocabularies;
}
