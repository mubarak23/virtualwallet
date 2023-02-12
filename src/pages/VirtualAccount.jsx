import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Box } from '@chakra-ui/react';
import VirtualAccountDetail from '../components/VirtualAccountDetail';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectToken,
  selectUser,
} from '../redux/auth/authSlice';
import { getmyVirtualAccount } from '../redux/payment/paymentSlice';
// import { getVirtualAccount } from '../redux/payment/paymentService';

const VirtualAccount = () => {
  // run this is useEffect
  const { myVirtualAccount, isError, isLoading, message } = useSelector(
    (state) => state.payment
  );
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log('Did we reach here');
    if (isLogin) {
      dispatch(getmyVirtualAccount(user.userId));
    }
    if (isError) {
      console.log(message);
    }
  }, [dispatch, message, isError, isLogin, token, user]);
  if (isLoading) {
    <h3>Fetching Account Details</h3>;
  }
  return (
    <div>
      <Navbar />
      <Box display='flex'>
        <Sidebar />
        <Box flex={10}>
          <Box
            w='full'
            p={5}
            minH='calc(100vh - 80px)'
            margin='0 auto'
            borderWidth='1px'
            // borderRadius="lg"
            boxShadow='xl'
            display='flex'
            // justifyContent="center"
            flexDirection='column'
          >
            <VirtualAccountDetail virtualAccount={myVirtualAccount} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default VirtualAccount;
