import express from 'express';
import dotenv from 'dotenv';
import { connectDB, sequelize } from '../lib/config/db.js';
import authRoutes from '../routes/authRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import tradeRoutes from '../routes/tradeRoutes.js';
import giftCardRoutes from '../routes/giftCardRoutes.js';
import transactionRoutes from '../routes/transactionRoutes.js';
import { protect } from '../app/middlewares/authMiddleware.js';
import { notFound, errorHandler } from '../app/middlewares/errorMiddleware.js';
import { logger } from '../app/middlewares/loggerMiddleware.js';
import { limiter } from '../app/middlewares/rateLimitMiddleware.js';
import { corsOptions } from '../app/middlewares/corsMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(logger);
app.use(limiter);
app.use(corsOptions);

// Route handlers

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/giftcards', giftCardRoutes);
app.use('/api/transactions', transactionRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const server = sequelize.sync({ alter: true }).then(() => {
  const PORT = process.env.PORT || 3000;
  return app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

export { server, app };
