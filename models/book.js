const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    published_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'books',
    timestamps: false
});

module.exports = Book;