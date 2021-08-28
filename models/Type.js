const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Type extends Model {}

Type.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type_units: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_vegan: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
    },
    {
        sequelize,timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'type'
    }
);

module.exports = Type;