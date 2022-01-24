import userService from "../services/userServices";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      msg: "Missing input fields"
    })
  }
  let data = await userService.handleUserLogin(email, password);
  return res.status(200).json({data})
}

module.exports = {
  handleLogin
}