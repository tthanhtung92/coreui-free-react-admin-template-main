/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getTotalSubAccountService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/Statistical/TotalOfSubAccount`, {
    method: 'GET',
  })
}
