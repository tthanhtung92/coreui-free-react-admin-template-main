/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const login = (params) => {
  return request(`${process.env.REACT_APP_BASE_API}/Auth/login`, {
    method: 'POST',
    data: params,
  })
}
