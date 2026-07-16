import dotenv from 'dotenv';
import connectDB from '../src/db/index.js';
import app from '../src/app.js';

dotenv.config();

// Initialize DB connection for serverless environment
let isConnected = false;
connectDB().then(() => {
    isConnected = true;
    console.log("DB connected for Vercel Serverless");
}).catch(console.error);

export default app;
