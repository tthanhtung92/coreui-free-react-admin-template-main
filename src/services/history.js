/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const getAllHistoryService = () => {
  return request(`${process.env.REACT_APP_BASE_API}/NotifiHistory/Get`, {
    method: 'GET',
  })
}
