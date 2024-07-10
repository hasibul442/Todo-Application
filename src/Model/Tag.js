import { DataTypes } from "sequelize"; 
import db from "../Config/db.js";

const Tag = db.define("tags", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
    slug : {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
});

export default Tag;