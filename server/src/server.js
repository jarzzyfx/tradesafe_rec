import express from 'express'
import cors from 'cors'
import { start } from '../lib/start.js';
import authRouter from '../routes/auth.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// routes
app.use("/auth", authRouter)

start(app, PORT)