import axios from 'axios';
import { toast } from 'react-toastify';

export const BACKEND_URL = 'https://wallet-service-ddmd.onrender.com/api';
// 'http://localhost:3200/api';
// process.env.BACKEND_URL || 'https://demo-wallet.onrender.com/v1';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export const getVirtualAccount = async (userId) => {
  try {
    const token = localStorage.getItem('token');

    axiosConfig.headers['x-access-token'] = JSON.parse(token);
    const response = await axios.get(
      `${BACKEND_URL}/payments/paystack/dedicated-account`,
      axiosConfig
    );
    // toast.success('Virtual Account Fetch Successfully');
    return response.data.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const getWalletTransaction = async (pageNumber) => {
  try {
    const token = localStorage.getItem('token');
    axiosConfig.headers['x-access-token'] = JSON.parse(token);
    const response = await axios.get(
      `${BACKEND_URL}/wallet/transactions?pageNumber=${pageNumber}&sortOrder=ASC`,
      axiosConfig
    );
    // toast.success('Virtual Account Fetch Successfully');
    return response.data.data.dataset;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
