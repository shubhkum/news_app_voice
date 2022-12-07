import React,{useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import './App.css'
import NewsData from "./components/NewsData";



//const API_KEY= 'pub_14202a3ec1bbeb3f249f15a10d37f422f1dea'
//const NEWS_API_URL = `https://newsdata.io/api/1/news?apiKey=${API_KEY}`;

function App(){
    return (
        <NewsData />
    );
}
export default App