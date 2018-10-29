// 用户 “业务逻辑层” 处理
const UserService = {
  // 登录
  login(req,res,next) {

  },

  //注册
  register(req,res,next) {
    // 从请求中获取注册用户的用户名、密码、email
    // GET 请求方式获取数据
    const {username,password,email} = req.query;
    // POST 请求方式获取数据
    //const {username,password,email} = req.body;
    // 用户密码加密处理
    // TODO......
    
    // 将用户注册的信息发送到数据访问层处理
    // TODO.....
  },

  // 检测用户名是否存在
  check(req,res,next) {

  },

  // 注销
  logout(req,res,next) {

  }
}


module.exports = UserService;