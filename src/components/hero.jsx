import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";

function Hero() {
    const [category, setCategory] = useState('');
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [dark]);

    const handleToggle = () => {
        setDark(!dark);
    };

    const fetchNews = async () => {
        try {
            setLoading(true);
            const Key = import.meta.env.VITE_NEWS_API_KEY;
            let url = category 
                ? `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&apikey=${Key}&lang=en`
                : `https://gnews.io/api/v4/top-headlines?country=in&apikey=${Key}&lang=en`;
            const response = await axios.get(url);
            setNews(response.data.articles);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const Header=()=>{
        return (<div className="flex justify-between dark:bg-slate-700">
            <h1 className="font-PT m-4 sm:mt-5 lg:text-2xl sm:text-xl text-lg font-medium dark:text-white">
                Top Indian Newspaper Headlines:-
            </h1>
            <div className="m-2 grid grid-flow-row sm:grid-flow-col lg:text-[1.3rem] sm:text-[1.1rem] font-PT text-[.9rem]">
                <label htmlFor="category" className="m-2 dark:text-white">Select Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-0 border border-gray-300 dark:bg-slate-300 rounded"
                >
                    <option value="">No Category</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                    <option value="world">World</option>
                </select>
                <label className="inline-flex items-center cursor-pointer mx-3 mt-2 sm:mt-0">
                    <span className="ms-3 mx-3 my-2 font-medium text-gray-900 dark:text-white font-PT lg:text-xl sm:text-xl text-sm">
                     Dark Mode
                    </span>
                    <input type="checkbox" value="" className="sr-only peer" checked={dark} onChange={handleToggle} />
                     <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>

            </div> 
        </div>)
    }

    useEffect(() => {
        fetchNews(); 
    }, [category]);

    if (loading) {
        return <div>
            <Header />
            <p className="text-center text-xl">Loading...</p></div>;
    }

    if (error) {
        return(<>
        <Header />
        <p>Error fetching news: {error.message}</p>;
        </> 
        )
    }

    return (
        <div className="dark:bg-slate-700">
            <Header />
            <div className="container mx-auto p-4 justify-center flex dark:bg-slate-700">
                <div className="grid-cols-1 grid sm:grid-cols-2 sm:gap-9 gap-8 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
                    {news.map((article, index) => (
                        <Card 
                            key={index} 
                            author={article.source.name} 
                            title={article.title} 
                            url={article.url} 
                            publish={article.publishedAt}
                            img={article.image}
                        />
                    ))}
                </div>     
            </div>
        </div>
    );
}

export default Hero;
