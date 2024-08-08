import { DataTypes } from 'sequelize';
import { sequelize } from './../../lib/config/db.js';
import User from './userModel.js';

const GiftCard = sequelize.define('GiftCard', {
  cardType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true,
});

// Define associations
GiftCard.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default GiftCard;
