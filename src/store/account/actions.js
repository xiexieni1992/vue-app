import * as types from './mutation-types';

export const setAccount = ({ commit }) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With the include REST-client Axios, you can do something like this:
   * Vue.$http.get('/account')
   *   .then((response) => {
   *     success(response);
   *   })
   *   .catch((error) => {
   *     failed(error);
   *   });
   */
  const promise = new Promise((resolve, reject) => {
    const succeed = true;
    if (succeed) {
      const account = {
        firstName: 'toni',
        lastName: 'qian',
        email: 'toniqian@qq.com',
      };
      commit(types.SETACCOUNT, account);
      resolve();
    } else {
      reject();
    }
  });
  return promise;
};

export default {
  setAccount,
};
