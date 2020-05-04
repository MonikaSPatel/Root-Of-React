import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import issues from "./issues";
import pageReducer from "./pageReducer";
import images from "./images";
import increments from "./increments";

const reducers = combineReducers({
    routerReducer,
    issues,
    images,
    increments,
    nextPage: pageReducer
});

export default reducers;
