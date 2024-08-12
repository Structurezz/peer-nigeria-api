import { DataTypes } from 'sequelize';
import { sequelize } from './../../lib/config/db.js';

const Trade = sequelize.define('Trade', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  offerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    allowNull: false,
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
});

export default Trade;
