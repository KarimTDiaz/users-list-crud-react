import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchData = async (fetchInfo, setFetchStatus, navigate) => {
	const { url, options, redirectTo } = fetchInfo;

	try {
		const request = await fetch(url, options);
		const data = await request.json();
		if (redirectTo) navigate(redirectTo);
		setFetchStatus({ data, loading: false, error: undefined });
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, error: err });
	}
};

export const useFetch = url => {
	const [fetchInfo, setFetchInfo] = useState({
		url,
		options: {
			method: 'GET'
		}
	});

	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});
	const navigate = useNavigate();
	useEffect(() => {
		fetchData(fetchInfo, setFetchStatus, navigate);
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
