import React from 'react';
import {Box, Stack} from '@chakra-ui/react'
import Card from './Card';
const  Home=()=> {

    const checkOutHandler=()=>{

    }
    return (
        <Box>

            <Stack direction={"row"}>
<Card  amount='5000' img=''  checkOutHandler={checkOutHandler}/>
            </Stack>
        </Box>
    );
}

export default Home;