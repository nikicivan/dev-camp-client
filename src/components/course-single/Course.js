import React from "react";
import "./course.css";

import numeral from "numeral";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const Course = ({ course }) => {
  return (
    <div className="course">
      <div className="course__container">
        <div className="course__title">
          <h1>{course.title}</h1>
        </div>
        <div className="course__info">
          <h1>Duration: {course.weeks} weeks</h1>
          <p>{course.description}</p>
          <div className="course__infoDetails">
            <p className="course__cost">
              Cost: ${numeral(course.tuition).format("0,0")}
            </p>
            <p className="course__minimumSkill">
              Skill Required: {course.minimumSkill}
            </p>
            <div className="course__scholarShip">
              <p>Scholarship Available:</p>
              {course.scholarshipAvailable
                ? <CheckIcon style={{ color: "#5cb85c" }} />
                : <CloseIcon style={{ color: "#d9534f" }} />}
            </div>
            <Button variant="contained" color="primary" type="submit">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
