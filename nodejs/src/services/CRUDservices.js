import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

let createNewUser = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPw = await hashPassword(body.password);
      await db.User.create({
        email: body.email,
        password: hashPw,
        firstName: body.firstName,
        lastName: body.lastName,
        address: body.address,
        phoneNumber: body.phoneNumber,
        gender: body.gender === "1" ? true : false,
        roleId: body.roleId,
      });
      resolve("Ok! Successfully");
    } catch (error) {
      reject(error);
    }
  });
};

let hashPassword = async (password) => {
  try {
    let hasPassword = await bcrypt.hashSync(password, salt);
    return hasPassword;
  } catch (error) {
    throw error;
  }
};

let getListUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let listUser = await db.User.findAll({ raw: true });
      resolve(listUser);
    } catch (error) {
      reject(error);
    }
  });
};

let getDetailUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: id }, raw: true });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

let updateUser = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(
        {
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          address: body.address,
        },
        {
          where: {
            id: body.id,
          },
        }
      );
      resolve("Ok! Successfully");
    } catch (error) {
      reject(error);
    }
  });
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.destroy({
        where: {
          id: userId,
        },
      });
      resolve("Ok! Successfully");
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
  getListUser,
  getDetailUser,
  updateUser,
  deleteUser,
};
