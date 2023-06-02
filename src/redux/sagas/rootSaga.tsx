import { all } from 'redux-saga/effects'
import { watchRecieveMessage } from './recieveMessagesSaga'
import { watchSendMessage } from './sendMessagesSaga'

export default function* rootSaga() {
  yield all([watchSendMessage(), watchRecieveMessage()])
}
