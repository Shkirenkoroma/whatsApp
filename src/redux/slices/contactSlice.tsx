import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  newContacts: string[]
  chatContact: string
  message: string
}

const initialState = {
  newContacts: [],
  chatContact: '',
  message: '',
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
    getMessage: (state: IState, action: PayloadAction<string>) => {
      state.message = action.payload
    },
  },
})

export const { addNewContact, selectContact, getMessage } = contactSlice.actions
export default contactSlice.reducer
