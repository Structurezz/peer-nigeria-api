import cors from 'cors';

export const corsOptions = cors({
  origin: process.env.CLIENT_URL || '*', // Adjust the origin as needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

