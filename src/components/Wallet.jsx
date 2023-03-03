import React from 'react';
import {
  Card,
  CardHeader,
  Text,
  Button,
  Heading,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';

const Wallet = ({ wallet }) => {
  return (
    <div>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'>Wallet Balance</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize={35}>N{wallet.walletBalanceMinor / 100}</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme='blue' marginLeft={10}>
            View Transactions
          </Button>
          <Button colorScheme='blue' marginLeft={10}>
            Fund Wallet
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Wallet;
