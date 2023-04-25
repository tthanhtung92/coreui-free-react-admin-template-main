/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getTotalAccountService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/Statistical/TotalOfAccount`, {
    method: 'GET',
  })
}
