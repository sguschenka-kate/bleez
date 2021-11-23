// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
// import Item model
// import Item from "./Item.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Image = db.define('images', {
    // Define attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    itemId: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    path: {
        type: DataTypes.STRING,
    },
    alt: {
      type: DataTypes.STRING,
    }
  },{
    // Disable looking for createdAt in 'field list'
    timestamps: false,
  });

  // Image.hasOne(Item)

  // Export model Product
  export default Image;
 