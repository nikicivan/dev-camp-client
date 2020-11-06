import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  bootcampDetailsReducer,
  bootcampGetAllReducer,
} from "./bootcamps/bootcamps.reducers";
import { coursesListByIdReducer } from "./courses/courses.reducers";
import { userLoginReducer, userRegisterReducer } from "./users/users.reducers";

const reducer = combineReducers({
  bootcampGetAll: bootcampGetAllReducer,
  bootcampDetails: bootcampDetailsReducer,
  coursesListById: coursesListByIdReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
