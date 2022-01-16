import db from "../models/index"; // db already includes imported all table
import CRUDservice from "../services/CRUDservices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll(); // User is model
    return res.render("homePage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let msg = await CRUDservice.createNewUser(req.body);
  return res.send(msg);
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
};
