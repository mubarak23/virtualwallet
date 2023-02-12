import React, { useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import {
  selectUser,
  selectIsLoggedIn,
  selectToken,
  selectWallet,
} from '../redux/auth/authSlice';
import Wallet from '../components/Wallet.jsx';
import { getmyVirtualAccount } from '../redux/payment/paymentSlice';

const Dashboard = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wallet = useSelector(selectWallet);
  const isLogin = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
    dispatch(getmyVirtualAccount(user.userId));
  }, []);

  return (
    <>
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
            <Heading borderBottomWidth='1px' fontSize={18} marginBottom={5}>
              Welcome {user.firstName}
            </Heading>
            <Wallet wallet={wallet} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
