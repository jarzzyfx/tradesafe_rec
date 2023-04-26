

import axios from 'axios'

export const sendRequest = async (value, method, url) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: value
    })
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
