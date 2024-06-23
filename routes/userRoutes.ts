import express from 'express';
import { updateUser, getUser } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.put('/update-user-data', authMiddleware, updateUser);
router.get('/fetch-user-data/:userId', authMiddleware, getUser);

export default router;