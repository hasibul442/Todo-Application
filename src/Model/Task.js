import { DataTypes } from "sequelize";
import db from "../Config/db";

const Task = db.define("tasks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.SMALLINT(6),
    },
    hours: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    planned_start_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    planned_end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    actual_start_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    actual_end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
//   
});

Task.belongsTo(db.models.users, { foreignKey: "user_id" });

export default Task;