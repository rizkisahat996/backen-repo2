import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../entities/ApiError';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new ApiError(401, 'No token provided');
  }

  // Here you would typically verify the token
  // For this example, we'll just check if it's a non-empty string
  if (typeof token !== 'string' || token.trim() === '') {
    throw new ApiError(401, 'Invalid token');
  }

  next();
};