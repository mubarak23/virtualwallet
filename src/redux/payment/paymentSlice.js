import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast, isLoading } from 'react-toastify';
import { getVirtualAccount } from './paymentService';

const initialState = {
  myVirtualAccount: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getmyVirtualAccount = createAsyncThunk(
  'virtualAccount/dedicated',
  async (userId, thunkAPI) => {
    try {
      return await getVirtualAccount(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    SET_VIRTUAL_ACCOUNT(state, action) {
      state.myVirtualAccount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getmyVirtualAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getmyVirtualAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.myVirtualAccount = action.payload;
      })
      .addCase(getmyVirtualAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { SET_VIRTUAL_ACCOUNT } = paymentSlice.actions;

export const selectVirtualAccount = (state) => state.payment.myVirtualAccount;

export default paymentSlice.reducer;
