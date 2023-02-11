import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../Navbar';

export default function LandingLayout(props) {
  return (
    <Flex
      direction='column'
      align='center'
      maxW={{ xl: '1200px' }}
      m='0 auto'
      {...props}
    >
      {props.children}
    </Flex>
  );
}
