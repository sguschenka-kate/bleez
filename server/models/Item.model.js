// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
// import Image model
import Image from "./Image.model.js";
// import Size model
import Size from "./Size.model.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Item = db.define('items', {
    // Define attributes

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.INTEGER
    }
  },{
    // Disable looking for createdAt in 'field list'
    createdAt: false,
    updatedAt: false
  });
  
  Item.hasMany(Image)
  Item.belongsToMany(Size, {
      through: "item_size",
      as: "sizes"
    })

  Size.belongsToMany(Item, {
    through: "item_size",
    as: "items"
    })
  

  // Export model Product
  export default Item;
 