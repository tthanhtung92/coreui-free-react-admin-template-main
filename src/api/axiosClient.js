/* eslint-disable prettier/prettier */
import axios from 'axios'

export default axios.create({
  baseURL: 'https://camerabase20230411003840.azurewebsites.net/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    // Authorization: `bearer ${JSON.parse(localStorage.getItem('jwt'))}`,
  },
})
