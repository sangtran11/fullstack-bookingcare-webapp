import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {};
      let isExistEmail = await checkExistEmail(email);
      if (isExistEmail) {
        let user = await db.User.findOne({ 
          where: { email: email }, 
          attributes: ['email', "roleId", "password"],
          raw: true
        });
        if (user) {
          let comparePw = bcrypt.compareSync(password, user.password);
          if (comparePw) {
            delete user.password;
            data.errCode = 0;
            data.msg = "Ok !"
            data.userInfo = user;
          } else {
            data.errCode = 1;
            data.msg = "Wrong Password"
          }
        } else {
          data.errCode = 1;
          data.msg = "User isn't found ..."
        }
      } else {
        data.errCode = 1;
        data.msg = "Email isn't exist, Please try other email ..."
      }
      resolve(data);
    } catch (error) {
      reject(error)
    }
  })
}

let checkExistEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let email = await db.User.findOne({ where: { email: userEmail }, raw: true });
      if (email) {
        resolve(true)
      } else {
        resolve(false)
      }
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  handleUserLogin
}