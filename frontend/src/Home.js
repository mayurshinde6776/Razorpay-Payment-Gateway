import React from 'react';
import { Box,  Stack } from '@chakra-ui/react'
import Card from './Card';
import axios from 'axios';
const Home = () => {

    const checkOutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:4000/api/getKey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })
       

        var options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Mayur Shinde",
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/114060054?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };


        const razor = new window.Razorpay(options);

        razor.open();

    }
    return (
        <Box>

            <Stack h={"100vh"} justifyContent="Center" alignItems="Center " direction={["column ,row"]}>
                <Card amount='5000' img='https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D' checkOutHandler={checkOutHandler} />

                <Card amount='8000' img='https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' checkOutHandler={checkOutHandler} />

            </Stack>
        </Box>
    );
}

export default Home;