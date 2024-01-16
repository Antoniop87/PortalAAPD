import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Brasileiro = () => {

    const [title, setTitle] = useState('BRASILEIRO MASTER');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return(
        <div>
            <Header />
            <div>
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
                            <img src="./imgs/noticiath.jpg" alt="Imagem 1" />
                        </div>
                        <div>
                            <img src="./imgs/noticiasr.jpg" alt="Imagem 2" />
                        </div>
                    </Carousel>
                    <h3 className="text-center font-semibold text-sm sm:text-lg">Otimos resultados para o inicio de temporada da AAPD</h3>
                    <p className="text-center text-sm">Mesmo com muita chuva hoje em Bragança Paulista o Thiago Moura participou <br/> do Desafio CBAt de Atletismo e obteve a segunda colocação no salto a altura. <br/>"Estamos ainda em preparação para a temporada, com grande acúmulo de treinos <br/> então o resultado correspondeu bem a isso. Estamos nos preparando para o Campeonato <br/>Sulamericano Indoor que será no final do mês e o foco desta temporada é os Jogos Olímpicos <br/>de Paris" Afirmou o Thiago Moura ao final da competição, seguem os treinos, parabéns Thiago. <br/>Com esse resultado o Thiago conquistou o direito de representar o Brasil e a AAPD.PE <br/>no campeonato sul-americano indoor em Cochabamba na Bolívia no final do mês..</p>
                    <p className='text-center text-sm mt-2'>Sarah Freitas conquistou a medalha de ouro no salto a altura com uma boa marca para <br/> início da temporada. Saltou 1.78m embaixo de muita chuva ☔️ ☔️ <br/> Segundo a atleta "Foi um bom início de temporada, que na verdade usamos como treino,<br/> e conseguimos consertar e ajustar alguns detalhes, apesar das condições foi um bom início". <br/>Sarah segue em São Paulo realizando treinos intensos visando a participação nos <br/>J nas principais competições da temporada inclusive oa Jogos Olímpicos de Paris 2024,<br/> competição que acreditamos na participação dela.</p>
                </div>
            </div>
        </div>
    )
}

export default Brasileiro;