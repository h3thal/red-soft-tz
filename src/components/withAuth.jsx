import React, { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";

export const withAuth = (WrappedComponent) => {
	return (props) => {
		const auth = localStorage.getItem("userData");
		if (auth === null) {
			return <Navigate to={"/login"} />;
		}
		return <WrappedComponent {...props} />;
	};
};
