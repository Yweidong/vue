import axios from 'axios'

export function request (config) {
  // eslint-disable-next-line no-unused-vars,no-new
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  return instance(config)
}
