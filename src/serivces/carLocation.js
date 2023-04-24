/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getAllCarLocationService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/CarLocator/Get`, {
    method: 'GET',
  })
}
