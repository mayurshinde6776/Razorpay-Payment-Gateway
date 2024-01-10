import  express  from "express";
import { config } from "dotenv";
import router from './routes/paymentRoutes.js'
import cors from 'cors'
config({path:"./config/config.env"})

export const app= express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", router);

app.get("/api/getKey", (req, resp)=>{
    resp.status(200).json({key:process.env.RAZORPAY_API_KEY})
})

