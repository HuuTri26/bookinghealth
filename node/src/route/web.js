//duong vao trang web:
//Xuat phat diem==>controller(lay du lieu , tro lại dữ liệu...)==>view.
//get: lay du lieu.
import express from "express";

//mo hinh mvc:
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
//Nguoi dung vao dau tien.
let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  //Khai bao 1 chuc nang moi.
  router.get("/get-crud", homeController.displaygetCRUD);
  //goi den controllers=> goi ham gethomePage.
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  //rest api.
  // router.pos('/hoitribui', (req, res) => {
  //     return res.send('Hello Tri !')
  // });

  //Viết API:(RESTAPI)
  router.post("/api/login", userController.handleLogin);
  //HIen giao dien tat ca  nguoi dung:
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  //Nhap ,them ,sua ,xoa:
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);
  

  router.get("/api/allcode",userController.getAllCode);
  return app.use("/", router);
};

module.exports = initWebRouter;
