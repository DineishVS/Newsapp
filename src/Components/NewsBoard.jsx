import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {

    const [articles,setArticles]=useState([]);

    useEffect(()=>{
      console.log("Category:",category);
      
        
            //  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
             let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category]);

      
  return (
    <div>
      <h2 className="text-center"> <span className="badge bg-danger fs-4">Latest News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description ={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
