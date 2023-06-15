
// var bcrypt = require('bcryptjs');
import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                // email: DataTypes.STRING,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                // roleId: DataTypes.STRING,
                roleId: data.roleId,
                // positionId: DataTypes.STRING,
            })
            resolve('OK create a new user succeed!');
        } catch (e) {
            reject(e);
        }
    })

    // console.log('data from service: ')
    // console.log(data)
    // console.log(hashPasswordFromBcrypt)
}

//Hash password:
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            //them await=>luon dung
            //lưu ý, truyền vào đúng password cần hash
            // let hashPassWord = await bcrypt.hashSync("B4c0/\/", salt); => copy paste mà ko edit nè
            let hashPassword =await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
            // Store hash in your password DB.
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    //promise de xu ly truoc sau.
    //findAll đe duyet qua tat ca cac phan tu cua ban.
    //resole la tham so du lieu tra ve, reject la tham so du lieu tra ve neu sai 
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInforById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            });
            if (user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id },
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
        } catch (e) {
            console.log(e);
            // reject(e);
        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
//equal function
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInforById: getUserInforById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
}
//service thao tac gui du lieu vao database tu controller chuyen den.