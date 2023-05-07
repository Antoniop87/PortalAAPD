import Header from "../Components/Header";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Home = () => {

    const [title, setTitle] = useState('PORTAL AAPD');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center text-center m-2">
                <h1 className="font-semibold">1ª COPA PERNAMBUCO ATLETISMO MASTER</h1>
                <img className="h-auto w-auto sm:h-1/2 sm:w-1/2" src="/imgs/copamaster.jpeg" />
                <Link to={"/Inscricao"} className="text-xl bg-blue-400 p-2 m-2 rounded text-white hover:bg-blue-500" href="">saiba mais</Link>
            </div>
        </div>
    )
}

export default Home;