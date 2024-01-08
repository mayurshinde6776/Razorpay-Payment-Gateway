import { Button, Image, VStack , Text} from '@chakra-ui/react';
import React from 'react';

const Card=({amount , img, checkOutHandler })=> {
    return (
        <div>
            <VStack>
                <Image src={img}/>
                <Text>{amount}</Text>
                <Button onClick={checkOutHandler} >Buy Now</Button>
            </VStack>
        </div>
    );
}

export default Card;