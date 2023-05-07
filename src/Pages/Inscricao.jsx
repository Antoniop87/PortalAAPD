import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useState, useEffect } from 'react';

const Inscricao = () => {

    const [title, setTitle] = useState('INSCRIÇÃO');

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <div>
            <Header />
            <div>
                <div className="w-screen bg-red-400 flex justify-center items-center text-center p-2">
                    <a className="text-white hover:text-gray-600 m-2" href="/pdfs/regulamento 1 copa pernambuco de atletismo master.pdf" download>REGULAMENTO</a>
                    <a className="text-white hover:text-gray-600" href="https://forms.gle/LSQYDSBtx6dxAieL9">INSCRIÇÃO</a>
                </div>
                <div className="flex flex-col justify-center items-center m-2 p-0">
                    <Carousel
                        autoPlay={true} // para fazer o carrossel passar automaticamente
                        infiniteLoop={true} // para que o carrossel sempre comece do início após a última imagem
                        showArrows={false} // para remover as setas de navegação
                        showStatus={false} // para remover o indicador de progresso
                        showThumbs={false} // para remover as miniaturas das imagens
                        interval={2000} // tempo de transição entre as imagens em milissegundos
                        className="w-72 sm:w-96" // para fazer as imagens ocuparem toda a largura da tela e a altura da tela
                    >
                        <div>
                            <img src="./imgs/fotocarousel1.jpg" alt="Imagem 1" />
                        </div>
                        <div>
                            <img src="./imgs/fotocarousel2.jpg" alt="Imagem 2" />
                        </div>
                        <div>
                            <img src="/imgs/fotocarousel.jpg" alt="Imagem 3" />
                        </div>
                    </Carousel>
                    <h3 className="text-center font-semibold text-sm sm:text-lg">Venha participar deste grande evento do atletismo master!</h3>
                    <p className="text-center text-sm">Vem aí a primeira COPA PERNAMBUCO DE ATLETISMO MASTER.<br/> Faça sua inscrição e participe desse <br /> grande evento que conta com a realização da AAPD e ajni eventos.</p>
                    <p className="text-center font-bold text-sm sm:text-md m-2 ">LEIA ATENTAMENTE O REGULAMENTO ANTES <br /> DE FAZER A INSCRICAO, APÓS LER <br /> O REGULAMENTO ENTRE NA OPÇÃO DE INSCRIÇÃO <br /> NO TOPO DESTA PÁGINA E FAÇA A INSCRIÇÃO.</p>
                </div>
            </div>
        </div>
    )
}

export default Inscricao;