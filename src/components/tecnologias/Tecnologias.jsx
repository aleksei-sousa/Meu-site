import { useState, useEffect } from 'react'
import GridCard from './GridCard/GridCard'
import styles from './tecnologias.module.css'
import caixa from './img/caixa_titulo_icone2.png'
//import sr from '../../utils/scrollReaveal/ScrollReaveal'
import { useTranslation } from 'react-i18next';
import '../locais/i18n'

const javascript = '/src/components/tecnologias/img/javascript.png'
import React from './img/react.png'
//import Node from './img/nodejs.png'


export default function Tecnologias (){
  
  const { t } = useTranslation()

  const [icone, setIcone] = useState('React')
  const [texto, setTexto] = useState('React')

  useEffect(() => {
    console.log(icone)
    const strIcone = icone
    //console.log(textoss[icone])
  }, [icone])

    return(
      <div className={styles.tecnologias_container} id='tecnologias'>
          <div className={styles.tecnologias_content}>
            <div className={styles.subtitulo_central}>
              <h1 className={`${styles.texto_sub} ${styles.sub2}`}>{t('technologiesT')}</h1>
            </div>
            {/* <a className={styles.link_lista} href=''>Lista completa</a> */}

            <div className={styles.tecnologias_cards} id='tecnologias_cards'>
              <GridCard setTexto={setTexto} setIcone={setIcone} />

              <div className={styles.exibicao_cards}>
                  <div className={styles.container_caixa}>
                    <img src={caixa} className={styles.caixa_background} alt="" />
                    <div className={styles.caixa_vars}>
                      <img src={`/Meu-site/src/components/tecnologias/img/${icone}.png`} className={styles.caixa_icone}/>
                      <h1 className={styles.caixa_texto}>{texto}</h1>
                    </div>
                  </div>

                <div className={styles.descricao_card}>
                  {t(`${icone}`)}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}