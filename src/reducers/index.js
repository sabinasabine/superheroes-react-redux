import { combineReducers } from "redux";
import marvelGallery from "./marvelGallery";
import dcGallery from "./dcGallery";
import selectCards from "./selected";

const rootReducer = combineReducers({ marvelGallery, dcGallery, selectCards });

export default rootReducer;
