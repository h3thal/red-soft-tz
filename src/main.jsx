import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store.js";

import "./index.css";

import Navigations from "./components/Navigations/Navigations.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import BrowsePage from "./pages/BrowsePage/BrowsePage.jsx";
import { isAuth } from "./utils/auth.js";

const Main = () => {
	const stateApp = useSelector((state) => state.stateApp);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchAuth = async () =>
			dispatch({ type: "login", payload: { data: await isAuth() } });
		fetchAuth();
	}, []);
	return (
		<BrowserRouter>
			<Navigations />
			<Routes>
				<Route path={"/"} Component={MainPage} />
				<Route path={"/login"} Component={LoginPage} />
				<Route path={"/browse"} Component={BrowsePage} />
			</Routes>
		</BrowserRouter>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Main />
		</Provider>
	</React.StrictMode>
);
