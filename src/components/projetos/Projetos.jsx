import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './projetos.module.css'
import Cards from './cards_projetos/Cards'

import { useTranslation } from 'react-i18next';
import '../locais/i18n'

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

    const { t } = useTranslation()

    return(
        <div className={styles.container_projetos} id='projetos'>
            <div className={styles.subtitulo_central}>
              <h1 className={`${styles.texto_sub} ${styles.sub2}`}>{t('projectsT')}</h1>
            </div>
            <div className={styles.destaque_projetos}>
                <div className={styles.content_projetos}>
                    <Slide slidesToShow={1} slidesToScroll={1} arrows={false} autoplay={true} indicators={true} transitionDuration={700} duration={2000}  responsive={responsiveSettings}>
                      <Cards
                          id ={'calc'}
                          src = {img_1}
                          alt ={"imagem de uma calculadora feita em Javascript"}
                          nomeProjeto={t('calculator')}
                          descricaoProjeto={t('calD')}
                          link={'https://aleksei-sousa.github.io/calculadora/'}
                          linguagens={'Design-Html-Css-js'}
                      />
                      <Cards
                          id ={'netflix'}
                          src = {img_2}
                          alt ={"imagem com algumas partes do site da Netflix feito por mim"}
                          nomeProjeto={'Netflix - clone'}
                          descricaoProjeto={t('netD')}
                          link={'https://aleksei-sousa.github.io/Netflix_clone/'}
                          linguagens={'React.JS'}
                      />
                      <Cards
                          id ={'form'}
                          src = {img_3}
                          alt ={"Gif da animação do formulário, com opção de Login e Cadastrar"}
                          nomeProjeto={t('form')}
                          descricaoProjeto={t('forD')}
                          link={'https://aleksei-sousa.github.io/formulario_react/'}
                          linguagens={'React.JS'}
                      />
                      <Cards
                          id ={'meu_site'}
                          src = {img_4}
                          alt ={"Imagem com recortes do meu site"}
                          nomeProjeto={t('meusite')}
                          descricaoProjeto={t('meuD')}
                          linguagens={'React.JS'}
                      />
                      <Cards
                          id ={'landing'}
                          src = {img_5}
                          alt ={"Imagem com recortes do me site"}
                          nomeProjeto={'Landing Page'}
                          descricaoProjeto={t('lanD')}
                          linguagens={'Html-Css-Jquery'}
                      />
                      <Cards
                          id ={'price'}
                          src = {img_6}
                          alt ={"link e imagem de uma calculadora feita em Javascript"}
                          nomeProjeto={'Price Grid'}
                          descricaoProjeto={t('priD')}
                          linguagens={'Html-Css-Javascript'}
                      />
                      <Cards
                          id ={'sistema_de_login'}
                          src = {img_7}
                          alt ={"link e imagem de uma calculadora feita em Javascript"}
                          nomeProjeto={t('backend')}
                          descricaoProjeto={t('backD')}
                          linguagens={'Node.JS-MongoDb-Express'}
                          link={'https://github.com/aleksei-sousa/sistema-de-login'}
                      />
                    </Slide>
                </div>
            </div>
        </div>
    )
}