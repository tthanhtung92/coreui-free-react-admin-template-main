/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getAllCarService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/CarManagement/Get`, {
    method: 'GET',
  })
}
