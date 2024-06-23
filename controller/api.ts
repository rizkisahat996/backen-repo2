import { Request, Response } from 'express';
import { updateUserData, fetchUserData } from '../repository/userCollection';
import { ApiError } from '../entities/ApiError';

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId, ...data } = req.body;
    await updateUserData(userId, data);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    throw new ApiError(500, 'Error updating user');
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userData = await fetchUserData(userId);
    res.status(200).json(userData);
  } catch (error) {
    throw new ApiError(404, 'User not found');
  }
};