import express, { Application, Request, Response, NextFunction } from 'express';
import userRoutes from '../routes/userRoutes';
import { ApiError } from '../entities/ApiError';

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});