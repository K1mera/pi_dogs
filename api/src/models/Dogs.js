import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

import { Temperaments } from "./Temperaments.js";

export const Dogs = sequelize.define("dogs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  height: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.STRING,
  },
  average_lifespan: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});


Dogs.belongsToMany(Temperaments, { through: "DogTemperament" });
Temperaments.belongsToMany(Dogs, { through: "DogTemperament" });

// Dogs.hasMany(Temperaments, {
//   foreignKey: "dogId",
//   sourceKey: "id",
// });

// Temperaments.belongsTo(Dogs, {
//   foreignKey: "dogId",
//   targetKey: "id",
// });
