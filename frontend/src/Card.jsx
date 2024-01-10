import { Button, Image, VStack , Text} from '@chakra-ui/react';
import React from 'react';

const Card=({amount , img, checkOutHandler })=> {
    return (
        <div>
            <VStack >
                <Image src={img} boxSize={"64"} objectFit='cover' />
                <Text>{amount}</Text>
                <Button onClick={()=>checkOutHandler(amount)} >Buy Now</Button>
            </VStack>
        </div>
    );
}

export default Card;