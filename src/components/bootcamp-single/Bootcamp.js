import React from "react";
import "./bootcamp.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Bootcamp = ({ bootcamp, history }) => {
  const classes = useStyles();

  const buttonSubmit = () => {
    history.push(`/bootcamps/${bootcamp.slug}/${bootcamp._id}`);
  };

  return (
    <div className="bootcamp">
      <div className="bootcamp__container">
        <Link to={`/bootcamps/${bootcamp.slug}/${bootcamp._id}`}>
          <img src={bootcamp.photo} alt={bootcamp.name} />
        </Link>
        <div className="bootcamp__info">
          <div className="bootcamp__name">
            <h1>{bootcamp.name}</h1>
            <div className="bootcamp__rating">
              <p>{bootcamp.averageRating.toFixed(1)}</p>
            </div>
          </div>

          <div className="bootcamp__address">
            <p>{bootcamp.location.formattedAddress}</p>
          </div>
          <p className="bootcamp__careers">
            <span>{bootcamp.careers[0]}</span>
            <span>{bootcamp.careers[1]}</span>
            <span>
              {bootcamp.careers[2]}
            </span>
            <span>{bootcamp.careers[3]}</span>
          </p>
          <div className={classes.root}>
            <Button color="primary" onClick={buttonSubmit}>Read more...</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
