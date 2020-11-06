import React, { useState } from "react";
import "./header.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/users/users.actions";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const toggle = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <h1>DEV CAMPER</h1>
        </Link>
      </div>
      <div className="header__right">
        <Link to="/bootcamps">
          <p className="header__option">Bootcamps</p>
        </Link>
        {userInfo?.user?.role === "user"
          ? (
            <div className="header__login" onClick={toggle}>
              <p className="header__option2">Hello, {userInfo?.user?.name}</p>
              {isActive && <div className="header__dropdown">
                <Link to="/profile">
                  <p className="header__profileDropdown">Profile</p>
                  <p className="header__profileDropdown">Sign out</p>
                </Link>
              </div>}
            </div>
          )
          : userInfo?.user?.role === "publisher"
          ? (
            <div className="header__login" onClick={toggle}>
              <p className="header__option2">Hello, {userInfo?.user?.name}</p>
              <ExpandMoreIcon style={{ color: "white" }} />
              {isActive && <div className="header__dropdown">
                <Link to="/profile">
                  <p className="header__profileDropdown">Profile</p>
                </Link>
                <Link to="/bootcamps/edit">
                  <p className="header__profileDropdown">Manage bootcamps</p>
                </Link>
                <p className="header__profileDropdown" onClick={handleLogout}>
                  Sign out
                </p>
              </div>}
            </div>
          )
          : (<>
            <Link to="/signin">
              <div className="header__login">
                <ExitToAppIcon style={{ color: "white" }} />
                <p className="header__option2">Login</p>
              </div>
            </Link>
            <Link to="/register">
              <div className="header__login">
                <PersonAddIcon style={{ color: "white" }} />
                <p className="header__option2">Register</p>
              </div>
            </Link>
          </>)}
        <Link to="/cart">
          <div className="header__bag">
            <IconButton className="header__bagIcon">
              <ShoppingBasketIcon
                style={{ color: "white" }}
              />
              <span className="header__option2 header__basketCount">
                0
              </span>
            </IconButton>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
