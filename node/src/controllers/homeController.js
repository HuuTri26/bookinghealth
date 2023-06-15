import db from '../models/index';
// import user from '../models/user';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    // return res.send("Hello world from controller");
    try {
        let data = await db.User.findAll();
        // console.log('----------------------')
        // console.log(data);
        // console.log('----------------------')
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }
    catch (e) {
        console.log(e);
    }
    //do viewengine da khai bao public duong dan.
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
// let getProduct=(req,res)=>{
//     return res.render('product/product.ejs');
// }
// object:{
//     key:'',
//     value:''
// }
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
// async: su ly bat dong bo
//Gui thong tin len server(router) va tu server tra ve gia tri thong qua ham send() (homeController);
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    // console.log(req.body);
    return res.send('Huu Tri post CRUD from server');
}

let displaygetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log('------------------------------------');
    // console.log(data);
    // console.log('------------------------------------');
    // return res.send('Display get crud from controller');
    return res.render('displayCRUD.ejs', {
        //truyen qua view bang bien dataTable.
        dataTable: data,
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    // console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInforById(userId);
        // console.log('================================');
        // console.log(userData);
        // console.log('================================');

        //check userData not found!
        return res.render('editCRUD.ejs', {
            user: userData
            //truyền biến user vào file view.
        });

        //=>render ra file view

    }
    else {
        return res.send('Users not found!');
    }
    // console.log(req.query.id);

}

let putCRUD = async (req, res) => {
    let data = req.body;
    //lấy tất cả dữ liệu đã input.
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {

        //truyen qua view bang bien dataTable.
        dataTable: allUsers
    })
    // return res.redirect("/get-crud");
    // return res.send('update has done!');
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    //lay id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('delete user succeed!');
    }
    else {
        return res.send('user not found!');
    }

}
//Khai bao chuc nang nao thi phai export ra chuc nang do.
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}