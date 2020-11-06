import COURSES from "./courses.types";
import axios from "../../axios";

export const getCoursesById = (bootcampId) =>
  async (dispatch) => {
    try {
      dispatch({ type: COURSES.GET_COURSE_BY_ID_REQUEST });
      const { data } = await axios.get(
        `/api/v1/bootcamps/${bootcampId}/courses`,
      );
      dispatch({ type: COURSES.GET_COURSE_BY_ID_SUCCESS, payload: data });
    } catch (error) {
      dispatch(
        {
          type: COURSES.GET_COURSE_BY_ID_FAIL,
          payload: error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
        },
      );
    }
  };
