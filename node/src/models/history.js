//Tao cac gia tri cho bang:

'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    //them truong du lieu nguoi dung o trang nay:
    History.init({
        // id: DataTypes.INTEGER,
        patientID: DataTypes.INTEGER,
        doctorID: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        files: DataTypes.TEXT,

    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};