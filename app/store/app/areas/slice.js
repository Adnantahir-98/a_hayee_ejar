import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const GetAreas = createAsyncThunk('getareas', async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/Area/list`)
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

const AreasSlice = createSlice({
  name: 'areas',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(GetAreas.pending, state => {
        state.loading = true
      })
      .addCase(GetAreas.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = true
      })
      .addCase(GetAreas.rejected, state => {
        state.loading = true
        state.status = false
      })
  }
})

export default AreasSlice.reducer
