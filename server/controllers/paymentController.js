import {instance} from '../server.js'

export const checkOut= async(req, resp)=>{

    const options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
      
      };
     const order= await instance.orders.create(options)
console.log(order);
resp.status(200).json({
    success:true
})
     
}