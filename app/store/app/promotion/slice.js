import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const SubmitMultiPromotion = createAsyncThunk(
    'submitmultipromotion',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/api/Promotions/submit-multi`, body);

            toast.success(response.data.message);
            return response.data.data;
            // if (response.data.status === true) {
            //     toast.success(response.data.message);
            //     return response.data.data;
            // } else {
            //     toast.error(response.data.message || 'Failed to submit promotion');
            //     return rejectWithValue(response.data.message);
            // }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong');
            return rejectWithValue(error.response?.data || 'Submission failed');
        }
    }
);


const initialState = {
    data: [],
    status: false,
    loading: false
}


const PromotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    extraReducers: builder => {
        builder
            // Add these cases to your builder inside extraReducers
            .addCase(SubmitMultiPromotion.pending, (state) => {
                state.loading = true;
            })
            .addCase(SubmitMultiPromotion.fulfilled, (state, action) => {
                state.loading = false;
                // Assuming this returns the newly added item to update local state
                state.data = [...state.data, action.payload];
                state.status = true;
            })
            .addCase(SubmitMultiPromotion.rejected, (state) => {
                state.loading = false;
                state.status = false;
            })
    }
})

export default PromotionsSlice.reducer