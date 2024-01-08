import express from 'express';
import { checkOut } from '../controllers/paymentController.js';

 const router= express.Router();

 router.route("/checkout").post(checkOut)

 export default router;