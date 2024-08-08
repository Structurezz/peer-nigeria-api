import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Create a new Sequelize instance
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false, // Disable logging; remove or set to true to enable
  }
);

// Test the database connection
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL database connected successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1); // Exit process with failure
  }
};
