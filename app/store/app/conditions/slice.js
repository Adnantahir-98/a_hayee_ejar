import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const GetConditions = createAsyncThunk('getconditions', async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/Condition/list`)
    return data
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  data: [],
  status: false,
  loading: false
}

const ConditionsSlice = createSlice({
  name: 'conditions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(GetConditions.pending, state => {
        state.loading = true
      })
      .addCase(GetConditions.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = true
      })
      .addCase(GetConditions.rejected, state => {
        state.loading = true
        state.status = false
      })
  }
})

export default ConditionsSlice.reducer
