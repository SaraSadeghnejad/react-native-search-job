import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint,query) =>{
  const[data,setData] = useState([]);
  const [isLoading,setIsLoading] =useState()
  const [error,setError] = useState()
  const options={
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': '6177e727b6mshd6cf621e378580bp1bee6ejsn8118e1d68fb7',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};
const fetchData = async()=>{
    setIsLoading(true);

    try{
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
    }catch{
      setError(error);
    }finally{
        setIsLoading(false);
    }
};
useEffect(()=>{
    fetchData();
},[]);
 
const refetch =()=>{
    setIsLoading(true);
    fetchData();
};

return {data,isLoading,error,refetch};
}

export default useFetch;