import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  token: null,
  user: null,
  status: 'idle',
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload
      state.token = token
      state.user = user
    },
    logOut: (state) => {
      state.token = null
      state.user = null
    },
  },
})
export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token
