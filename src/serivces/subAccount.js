/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getAllSubAccountService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/SubAccount/Get`, {
    method: 'GET',
  })
}
