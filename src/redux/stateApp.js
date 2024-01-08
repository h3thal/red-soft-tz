const initState = {};

export const stateApp = (state = initState, action) => {
	switch (action.type) {
		case "login":
			return action.payload.data;
		case "logOut":
			return {};
		default:
			return state;
			break;
	}
};
