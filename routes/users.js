var express = require('express');
var router = express.Router();

//用户业务逻辑处理对象
const UserService = require("../services/user/user_service.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录：完整路径"/api/users/login"
router.get("/login",UserService.login);

// 注册：完整路径"/api/users/register"
router.get("/register",UserService.register);

// 注销
router.get("/logout",UserService.logout);


module.exports = router;
