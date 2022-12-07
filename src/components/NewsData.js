import React, { useEffect, useState } from "react"
import {getNews} from "../Service/getNews"
import moment from "moment/moment"
import alanBtn from "@alan-ai/alan-sdk-web";

export default function NewsData(){
    const [newsData,setNewsData]= useState([]);
    const [selectOption,setSelectOption]=useState('');
    const alankey= '6c2a2de12a5ea0c8a1ba8f01658ebe162e956eca572e1d8b807a3e2338fdd0dc/stage';
    const getAllNews= async ()=>{
        let data = await getNews(selectOption);
        //console.log(data)
        setNewsData(data.data.articles)
    }
    const selectCategory=(event)=>{
        //console.log(event.target.value)
        setSelectOption(event.target.value)
    }
    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand: (commandData) =>{
                setSelectOption(commandData.data)
            }

        })
    })
    useEffect(()=>{
        getAllNews()

    },[selectOption])
    
    return (
        <div className="main">
           <h1> Top Headlines </h1>
           <div className="select">
           <label for="category">Speak / Select Category:</label>
                <select className="selectBox" 
                name="category" 
                id="category"
                onChange={selectCategory}
                value={selectOption}>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="sports">Sports</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
                <option value="science">Science</option>
                </select> 

            </div>
            
            <div className="grid-main">
            {newsData.map((news)=>{
                    return (
                    <div className="grid-child">
                        <img 
                        src={news?.urlToImage}
                        className="newsImage" />
                        <p className="newsTitle">{news?.title}</p>
                        <p className="newsContent">{news?.content}</p>
                        
                        <div className="spaceBtn"> 
                        <p className="newsAuthor">Author: {news?.author ? news?.author : 'No Author'}</p>
                        <p className="newsDate">Date: {moment(news?.publishedAt).format('LL')}</p>
                        </div>
                        <a href={news?.url} target="_blank">Read More..</a>
                    </div>
                    )
            })}
           </div>
        </div>
    )
}