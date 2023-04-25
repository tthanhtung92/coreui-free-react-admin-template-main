/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getTotalCarService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/Statistical/TotalOfCar`, {
    method: 'GET',
  })
}
