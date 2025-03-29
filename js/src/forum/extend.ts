import Extend from 'flarum/common/extenders';
import User from 'flarum/common/models/User';
import TwoFactor from './models/TwoFactor';

export default [
  new Extend.Store()
    .add('twoFactor', TwoFactor),

  new Extend.Model(User)
    .hasMany<TwoFactor>('twoFactor')
];
