import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import contactReducer from './slices/contactSlice'
import authReducer from './slices/authSlice'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
export default store
