/**
 * 基于axios
 */
import fetch from '@assets/fetch'

const API_ROOT = process.env.API_ROOT

/**
 * 用户列表
 */
export const homeBrandList = params => fetch({
    url: `${ API_ROOT }/brdname/`,
    method: 'GET',
    params: params
})