/**
 * 基于axios
 */
import fetch from './fetch/default'

/**
 * 用户列表
 */
export const homeBrandList = params => fetch({
    url: `/brdname/`,
    method: 'GET',
    params: params
})

/**
 * 用户列表
 */
// export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
//             mobile: phone,
//             scene: 'login',
//             type: 'sms'
//         }, 'POST);