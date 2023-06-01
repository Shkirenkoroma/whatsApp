import axios, { AxiosResponse } from 'axios'
import { authDataUser } from 'utils'

const idInstance = authDataUser.id
const apiTokenInstance = authDataUser.token

export const sendMessage = async (number: string, message: string):Promise<AxiosResponse<any>> => {
  console.log('idInstance in function', idInstance)
  console.log('apiTokenInstance', apiTokenInstance)
  const body = {
    chatId: `${number}@c.us`,
    message: `${message}`,
  }
  return await axios.post(
    `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
    body,
  )
}
