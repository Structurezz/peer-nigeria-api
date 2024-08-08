import { DataTypes } from 'sequelize';
import { sequelize } from './../../lib/config/db.js';
import User from './userModel.js';

const Trade = sequelize.define('Trade', {
  tradeType: {
    type: DataTypes.ENUM('buy', 'sell'),
    allowNull: false,
  },
  cryptoType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'canceled'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
});

// Define associations
Trade.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Trade;
