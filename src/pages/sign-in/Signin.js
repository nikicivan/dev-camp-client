import React, { useEffect, useState } from "react";
import "./signin.css";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/users/users.actions";
import Spinner from "../../components/spinner/Spinner";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Signin = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/bootcamps";

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <div className="signin__title">
          <ExitToAppIcon
            fontSize="large"
            style={{ color: "#047AED" }}
          />
          <h1>Signin</h1>
        </div>
        <p>
          Login in to list your bootcamp or rate, review and favorite bootcamps
        </p>
        {loading && <Spinner />}
        {error && <h1 className="error__message">{error}</h1>}
        <form className="signin__form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="emai"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" color="primary" type="submit">
            Sign in
          </Button>
        </form>
        <div className="signin__forgotPassword">
          <Link to="/forgotpassword">
            <p>Forgot password?</p>
          </Link>
          <Link to="resetpassword">
            <p>Reset password</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
