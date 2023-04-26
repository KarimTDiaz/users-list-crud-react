import { useState, useEffect } from 'react';

export const useFetch = (url, ...options) => {
	const [data, setData] = useState([]);
	const [link, setLink] = useState(url);

	useEffect(() => {
		fetchData(link, setData, ...options);
	}, [link]);
	return { setLink, data };
};

const fetchData = async (link, setData, ...options) => {
	const response = await fetch(link, ...options);
	const data = await response.json();
	setData(data);
};
