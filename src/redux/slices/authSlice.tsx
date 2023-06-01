import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IStateAuth {
  id: string
  apiToken: string
}

interface IPayload {
  id: string
  token: string
}
const initialState = {
  id: '',
  apiToken: '',
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addDataUser: (state: IStateAuth, action: PayloadAction<IPayload>) => {
      const { id, token } = action.payload
      state.id = id
      state.apiToken = token
    },
  },
})

export const { addDataUser } = authSlice.actions
export default authSlice.reducer
