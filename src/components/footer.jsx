import React from "react";
import img from "../assets/logo.png"

function Footer(){
    return(
        <footer className="">
            <div className="bg-black sm:min-h-[3.8rem] min-h-[3rem] items-center content-center flex justify-center">
                <h1 className="text-white sm:text-[1.6rem] text-xl mx-3">Aditya Kumar</h1>
                <a href="mailto:adityakrgupta21@gmail.com"><img src={img} alt="Email" className="sm:h-6 h-5 mt-1"/></a>
            </div>
        </footer>
    )
}

export default Footer;