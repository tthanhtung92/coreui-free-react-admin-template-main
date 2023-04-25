/* eslint-disable prettier/prettier */
import request from '../utils/request'
export const changeCarStatusService = (params) => {
  return request(`${process.env.REACT_APP_BASE_API}/CarManagement/ChangeStatus/${params}`, {
    method: 'GET',
  })
}
