import { call, put, takeEvery } from 'redux-saga/effects'
import { deleteNotification, receiveMessage } from 'api'
import { AxiosResponse } from 'axios'
import {
  showRecieveMessage,
  showRecieveContact,
} from 'redux/slices/contactSlice'

export function* recieveMessageSaga() {
  try {
    console.log('start a reievev saga')
    const { data }: AxiosResponse = yield call(receiveMessage as any)
    console.log('respnsedata', data)
    if (data) {
      const responseBody = data.body
      if (
        responseBody.typeWebhook === 'incomingMessageReceived' &&
        responseBody.messageData.typeMessage === 'textMessage'
      ) {
        yield put(
          showRecieveMessage(
            responseBody.messageData.textMessageData.textMessage,
          ),
        )
        yield put(showRecieveContact(responseBody.senderData.chatId))
        deleteNotification(data.receiptId)
        return responseBody
      }
      deleteNotification(data.receiptId)
    }
    console.log('data a saga', data)
  } catch (error) {
    console.log('error', error)
  }
}

export function* watchRecieveMessage() {
  yield takeEvery('contacts/recieveBodyMessage', recieveMessageSaga)
}
