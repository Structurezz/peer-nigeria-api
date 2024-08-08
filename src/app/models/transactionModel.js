import { DataTypes } from 'sequelize';
import { sequelize } from './../../lib/config/db.js';
import User from './userModel.js';
import Trade from './tradeModel.js';

const Transaction = sequelize.define('Transaction', {
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('successful', 'failed'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Define associations
Transaction.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Transaction.belongsTo(Trade, { foreignKey: 'tradeId', as: 'trade' });

export default Transaction;
