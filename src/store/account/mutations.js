/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { SETACCOUNT } from './mutation-types';

export default {
  [SETACCOUNT](state, account) {
    state.account = account;
  },
};
