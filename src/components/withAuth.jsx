import React, { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";

const AuthContext = React.createContext();

export const withAuth = (WrappedComponent) => {
	return (props) => {
		const auth = localStorage.getItem("userData");
		// console.log(auth);
		if (auth === null) {
			return <Navigate to={"/login"} />;
		}
		return <WrappedComponent {...props} />;
	};
};
