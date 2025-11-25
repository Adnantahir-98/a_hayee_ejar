import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const GetPropertyTypes = createAsyncThunk('getpropertytypes', async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/PropertyType/list`)
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

const TypesSlice = createSlice({
  name: 'areatypes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(GetPropertyTypes.pending, state => {
        state.loading = true
      })
      .addCase(GetPropertyTypes.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = true
      })
      .addCase(GetPropertyTypes.rejected, state => {
        state.loading = true
        state.status = false
      })
  }
})

export default TypesSlice.reducer
