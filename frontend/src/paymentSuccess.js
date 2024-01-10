import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess=()=> {

    const searchQuery= useSearchParams()[0]
    return (
       <Box>
        <VStack h="100" justifyContent={"center"}>

<Heading textTransform={"uppercase"}>order cuccessfull</Heading>
       
       <Text>
        Referenec No: 564567
       </Text>
        </VStack>
       </Box>
    );
}

export default PaymentSuccess;