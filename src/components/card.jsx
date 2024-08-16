import React from "react";


function Card(props){
    return(
        <div className="bg-slate-50 border border-gray-300 shadow-lg hover:shadow-xl md:hover:shadow-cyan-600 dark:md:hover:shadow-yellow-500 md:shadow-rose-600 rounded-lg p-6 max-w-[20rem] min-w-[15rem] shadow-green-400 hover:shadow-rose-600  dark:bg-zinc-800">
            <div className="text-center">
                <h1 className="font-Pfd  text-[1.19rem] md:text-[1.2rem] font-semibold dark:text-white text-red-600">{props.author}</h1>
            </div>
            <hr className="border-t-4 border-gray-500 my-2"/>
            <div>
                <p className="font-Roboto font-normal dark:text-white">{props.title}</p>
            </div>
            <img src={props.img} alt="News img" className="h-auto"/>
            <div className="grid grid-flow-row sm:grid-flow-col gap-2 font-Roboto ">
                <span className="md:my-2 sm:mt-2 mt-1 text-sm dark:text-white"><span className="text-red-500">Published At:</span>{props.publish}</span>
                <div className="md:my-2 sm:mt-2">
                     <a className="text-blue-500 hover:text-blue-700 md:hover:text-[1.05rem]" target="_blank" rel="noopener noreferrer" href={props.url} >Read More</a>
                </div>
                
            </div>
        </div>
    )
}

export default Card;