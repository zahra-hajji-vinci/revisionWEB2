import express, { ErrorRequestHandler } from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";


const app = express();

//Exemples de ces types de middleware

app.use(express.json()); // Parse requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse requests with URL-
      
//app.use(logger('dev')); // HTTP request logger linked to morgan package// encoded payload 
//app.use(cookieParser()); // Parse cookie header (req.cookies)
//app.use(express.static(path.join(__dirname, 'public'))); // Serve static assets

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
  };
  
app.use(errorHandler);
  

export default app;
