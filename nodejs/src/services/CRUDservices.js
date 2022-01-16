import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (body) => {
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
    return "Ok! Successfully";
  } catch (error) {
    throw error;
  }
};

let hashPassword = async (password) => {
  try {
    let hasPassword = await bcrypt.hashSync(password, salt);
    return hasPassword;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
};
