import Header from "../Components/Header";

const Contato = () => {
    return(
        <div>
            <Header/>
            <div className="">
                <button className=" bg-green-400 hover:bg-green-300 w-screen p-4">
                    <a className="text-white" href="https://wa.me/5581999195144">Whatsapp</a>
                </button>
                <button className=" bg-purple-400 hover:bg-purple-300 w-screen p-4">
                    <a className="text-white" href="https://www.instagram.com/aapd.pe/">Instagram</a>
                </button>
            </div>
        </div>
    )
}

export default Contato;