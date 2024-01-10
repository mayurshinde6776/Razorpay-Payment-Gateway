import { instance } from '../server.js'
import crypto from "crypto";
import { Payment} from '../models/paymentModel.js';


// this function is called when checkout url is hit  and amount is given to checkout url
export const checkOut = async (req, resp) => {

  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",

  };
  const order = await instance.orders.create(options)



  resp.status(200).json({
    success: true,
    order,
  })

}


{/* after order is placed to razor we will verify  by getting 
 razorpay_order_id, razorpay_payment_id, razorpay_signature from razorpay
 and we will compare expected signature and actual razorpay signature which we have given by razorpay
 */}
export const paymentVerification = async (req, res) => {

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;


  const body = razorpay_order_id + "|" + razorpay_payment_id;

  {/* expected Sinature created such as to compare razorpay signature :=>

   Here, it generates an HMAC (Hash-based Message Authentication Code) signature using the SHA-256 hashing algorithm. 
   The crypto.createHmac function is used to create an HMAC object, with the secret key being process.env.RAZORPAY_API_SECRET. 
   The update method is then used to update the HMAC with the content of the body string, and digest('hex') converts the result to a hexadecimal string.
  
   */}
  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

    const isAuthentic= expectedSignature===razorpay_signature;

    if(isAuthentic){

//database comes here

await Payment.create({

  razorpay_order_id, 
  razorpay_payment_id, 
  razorpay_signature,
})

// After data is stored into database redirrected to payement success page
res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)
    } else{

      res.status(400).json({
        success: false,
      });
    }



 

};