// Endpoint for querying the fibonacci numbers

import express from 'express';
import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  // Safely get the number parameter from request
  const numAsString: string = req.params.num;  
  const num: number = parseInt(numAsString, 10);

  // Call the Fibonacci function
  const fibN: number = fibonacci(num);

  // Determine the result message
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  // Send the result
  res.send(result);
};
