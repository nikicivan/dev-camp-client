import BOOTCAMP from "./bootcamps.types";
import axios from "../../axios";

export const getAllBootcamps = () =>
  async (dispatch) => {
    try {
      dispatch({ type: BOOTCAMP.BOOTCAMP_GET_ALL_REQUEST });
      const { data } = await axios.get("/api/v1/bootcamps");
      dispatch({ type: BOOTCAMP.BOOTCAMP_GET_ALL_SUCCESS, payload: data });
    } catch (error) {
      dispatch(
        {
          type: BOOTCAMP.BOOTCAMP_GET_ALL_FAIL,
          payload: error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
        },
      );
    }
  };

export const detailsBootcamp = (bootcampId) =>
  async (dispatch) => {
    try {
      dispatch({ type: BOOTCAMP.BOOTCAMP_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/v1/bootcamps/${bootcampId}`);
      dispatch({ type: BOOTCAMP.BOOTCAMP_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response.data.error);
      dispatch(
        {
          type: BOOTCAMP.BOOTCAMP_DETAILS_FAIL,
          payload: error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
        },
      );
    }
  };
