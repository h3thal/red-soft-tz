import { Link } from "react-router-dom";

import "./Navigations.scss";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutApi } from "../../utils/auth";

const Navigations = () => {
	const stateApp = useSelector((state) => state.stateApp);
	const dispatch = useDispatch();

	const logOut = useCallback(() => {
		logOutApi();
		dispatch({ type: "logOut" });
	}, [stateApp]);

	useEffect(() => {}, [stateApp]);

	return (
		<header>
			<nav>
				<Link to={"/"}>Главная</Link>
				<Link to={"/login"}>Авторизация</Link>
				<Link to={"/browse"}>Бровз</Link>
			</nav>
			{stateApp.login && <div onClick={logOut}>Выйти</div>}
		</header>
	);
};

export default Navigations;
