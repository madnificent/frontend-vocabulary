import Model, { attr } from '@ember-data/model';

export default class DatatypeModel extends Model {
  @attr('string') title;
  @attr('string') description;
}
