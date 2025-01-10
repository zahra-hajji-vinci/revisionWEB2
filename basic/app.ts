import express, { ErrorRequestHandler } from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import drinkRouter from "./routes/drinks";


const app = express();


app.use(express.json()); // Parse requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse requests with URL-
      

//Router
app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/drinks",drinkRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
  };
  
app.use(errorHandler);
  

export default app;
