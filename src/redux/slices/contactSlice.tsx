import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  newContacts: string[]
  chatContact: string
  sendingMessage: string
  recieveMessage: string[]
  recieveMessagesContact: string
}

const initialState = {
  newContacts: [],
  chatContact: '',
  sendingMessage: '',
  recieveMessage: [],
  recieveMessagesContact: '',
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: (state: IState, action: PayloadAction<string>) => {
      state.newContacts.push(action.payload)
    },
    selectContact: (state: IState, action: PayloadAction<string>) => {
      state.chatContact = action.payload
    },
    sendBodyMessage: (state: IState, action: PayloadAction<string>) => {
      state.sendingMessage = action.payload
    },
    recieveBodyMessage: (state: IState) => {
      console.log('start a saga from dispatch adad')
    },
    showRecieveMessage: (state: IState, action: PayloadAction<string>) => {
      state.recieveMessage.push(action.payload)
    },
    showRecieveContact: (state: IState, action: PayloadAction<string>) => {
      state.newContacts.push(action.payload)
    },
  },
})

export const {
  addNewContact,
  selectContact,
  sendBodyMessage,
  recieveBodyMessage,
  showRecieveMessage,
  showRecieveContact,
} = contactSlice.actions
export default contactSlice.reducer
