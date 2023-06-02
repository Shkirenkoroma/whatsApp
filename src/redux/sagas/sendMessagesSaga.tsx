import { call, takeEvery, select } from 'redux-saga/effects'
import { sendMessage } from 'api'
import { AxiosResponse } from 'axios'

export function* sendMessageSaga(){
  try {
    const { chatContact,  sendingMessage } = yield select(
      (state) => state?.contacts,
    )
    console.log('message', sendingMessage)
    const data: AxiosResponse = yield call(sendMessage(chatContact, sendingMessage) as any)
    console.log('data', data)
  } catch (error) {
    console.log('error', error)
  }
}

export function* watchSendMessage() {
  yield takeEvery('contacts/sendBodyMessage', sendMessageSaga)
}
