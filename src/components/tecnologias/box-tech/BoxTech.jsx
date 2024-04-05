import styles from './boxtech.module.css'
import colmeia from './colmeia.png'
import bandeira from './bandeira.png'
import { useTranslation } from 'react-i18next';
import '../../locais/i18n'

import front from '../img/bandeira_img/Front.png' 
import react from '../img/bandeira_img/react.png' 
import javascript from '../img/bandeira_img/javascript.png' 
import figma from '../img/bandeira_img/figma.png'
import css from '../img/bandeira_img/css.png' 
import html from '../img/bandeira_img/html.png' 
import coreldraw from '../img/bandeira_img/coreldraw.png' 
import photoshop from '../img/bandeira_img/photoshop.png' 
import github from '../img/bandeira_img/github.png'



//clip-path: polygon(50% 100%, 100% 75%, 100% 0, 0 0, 0 75%);
export default function BoxTech ({icone, texto, paper1}) {
  const { t } = useTranslation()
    return(
    <>
      <div className={styles.container_caixa}>

        <div className={styles.caixa_background}>
          <div className={`${styles.content_icon} ${icone ? styles.content_icon_ativo :''}`} alt="">
            <img className={styles.img_icon} src={`/Meu-site/src/components/tecnologias/img/bandeira_img/${icone}.png`} alt="" ></img>
          </div>

        </div>

        <div className={styles.traco}></div>

        <div className={`${styles.pergaminho_pedaco} ${paper1 ? styles.pergaminho_pedaco_ativo : ' '}`}>
          {paper1}
        </div>

        <div className={`${styles.pergaminho} ${icone ? styles.pergaminho_ativo : ''}`}>
          <div className={styles.pergaminho_texto}>{t(`${icone}`)}</div>
        </div>
        
        {/* <div className={styles.caixa_vars}>
          <img src={`/Meu-site/src/components/tecnologias/img/${icone}.png`} className={styles.caixa_icone}/>
          <h1 className={styles.caixa_texto}>{texto}</h1>
        </div>  
      </div>
      <div className={styles.descricao_card}>
        {t(`${icone}`)}*/}
      </div> 
    </>
    )
}