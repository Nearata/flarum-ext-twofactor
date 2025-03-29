import Model from 'flarum/common/Model';

export default class TwoFactor extends Model {
  type = Model.attribute<string>('type');
  createdAt = Model.attribute('createdAt', Model.transformDate);
}
