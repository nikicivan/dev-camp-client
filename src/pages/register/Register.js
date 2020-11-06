import React, { useEffect, useState } from "react";
import "./register.css";

import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Button from "@material-ui/core/Button";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { register } from "../../redux/users/users.actions";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const Register = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  console.log(role, name, email, password, repassword);

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/bootcamps";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password, role));
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__title">
          <PersonAddIcon
            fontSize="large"
            style={{ color: "#047AED" }}
          />
          <h1>Register</h1>
        </div>
        <p>
          Register to list your bootcamp or rate, review and favorite bootcamps
        </p>
        {loading && <Spinner />}
        {error && <h1 className="error__message">{error}</h1>}
        {message && <h1 className="error__message">{message}</h1>}
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            name="password2"
            placeholder="Re-Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          <div className="register__userRole">
            <FormControl component="fieldset">
              <FormLabel component="legend">User Role</FormLabel>
              <RadioGroup
                defaultValue={role}
                aria-label="gender"
                name="customized-radios"
              >
                <FormControlLabel
                  value="user"
                  control={<StyledRadio />}
                  label="Regular user (Browse, Write reviews, etc)"
                  onChange={(e) => setRole(e.target.value)}
                />
                <FormControlLabel
                  value="publisher"
                  control={<StyledRadio />}
                  label="Bootcamp publisher"
                  onChange={(e) => setRole(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <p className="register__note">
            *You must be affiliated with the bootcamp in some way in order to
            add it to DevCamp.
          </p>
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
