import "./lib/env.js";
import dotenv from "dotenv"
dotenv.config();


import express from "express"

import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";


const app=express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // act as a middleman used ot get the data formthe user  req.body();
app.use(cookieParser()); // to check for the cookie 

// routes 

app.use("/api/auth/",authRoutes);
app.use("/api/messages/",messageRoute);

// server and mongodb 

app.listen(PORT, () => {
      console.log(`Server runnning on port ${PORT} `)
      connectDb()
});