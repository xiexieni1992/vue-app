/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import * as types from './mutation-types';
import Vue from 'vue';
import store from '@/store';

export const check = (
  { commit }) => {
  commit(types.CHECK);
};

export const login = ({ commit }, payload) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With the include REST-client Axios, you can do something like this:
   * Vue.$http.post('/auth/login', user)
   *   .then((response) => {
   *     success(response);
   *   })
   *   .catch((error) => {
   *     failed(error);
   *   });
   */
  const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      commit(types.LOGIN, payload);
      // 登录成功,触发存入用户信息
      store.dispatch('account/setAccount');
      Vue.router.push('/account');
      resolve();
    } else {
      reject();
    }
  });
  return promise;
};

export const logout = ({ commit }) => {
  const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      commit(types.LOGOUT);
      resolve();
    } else {
      reject();
    }
  });
  return promise;
};

export default {
  check,
  login,
  logout,
};
