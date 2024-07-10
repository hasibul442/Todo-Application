import { DataTypes, Sequelize } from "sequelize";
import db from "../Config/db.js";

const User = db.define("users", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  roleId: {
    type: DataTypes.SMALLINT(6),
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "inactive"),
    defaultValue: "active",
  },
  register_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  last_login: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  profile_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
