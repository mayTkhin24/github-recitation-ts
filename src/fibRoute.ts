// Endpoint for querying the fibonacci numbers
import express, { Request, Response } from 'express';
import { fibonacci } from "./fib";

export default (req: Request, res: Response) => {
  // Safely get the number parameter from request
  const numAsString: string = req.params.num;  
  const num: number = parseInt(numAsString, 10);
    // Call the Fibonacci function
    const fibN: number = fibonacci(num);

    // Determine the result message
    let result = `fibonacci(${num}) is ${fibN}`;

    if (fibN < 0) {
      result = `fibonacci(${num}) is undefined`;
    }
    res.send(result);
  };
