import {useEffect,useState} from 'react';
import axios from 'axios';

function useFetch(url){
    const[loading,setloading] = useState(true)
    const[data,setData] = useState([])

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const {data: productData} = await axios.get(url);
        setData(productData);
        setloading(false);
    }

    return {loading,data}

}

export default useFetch;