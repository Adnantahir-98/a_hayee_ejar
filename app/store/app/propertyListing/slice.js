import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const GetPropertyListing = createAsyncThunk('getpropertylisting', async (body, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${baseURL}/api/Listing/GetAll`, body)
    return data.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch property listings');
  }
})

export const GetCustomerPropertyListing = createAsyncThunk('getcustomerpropertylisting', async (body, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${baseURL}/api/Listing/GetByCustomer`, body)
    return data.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch property listings');
  }
})
// export const AddPropertyListing = createAsyncThunk('addpropertylisting', async(body,{ rejectWithValue }) =>{
//   try {
//     await axios.post(`${baseURL}/api/Listing/Add`,body)
//     .then(response => {
//         // success
//         if(response.data.status === true){
//           toast.success('Congrats! Your property saved successfully.')
//         }else{
//           toast.error(''+response.data.message)
//         }
//         return response.data.data
//     })
//     .catch((error) => {
//         toast.error(''+error)
//         return rejectWithValue(error.response?.data || 'Failed to fetch property listings');
//     })
//   } catch (error) {
//     return rejectWithValue(error.response?.data || 'Failed to fetch property listings');
//   }
// })

export const AddPropertyListing = createAsyncThunk(
  'addpropertylisting',
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/api/Listing/Add`, body);
      if (response.data.status === true) {
        toast.success('Congrats! Your property saved successfully.');
      } else {
        toast.error(response.data.message || 'Unknown error');
      }
      return response.data.data;
    } catch (error) {
      toast.error('' + error);
      return rejectWithValue(error.response?.data || 'Failed to fetch property listings');
    }
  }
);


export const GetPropertyListingById = createAsyncThunk('getpropertylistingbyid', async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/api/Listing/GetById?id=${id}`)
    return data.data
  } catch (error) {
    console.log(error)
  }
})


const initialState = {
  data: [],
  status: false,
  loading: false
}

const PropertyListingSlice = createSlice({
  name: 'propertylisting',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(GetPropertyListing.pending, state => {
        state.loading = true
      })
      .addCase(GetPropertyListing.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = true
      })
      .addCase(GetPropertyListing.rejected, state => {
        state.loading = true
        state.status = false
        state.data = [];
      })

      .addCase(GetCustomerPropertyListing.pending, state => {
        state.loading = true
      })
      .addCase(GetCustomerPropertyListing.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = true
      })
      .addCase(GetCustomerPropertyListing.rejected, state => {
        state.loading = true
        state.status = false
        state.data = [];
      })
      

      .addCase(AddPropertyListing.pending, state => {
        state.loading = true
      })

      .addCase(AddPropertyListing.fulfilled, (state, action) => {
        state.loading = false
        state.data = [...state.data, action.payload]
        state.status = true
      })
      .addCase(AddPropertyListing.rejected, state => {
        state.loading = true
        state.status = false
      })

      .addCase(GetPropertyListingById.pending, state => {
        state.loading = true
      })
      .addCase(GetPropertyListingById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.status = true
      })
      .addCase(GetPropertyListingById.rejected, state => {
        state.loading = true
        state.status = false
      })
  }
})

export default PropertyListingSlice.reducer