import axios from "axios";

export function getNews(category='General'){
    const API_KEY= `793031c23530495aa239dcbd2ef78f37`;
    const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us`;
    return axios.get(`${API_Endpoint}&apiKey=${API_KEY}&category=${category}`);
        
}