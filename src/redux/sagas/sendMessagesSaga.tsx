// import { call, takeEvery } from 'redux-saga/effects'
// import { sendMessage } from 'api'

export function* sendMessageSaga(): Generator<any> {
  try {
    // const { chatContact, message }: any = yield select(
    //   (state) => state?.contacts,
    // )
    // const data: any = yield call(sendMessage)
    // console.log('data', data)
  } catch (error) {
    console.log('error', error)
  }
}

// export function* watchSendMessage() {
//   yield takeEvery('contacts/getMessage', sendMessageSaga)
// }
