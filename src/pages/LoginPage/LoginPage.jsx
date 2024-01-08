import { useCallback, useState } from "react";
import "./LoginPage.scss";
import { useDispatch } from "react-redux";
import { loginApi } from "../../utils/auth";

const LoginPage = () => {
	const [userData, setUserData] = useState({
		login: "",
		password: "",
	});
	const dispatch = useDispatch();
	const handleInputChange = useCallback((e) => {
		const { name, value } = e.target;
		setUserData((state) => ({ ...state, [name]: value }));
	});
	const onLoginPush = async () => {
		dispatch({ type: "login", payload: { data: await loginApi(userData) } });
	};

	return (
		<div className={"loginPage"}>
			<div className={"loginPage-form"}>
				<input
					className={"loginPage-form__login"}
					type={"text"}
					name={"login"}
					placeholder={"login"}
					onChange={handleInputChange}
				/>
				<input
					className={"loginPage-form__password"}
					type={"password"}
					name={"password"}
					placeholder={"password"}
					onChange={handleInputChange}
				/>
				<div className={"loginPage-form__button"} onClick={onLoginPush}>
					Вход
				</div>
				<div className={"loginPage-form__button"} onClick={onLoginPush}>
					Регистрация
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
