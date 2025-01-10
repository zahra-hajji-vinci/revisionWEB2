import express, { ErrorRequestHandler } from "express";


import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
  };
  
app.use(errorHandler);
  

export default app;
