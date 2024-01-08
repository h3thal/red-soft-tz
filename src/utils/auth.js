function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const isAuth = async () => {
	await sleep(getRandomInt(500, 2000));
	return JSON.parse(localStorage.getItem("userData")) || {};
};

const loginApi = async (userData) => {
	await sleep(500, 2000);
	localStorage.setItem("userData", JSON.stringify(userData));
	return userData;
};

const logOutApi = async () => {
	await sleep(getRandomInt(500, 2000));
	localStorage.removeItem("userData");
};

export { isAuth, logOutApi, loginApi };
