import userService from "../services/userService";
//api dùng để giao tiếp giữa server dưới dạng JSON object.
//api trả về status(200-bình thường)
let handleLogin = async (req, res) => {
  //check eamil vaf password co ton tai khong
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Mising input paremeter!",
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  // console.log(userData);
  //Các bước xử lý back-end của login:
  //check email exist:
  //compare password:
  //return userInfor
  //access token:JWT(json web token)
  return res.status(200).json({
    // errCode:0,
    // message: 'hello world',
    // text: 'text',
    // yourEmail: email,
    // yourPassword: password,
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},

    // userData,
  });
};

let handleGetAllUsers = async (req, res) => {
  //query truyen tham so khi gui di:
  let id = req.query.id; //ALL,id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "MIssing requireed pamameters",
      users: [],
    });
  }
  let users = await userService.getAllUsers(id);
  // console.log(users);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    users,
  });
};
//api
let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
  let data = req.body;
  //lấy tất cả dữ liệu đã input.
  let message = await userService.updateUserData(data);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter!",
    });
  }
  let message = await userService.deleteUser(req.body.id);
  return res.status(200).json(message);
};
let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Get all code error", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
};
