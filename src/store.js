import { configureStore, createSlice } from "@reduxjs/toolkit";
import { stateApp } from "./redux/stateApp";

export default configureStore({
	reducer: {
		stateApp,
	},
});
