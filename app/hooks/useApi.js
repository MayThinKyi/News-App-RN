import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

const useApi=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [err,setErr]=useState(false);
    
    const fetchData=async()=>{
        setLoading(true)
       try {
        const res=await apiClient.get(url);
        setData(res.data?.articles);
        setLoading(false);
       } catch (error) {
        console.log('Error when fetching News Data ',error);
        setErr(true);
        setLoading(false);
       }
    }
    useEffect(()=>{
        fetchData()
    },[url]);

   return {data,loading,err}
}

export default useApi;