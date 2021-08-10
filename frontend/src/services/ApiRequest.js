import axios from 'axios';
import { useEffect, useState } from 'react';

const ApiRequest = (method, url, params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios({
                method,
                url,
                data: params
            }).then(response => {
                setData(response.data);
            }).catch(error => {
                setError(error);
            }).then(function () {
                setLoading(false);
            });

        };
        fetchData();
    }, [method, url, params]);

    return { error, loading, data };
};
export default ApiRequest;