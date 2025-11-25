import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const GetFeatures = createAsyncThunk('getfeatures', async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/Feature/list`)
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

const FeaturesSlice = createSlice({
  name: 'features',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(GetFeatures.pending, state => {
        state.loading = true
      })
      .addCase(GetFeatures.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = true
      })
      .addCase(GetFeatures.rejected, state => {
        state.loading = true
        state.status = false
      })
  }
})

export default FeaturesSlice.reducer
