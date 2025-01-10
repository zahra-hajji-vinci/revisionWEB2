import { RequestHandler } from "express";

let getRequestCount = 0;

const requestCounterMiddleware: RequestHandler = (req, _res, next) => {
  if (req.method === "GET") {
    getRequestCount++;
    console.log(`GET counter : ${getRequestCount}`);
  }
  next();
};

export { requestCounterMiddleware };