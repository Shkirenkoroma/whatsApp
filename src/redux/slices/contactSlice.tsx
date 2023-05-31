import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  newContacts: string[]
  selectContact: string
}

const initialState = {
  newContacts: [],
  selectContact: '',
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: (state: IState, action: PayloadAction<string>) => {
      state.newContacts.push(action.payload)
    },
    selectContact: (state: IState, action: PayloadAction<string>) => {
      state.selectContact = action.payload
    },
  },
})

export const { addNewContact, selectContact } = contactSlice.actions
export default contactSlice.reducer
