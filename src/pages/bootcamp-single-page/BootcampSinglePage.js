import React, { useEffect } from "react";
import "./bootcampSinglePage.css";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsBootcamp } from "../../redux/bootcamps/bootcamps.actions";

import Spinner from "../../components/spinner/Spinner";
import dateFormat from "dateformat";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { getCoursesById } from "../../redux/courses/courses.actions";
import Course from "../../components/course-single/Course";

import CommentIcon from "@material-ui/icons/Comment";
import CreateIcon from "@material-ui/icons/Create";
import LanguageIcon from "@material-ui/icons/Language";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const BootcampSinglePage = ({ match }) => {
  const bootcampId = match.params.id;

  const bootcampDetails = useSelector((state) => state.bootcampDetails);
  const { bootcamp, error, loading, success } = bootcampDetails;

  const coursesListById = useSelector((state) => state.coursesListById);
  const { courses, loading: loadingCourses, error: errorCourses } =
    coursesListById;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsBootcamp(bootcampId));
    dispatch(getCoursesById(bootcampId));
  }, [dispatch, bootcampId]);

  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: bootcamp?.data?.location?.coordinates[1],
          lng: bootcamp?.data?.location?.coordinates[0],
        }}
      >
        <Marker
          position={{
            lat: bootcamp?.data?.location?.coordinates[1],
            lng: bootcamp?.data?.location?.coordinates[0],
          }}
        />
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div className="bootcampSingle">
      <div className="bootcampSingle__container">
        {loading
          ? <Spinner />
          : error
          ? <h1 className="error__message">{error}</h1>
          : (<>
            <div className="bootcampSingle__left">
              <Link to="/bootcamps">
                <p className="bootcampSingle__back">&#60;&#60; Go back</p>
              </Link>
              <h1>{bootcamp?.data?.name}</h1>
              <p>{bootcamp?.data?.description}</p>
              <p>
                <strong>
                  Average cost: ${numeral(bootcamp?.data?.averageCost).format(
                    "0,0",
                  )}
                </strong>
              </p>
              {loadingCourses ? <Spinner /> : errorCourses
                ? <h1 className="error__message">{errorCourses}</h1>
                : (
                  courses?.data?.map((course) => (
                    <Course key={course._id} course={course} />
                  ))
                )}
            </div>

            <div className="bootcampSingle__right">
              <img src={bootcamp?.data?.photo} alt={bootcamp?.data?.name} />
              <div className="bootcampSingle__rating">
                <p>{bootcamp?.data?.averageRating.toFixed(1)}</p>
              </div>
              <Link to="/reviews">
                <div className="bootcampSingle__rightReview">
                  <CommentIcon />
                  <p>Read reviews</p>
                </div>
              </Link>
              <Link to="/reviews/create">
                <div className="bootcampSingle__rightWriteReview">
                  <CreateIcon />
                  <p>Write a review</p>
                </div>
              </Link>
              <a href={bootcamp?.data?.website} target="_blanc">
                <div className="bootcampSingle__rightWebsite">
                  <LanguageIcon />
                  <p>Visit website</p>
                </div>
              </a>
              {success && <div
                className="bootcampSingle__map"
                style={{ width: "100%", height: "40vh" }}
              >
                <WrappedMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                  loadingElement={<div style={{ height: "100%" }} />}
                  containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div style={{ height: "100%" }} />}
                />
              </div>}
              <div className="bootcampSingle__rightInfo">
                <div className="bootcampSingle__rightInfoDetails">
                  {bootcamp?.data?.housing
                    ? <>
                      <CheckIcon style={{ color: "#5cb85c" }} />
                      <p>Housing</p>
                    </>
                    : <>
                      <CloseIcon style={{ color: "#d9534f" }} />
                      <p>Housing</p>
                    </>}
                </div>
                <div className="bootcampSingle__rightInfoDetails">
                  {bootcamp?.data?.jobGuarantee
                    ? <>
                      <CheckIcon style={{ color: "#5cb85c" }} />
                      <p>Job Guarantee</p>
                    </>
                    : <>
                      <CloseIcon style={{ color: "#d9534f" }} />
                      <p>Job Guarantee</p>
                    </>}
                </div>
                <div className="bootcampSingle__rightInfoDetails">
                  {bootcamp?.data?.jobAssistance
                    ? <>
                      <CheckIcon style={{ color: "#5cb85c" }} />
                      <p>Job Assistance</p>
                    </>
                    : <>
                      <CloseIcon style={{ color: "#d9534f" }} />
                      <p>Job Assistance</p>
                    </>}
                </div>
                <div className="bootcampSingle__rightInfoDetails">
                  {bootcamp?.data?.acceptGi
                    ? <>
                      <CheckIcon style={{ color: "#5cb85c" }} />
                      <p>Accept Gi</p>
                    </>
                    : <>
                      <CloseIcon style={{ color: "#d9534f" }} />
                      <p>Accept Gi</p>
                    </>}
                </div>
                <div className="bootcampSingle__rightInfoDetails">
                  <LanguageIcon style={{ color: "#047AED" }} />
                  <p>{bootcamp?.data?.website}</p>
                </div>
                <div className="bootcampSingle__rightInfoDetails">
                  <PhoneIcon style={{ color: "#047AED" }} />
                  <p>{bootcamp?.data?.phone}</p>
                </div>
                <div className="bootcampSingle__rightInfoDetails">
                  <EmailIcon style={{ color: "#047AED" }} />
                  <p>{bootcamp?.data?.email}</p>
                </div>
                <div className="bootcampSingle__rightInfoDetails">
                  <EventAvailableIcon style={{ color: "#047AED" }} />
                  <p>{dateFormat(bootcamp?.data?.createdAt)}</p>
                </div>
              </div>
            </div>
          </>)}
      </div>
    </div>
  );
};

export default BootcampSinglePage;
