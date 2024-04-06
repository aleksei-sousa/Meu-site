import styles from './boxtech.module.css'
import colmeia from './colmeia.png'
import bandeira from './bandeira.png'
import { useTranslation } from 'react-i18next';
import '../../locais/i18n'

import front from '../img/bandeira_img/front.png'
import back from '../img/bandeira_img/back.png'
import react from '../img/bandeira_img/react.png' 
import javascript from '../img/bandeira_img/javascript.png' 
import figma from '../img/bandeira_img/figma.png'
import css from '../img/bandeira_img/css.png' 
import html from '../img/bandeira_img/html.png' 
import coreldraw from '../img/bandeira_img/coreldraw.png' 
import photoshop from '../img/bandeira_img/photoshop.png' 
import github from '../img/bandeira_img/github.png'

import api from '../img/bandeira_img/api.png'
import node from '../img/bandeira_img/node.png'
import mongo from '../img/bandeira_img/mongo.png'
import mysql from '../img/bandeira_img/mysql.png'
import postman from '../img/bandeira_img/postman.png'
import insomnia from '../img/bandeira_img/insomnia.png'
import git from '../img/bandeira_img/git.png'





//clip-path: polygon(50% 100%, 100% 75%, 100% 0, 0 0, 0 75%);
export default function BoxTech ({icone, texto, paper1}) {
  const { t } = useTranslation()
  console.log(icone)
    return(
    <>
      <div className={styles.container_caixa}>

        <div className={styles.caixa_background}>
          <div className={`${styles.content_icon} ${icone ? styles.content_icon_ativo :''}`} alt="">
            {/* <img className={styles.img_icon} src={`/Meu-site/src/components/tecnologias/img/bandeira_img/${icone}.png`} alt="" ></img> */}

            {icone == 'Api' && <img src={api} className={styles.img_icon}/>}
            {icone == 'Node' && <img src={node} className={styles.img_icon}/>}
            {icone == 'Mongo' && <img src={mongo} className={styles.img_icon}/>}
            {icone == 'Mysql' && <img src={mysql} className={styles.img_icon}/>}
            {icone == 'Git' && <img src={git} className={styles.img_icon}/>}
            {icone == 'Postman' && <img src={postman} className={styles.img_icon}/>}
            {icone == 'Insomnia' && <img src={insomnia} className={styles.img_icon}/>}

            {icone == 'React' && <img src={react} className={styles.img_icon}/>}
            {icone == 'Javascript' && <img src={javascript} className={styles.img_icon} />}
            {icone == 'Figma' && <img src={figma} className={styles.img_icon}/>}
            {icone == 'Css' && <img src={css} className={styles.img_icon}/>}
            {icone == 'Html' && <img src={html} className={styles.img_icon}/>}
            {icone == 'Photoshop' && <img src={photoshop} className={styles.img_icon}/>}
            {icone == 'CorelDraw' && <img src={coreldraw} className={styles.img_icon}/>}
            {icone == 'Github' && <img src={github} className={styles.img_icon}/>}

            {icone == 'Front' && <img src={front} className={styles.img_icon}/>}
            {icone == 'Back' && <img src={back} className={styles.img_icon}/>}
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