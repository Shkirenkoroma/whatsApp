import axios from 'axios'
import { authDataUser } from 'utils'

const idInstance = authDataUser.id
const apiTokenInstance = authDataUser.token

export const sendMessage = async (
  number: string,
  message: string,
): Promise<any> => {
  try {
    const body = {
      chatId: `${number}@c.us`,
      message: `${message}`,
    }
    console.log('start a function')
    const response = await axios.post(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      body,
    )
    return response
  } catch (error) {
    console.log('error', error)
  }
}

export const deleteNotification = async (receiptId: string): Promise<any> => {
  try {
    const response = await axios.delete(
      `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`,
    )
    return response
  } catch (error) {
    console.error(error)
  }
}

export const receiveMessage = async (): Promise<any> => {
  try {
    const data  = await axios.get(
      `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
    )
    console.log('data in recieve', data)
 
    return data
  } catch (error) {
    console.log(error)
  }
}
