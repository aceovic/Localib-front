import { useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);


    	
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await api.get(url);
				setData(res.data);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);

	/**
     * Relance la requête axios
     */
	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await api.get(url);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { data, loading, error, reFetch };
};

export default useFetch;

