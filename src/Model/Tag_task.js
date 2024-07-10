import { DataTypes } from "sequelize";
import db from "../Config/db";

const Tag_task = db.define("tag_task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tags",
            key: "id",
        },
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tasks",
            key: "id",
        },
    },
});

Tag_task.belongsTo(db.models.tags, { foreignKey: "tag_id" });
Tag_task.belongsTo(db.models.tasks, { foreignKey: "task_id" });

export default Tag_task;