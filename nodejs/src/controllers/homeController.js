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

let onRenderCrudListPage = (req, res) => {
  return res.render("crud.ejs");
};

let onAddNewCrud = async (req, res) => {
  await CRUDservice.createNewUser(req.body);
  return res.redirect("/");
};

let onDisplayDataCrud = async (req, res) => {
  let data = await CRUDservice.getListUser();
  return res.render("getListUser.ejs", { dataTable: data });
};

let onRenderCrudEditPage = async (req, res) => {
  let id = req.params.id;
  if (!id || isNaN(id)) {
    return res.send("page not found");
  }
  let userDetail = await CRUDservice.getDetailUser(id);
  return res.render("editCrudPage.ejs", { user: userDetail });
};

let onUpdateCRUD = async (req, res) => {
  await CRUDservice.updateUser(req.body);
  return res.redirect("/");
};

let onDeleteCRUD = async (req, res) => {
  let id = req.params.id;
  if (!id || isNaN(id)) {
    return res.send("page not found");
  }
  await CRUDservice.deleteUser(id);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  onRenderCrudListPage,
  onAddNewCrud,
  onDisplayDataCrud,
  onRenderCrudEditPage,
  onUpdateCRUD,
  onDeleteCRUD,
};
