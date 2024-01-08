import { useCallback, useState } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
	const [userData, setUserData] = useState({
		login: "",
		password: "",
	});
	const handleInputChange = useCallback((e) => {
		const { name, value } = e.target;
		setUserData((state) => ({ ...state, [name]: value }));
	});
	const onLoginPush = useCallback(() => {
		localStorage.setItem("userData", JSON.stringify(userData));
		console.log(userData);
	}, [userData]);

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
