import { useState, useEffect } from 'react'
import BtnColmeia from './btn/BtnColmeia'
import ColmeiaFront from './Colmeia/ColmeiaFront'
import ColmeiaBack from './Colmeia/ColmeiaBack'
import BoxTech from './box-tech/BoxTech'
import styles from './tecnologias.module.css'
import styles2 from './Colmeia/colmeia.module.css'


//import sr from '../../utils/scrollReaveal/ScrollReaveal'
import { useTranslation } from 'react-i18next';
import '../locais/i18n'


const javascript = '/src/components/tecnologias/img/javascript.png'
import React from './img/react.png'
import front from './Colmeia/img/front.png'
import back from './Colmeia/img/back.png'
import backCircle from './Colmeia/img/back-Circle.png'
import frontCircle from './Colmeia/img/front-Circle.png'
//import Node from './img/nodejs.png'




export default function Tecnologias (){
  
  const { t } = useTranslation()

  const [icone, setIcone] = useState('Back')
  const [texto, setTexto] = useState('React')
  const [paper1, setPaper1] = useState(false)
  const [ColmeiaBtn, setColmeiaBtn] = useState(false)
  //console.log(icone)
  useEffect(() => {
    //console.log(icone)
    const strIcone = icone
  }, [icone])

  const fadePaper = (e) =>{
    const elemento = e.target
    const classe = styles2.colmeia

    if(elemento.classList[1] == classe){
      return
    }
    setIcone(false)
  }



    return(
      <div className={styles.tecnologias_container} id='tecnologias'
      onClick={(e)=>fadePaper(e)}>
          <div className={styles.tecnologias_content}>
            <div className={styles.subtitulo_central}>
              <h1 className={`${styles.texto_sub} ${styles.sub2}`}>{t('technologiesT')}</h1>
            </div>
            {/* <a className={styles.link_lista} href=''>Lista completa</a> */}

            <div className={styles.tecnologias_cards} id='tecnologias_cards' >
              {/* <GridCard setTexto={setTexto} setIcone={setIcone} />

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
              </div> */}

              <BtnColmeia setColmeiaBtn={setColmeiaBtn} ColmeiaBtn={ColmeiaBtn} setIcone={setIcone} icone={icone} />
              <ColmeiaFront
                setPaper1={setPaper1}setTexto={setTexto}
                setIcone={setIcone} icone={icone} ColmeiaBtn={ColmeiaBtn}
              />
              
              <BoxTech paper1={paper1} icone={icone} texto={texto}/>

              <ColmeiaBack
                setPaper1={setPaper1} setTexto={setTexto}
                setIcone={setIcone} icone={icone} ColmeiaBtn={ColmeiaBtn}
              />

            </div>
          </div>
      </div>
    )
}