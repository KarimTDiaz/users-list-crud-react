export const fetchData = async (url, ...options) => {
	try {
		const request = await fetch(url, ...options);
		const data = await request.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
