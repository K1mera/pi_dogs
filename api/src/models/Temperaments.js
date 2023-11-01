import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Temperaments = sequelize.define("temperaments", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
