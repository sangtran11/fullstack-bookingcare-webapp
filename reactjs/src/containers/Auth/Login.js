import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  onHandleChangeInput = (e) => {
    if (e.target.name === "username") {
      this.setState({
        username: e.target.value,
      });
    } else {
      this.setState({
        password: e.target.value,
      });
    }
  };

  onHandleLogin = () => {};

  onHandleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
    let { username, password, isShowPassword } = this.state;
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group input-login">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => this.onHandleChangeInput(e)}
              />
            </div>
            <div className="col-12 form-group input-login">
              <label>Password:</label>
              <div className="custom-input-password">
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => this.onHandleChangeInput(e)}
                />
                <span onClick={() => this.onHandleShowHidePassword()}>
                  <i
                    className={
                      isShowPassword ? "far fa-eye" : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => this.onHandleLogin()}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password ?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or Login with</span>
            </div>
            <div className="col-12 social-login">
              <i class="fab fa-google-plus-g google"></i>
              <i class="fab fa-facebook facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
