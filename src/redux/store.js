import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice.js";

export default configureStore({
	reducer : {
		app : appReducer
	}
});