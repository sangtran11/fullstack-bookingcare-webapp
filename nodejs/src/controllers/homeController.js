import db from "../models/index"; // db already includes imported all table

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll(); // User is model
    return res.render("homePage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage,
};
