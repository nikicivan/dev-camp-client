import BOOTCAMP from "./bootcamps.types";

export const bootcampGetAllReducer = (state = { bootcamps: [] }, action) => {
  switch (action.type) {
    case BOOTCAMP.BOOTCAMP_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOTCAMP.BOOTCAMP_GET_ALL_SUCCESS:
      return {
        loading: false,
        bootcamps: action.payload,
      };
    case BOOTCAMP.BOOTCAMP_GET_ALL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export const bootcampDetailsReducer = (state = { bootcamp: {} }, action) => {
  switch (action.type) {
    case BOOTCAMP.BOOTCAMP_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOTCAMP.BOOTCAMP_DETAILS_SUCCESS:
      return {
        loading: false,
        bootcamp: action.payload,
        success: true,
      };
    case BOOTCAMP.BOOTCAMP_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
