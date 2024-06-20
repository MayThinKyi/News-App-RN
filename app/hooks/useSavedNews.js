import { useContext } from "react";
import NewsContext from "../contexts/NewsContext";

const useSavedNews=()=>{
    const context=useContext(NewsContext);
    if(!context) console.log('Pls wrap News Context Provider');
    return context;

}

export default useSavedNews;