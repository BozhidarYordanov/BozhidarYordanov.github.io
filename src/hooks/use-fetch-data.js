import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(async () => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! Status: ${response.status}`
                        );
                    }
                    const jsonData = await response.json();
                    setData(jsonData);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }, 3000);
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
