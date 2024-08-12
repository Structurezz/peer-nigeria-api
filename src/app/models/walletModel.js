
import { DataTypes } from 'sequelize';
import { sequelize } from './../../lib/config/db.js';

const Wallet = sequelize.define('Wallet', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  balance: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  timestamps: true,
});

export default Wallet;
