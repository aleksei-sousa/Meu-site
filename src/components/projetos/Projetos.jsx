import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './projetos.css'
import Cards from './cards_projetos/Cards'

import img_1 from './img/img_calc.png';
import img_2 from './img/img_netflix.png';
import img_3 from './img/gif_form.gif';
import img_4 from './img/img_port.png';
import img_5 from './img/img_landing.png';
import img_6 from './img/img_pricegrid.png';
import img_7 from './img/sistema_de_login.png';

const responsiveSettings = [
    {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
    },
    {
        breakpoint: 450,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
];

export default function Projetos () {

    return(
        <div className="container_projetos" id='projetos'>
            <div className="subtitulo_central">
              <h1 className='texto_sub sub2'>Projetos</h1>
            </div>
            <div className="destaque_projetos">
                <div className='content_projetos'>
                    <Slide slidesToShow={1} slidesToScroll={1} arrows={false} autoplay={false} indicators={true} transitionDuration={700} duration={2000}  responsive={responsiveSettings}>
                      <Cards
                          id ={'calc'}
                          src = {img_1}
                          alt ={"imagem de uma calculadora feita em Javascript"}
                          nomeProjeto={'Calculadora'}
                          descricaoProjeto={'Uma calculadora com todas as funcionalidades de uma do Android'}
                          link={'https://www.google.com.br/'}
                          linguagens={'Design-Html-Css-js'}
                      />
                      <Cards
                          id ={'netflix'}
                          src = {img_2}
                          alt ={"imagem com algumas partes do site da Netflix feito por mim"}
                          nomeProjeto={'Netflix - clone'}
                          descricaoProjeto={'um site clone, com todo design e responsividade do original'}
                          linguagens={'React.JS'}
                          link={'https://www.google.com.br/'}
                      />
                      <Cards
                          id ={'form'}
                          src = {img_3}
                          alt ={"Gif da animação do formulário, com opção de Login e Cadastrar"}
                          nomeProjeto={'Formulário'}
                          descricaoProjeto={'Formulário React.js com uma animação'}
                          link={'https://www.google.com.br/'}
                          linguagens={'React.JS'}
                      />
                      <Cards
                          id ={'meu_site'}
                          src = {img_4}
                          alt ={"Imagem com recortes do meu site"}
                          nomeProjeto={'Meu site'}
                          descricaoProjeto={'Refiz meu site, resolvi refazer em React.js'}
                          linguagens={'React.JS'}
                      />
                      <Cards
                          id ={'landing'}
                          src = {img_5}
                          alt ={"Imagem com recortes do me site"}
                          nomeProjeto={'Landing Page'}
                          descricaoProjeto={'Meu primerio Projeto, ainda em HTML e CSS'}
                          linguagens={'Html-Css-Jquery'}
                      />
                      <Cards
                          id ={'price'}
                          src = {img_6}
                          alt ={"link e imagem de uma calculadora feita em Javascript"}
                          nomeProjeto={'Price Grid'}
                          descricaoProjeto={'No meu início, queria entender o display Grid '}
                          linguagens={'Html-Css-Javascript'}
                      />
                      <Cards
                          id ={'sistema_de_login'}
                          src = {img_7}
                          alt ={"link e imagem de uma calculadora feita em Javascript"}
                          nomeProjeto={'Backend de Login'}
                          descricaoProjeto={'sistema de cadastro, login e autenticação'}
                          linguagens={'Node.JS-MongoDb-Express'}
                      />
                    </Slide>
                </div>
            </div>
        </div>
    )
}