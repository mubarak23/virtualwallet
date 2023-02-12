import React from 'react';
import {
  Card,
  CardHeader,
  Text,
  Button,
  Box,
  Heading,
  CardBody,
  CardFooter,
  StackDivider,
  Stack,
} from '@chakra-ui/react';

const VirtualAccountDetail = ({ virtualAccount, isLoading }) => {
  if (isLoading) {
    return <h3>Loading Account Detaila </h3>;
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size='md'>Virtual Account Details</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Text pt='2' fontSize='sm'>
                Bank Name: {virtualAccount.bankName}
              </Text>
              <Text pt='2' fontSize='sm'>
                Account Number: {virtualAccount.bankAccountNumber}
              </Text>
              <Text pt='2' fontSize='sm'>
                Account Name: {virtualAccount.bankAccountName}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default VirtualAccountDetail;
