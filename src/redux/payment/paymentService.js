import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const BACKEND_URL =
  process.env.BACKEND_URL || 'http://localhost:3002/v1';

export const getVirtualAccount = async (userId) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(
      `${BACKEND_URL}/api/payment/virtual-account/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      }
    );
    // toast.success('Virtual Account Fetch Successfully');
    return response.data.virtualAccount;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
