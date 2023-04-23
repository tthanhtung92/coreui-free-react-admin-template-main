/* eslint-disable prettier/prettier */
import axiosClient from './axiosClient'

const authApi = {
  login(body) {
    const url = `Auth/login`
    return axiosClient.post(url, body)
  },
}

export default authApi
