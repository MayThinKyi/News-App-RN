import axios from "axios";


export default axios.create({
    baseURL:'https://newsapi.org/v2',
    params:{
        apiKey:process.env.API_KEY
    }
})

