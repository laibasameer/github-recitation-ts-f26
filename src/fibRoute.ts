// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fib from "./fib";

export default (req: Request, res: Response): void => {
  const { num } = req.params as { num: string };
  const fibN = fib(Number(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};