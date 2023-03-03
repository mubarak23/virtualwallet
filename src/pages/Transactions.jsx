import React from 'react';
import {
  Box,
  Button,
  Heading,
  TableContainer,
  ButtonGroup,
  Table,
  Tbody,
  Thead,
  Spacer,
  Flex,
  Th,
  Td,
  Tr,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Transactions = () => {
  const { transactions, isError, isLoading, message } = useSelector(
    (state) => state.payment
  );

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
            <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Box p='2'>
                <Heading borderBottomWidth='1px' fontSize={18} marginBottom={5}>
                  Wallet Transactions
                </Heading>
              </Box>
              <Spacer />
              <ButtonGroup gap='1'>
                <Button colorScheme='teal'>Create a Payment link</Button>
              </ButtonGroup>
            </Flex>
            <hr />
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Type</Th>
                    <Th>Payment Status</Th>
                    <Th>Amount</Th>
                    <Th>Wallet Balance Before</Th>
                    <Th>Wallet Balance After</Th>
                    <Th>Created Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transactions.map((item) => (
                    <Tr>
                      <Td>{item.type}</Td>
                      <Td>{item.paidStatus}</Td>
                      <Td>N{item.amountMajor}</Td>
                      <Td>N{item.walletBalanceMajorBefore}</Td>
                      <Td>{item.walletBalanceMajorAfter}</Td>
                      <Td>
                        {moment(item.createdAt).format(
                          'MMMM Do YYYY, h:mm:ss a'
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Transactions;
