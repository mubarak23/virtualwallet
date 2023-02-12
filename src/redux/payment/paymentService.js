import axios from 'axios';
import { toast } from 'react-toastify';

export const BACKEND_URL =
  process.env.BACKEND_URL || 'https://demo-wallet.onrender.com/v1';

export const getVirtualAccount = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    console.log('did we reach here ');
    console.log(userId);
    console.log(token);
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
