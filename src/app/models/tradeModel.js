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
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending', // Possible values: pending, completed, canceled
  },
}, {
  timestamps: true,
});

export default Trade;
