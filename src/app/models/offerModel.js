import { DataTypes } from 'sequelize';
import { sequelize } from './../../lib/config/db.js';

const Offer = sequelize.define('Offer', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cryptocurrency: {
    type: DataTypes.STRING,
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
  type: {
    type: DataTypes.ENUM('buy', 'sell'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Offer;
