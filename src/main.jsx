import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import BrowsePage from "./pages/BrowsePage/BrowsePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={"/"} Component={MainPage} />
				<Route path={"/login"} Component={LoginPage} />
				<Route path={"/browse"} Component={BrowsePage} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
