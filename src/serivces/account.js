/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getAllAcountService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/Account/Get`, {
    method: 'GET',
  })
}
