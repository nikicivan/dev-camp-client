import React, { useEffect } from "react";
import "./bootcampsPage.css";

import Spinner from "../../components/spinner/Spinner";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from "react-redux";
import { getAllBootcamps } from "../../redux/bootcamps/bootcamps.actions";
import Bootcamp from "../../components/bootcamp-single/Bootcamp";

const BootcampsPage = ({ history }) => {
  const bootcampGetAll = useSelector((state) => state.bootcampGetAll);
  const { bootcamps, loading, error } = bootcampGetAll;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBootcamps());
  }, [dispatch]);

  return (
    <div className="bootcampsPage">
      <div className="bootcampsPage__container">
        <div className="bootcampsPage__filter">
          <div className="bootcampsPage__byLocation">
            <h1>By Location</h1>
            <div className="bootscampPage__input">
              <input
                type="text"
                placeholder="kilometers from"
                name="distance"
              />
              <input type="text" placeholder="enter zip code" name="zipcode" />
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: "100%" }}
            >
              Find bootcamps
            </Button>
          </div>
        </div>
        {loading ? <Spinner /> : error ? <h1>{error}</h1> : (
          <div className="bootcampsPage__right">
            {bootcamps?.data?.map((bootcamp) => (
              <Bootcamp
                key={bootcamp._id}
                bootcamp={bootcamp}
                history={history}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BootcampsPage;
