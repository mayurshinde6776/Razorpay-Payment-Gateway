import express from 'express';
import { checkOut, paymentVerification } from '../controllers/paymentController.js';

 const router= express.Router();

 router.route("/checkout").post(checkOut);


 //after payemnt done this url will callbacked , ane here we passed paymentverification function to verify that we should get correct order id, payment id and all
 router.route("/paymentverification").post(paymentVerification)

 export default router;