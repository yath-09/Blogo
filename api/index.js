import  express  from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from 'cors';
import postRoutes from './routes/post.route.js';
dotenv.config()
const app=express()
// Use the cors middleware to handle CORS globally
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())

app.use(cookieParser())


/* MONGOOSE SETUP */
const PORT = 3000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));


  app.use('/api/user',userRoutes)
  app.use('/api/auth',authRoutes)
  app.use('/api/post', postRoutes);
  app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

  })