/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getTotalHistoryService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/Statistical/TotalOfHistory`, {
    method: 'GET',
  })
}
