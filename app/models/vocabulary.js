import Model, { attr, hasMany } from '@ember-data/model';

export default class VocabularyModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('number') order;
  @hasMany klasses;
  @hasMany('object-property') objectProperties;
  @hasMany('datatype-property') datatypeProperties;
  @attr('string') uri;
}
