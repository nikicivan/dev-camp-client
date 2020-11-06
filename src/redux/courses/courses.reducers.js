import COURSES from "./courses.types";

export const coursesListByIdReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSES.GET_COURSE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COURSES.GET_COURSE_BY_ID_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
      };
    case COURSES.GET_COURSE_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
