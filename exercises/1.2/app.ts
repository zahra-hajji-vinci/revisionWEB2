import express from "express";
import  { requestCounterMiddleware }  from "./utils/counter";


import filmRouter from "./routes/films";    

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the request counter middleware
app.use(requestCounterMiddleware);

//Router
app.use("/films",filmRouter); 

export default app;

