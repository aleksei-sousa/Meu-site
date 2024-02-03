import styles from './GridCard.module.css'


// import react from './img/react_icone.png'
// import nodejs from './img/nodejs_icone.png'
// import js from './img/javascript_icone.png'
// import mysql from './img/mysql_icone.png'
// import corel from './img/corel_icone.png'
// import ps from './img/photoshop_icone.png'
// import css from './img/css_icone.png'
// import mongodb from './img/mongodb_icone.png'
// import figma from './img/figma_icone.png'
// import html from './img/html_icone.png'
// import api from './img/api_icone.png'

import react from './img/react.png'
import nodejs from './img/nodejs.png'
import js from './img/js.png'
import mysql from './img/mysql.png'
import corel from './img/corel.png'
import ps from './img/photoshop.png'
import css from './img/css.png'
import mongodb from './img/mongodb.png'
import figma from './img/figma.png'
import html from './img/html.png'
import api from './img/api.png'

//import React from '../../img/react.png'
//import Node from '../../img/nodejs.png'

export default function GridCard ({setTexto, setIcone}) {

    const mostrarIcones = (e) => {
      const filhos = e.target.children.length
      let elemento
      if(filhos != 0){
        elemento = e.target.children[0]
      }else {
        elemento = e.target
      }
      //console.log(elemento.id)
      setTexto(elemento.id)
      let primeiroEspaço = elemento.id.indexOf(' ')
      if(!(primeiroEspaço == -1)){
        const icone = elemento.id.substr(0, primeiroEspaço)
        setIcone(icone)
      }else{
        setIcone(elemento.id)
      }
    }

    return(
        <div className={styles.container_card}>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='React js'
              className={styles.icone}
              src={react}
            />
            <p className={styles.nome_icone_cards}>React</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Node js'
              className={styles.icone}
              src={nodejs} 
            />
            <p className={styles.nome_icone_cards}>Node Js</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Javascript'
              className={styles.icone}
              src={js} 
            />
            <p className={styles.nome_icone_cards}>Javascript</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Mysql'
              className={styles.icone_p} 
              src={mysql}
            />
            <p className={styles.nome_icone_cards}>Mysql</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Mongo db'
              className={styles.icone_g}
              src={mongodb}
            />
            <p className={styles.nome_icone_cards}>Mongo DB</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Api Rest'
              className={styles.icone}
              src={api}
            />
            <p className={styles.nome_icone_cards}>Api</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Html'
              className={styles.icone_m}
              src={html}
            />
            <p className={styles.nome_icone_cards}>Html</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img 
              id='Css'
              className={styles.icone_m}
              src={css}
            />
            <p className={styles.nome_icone_cards}>Css</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Figma'
              className={styles.icone_m}
              src={figma} />
            <p className={styles.nome_icone_cards}>Figma</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Photoshop'
              className={styles.icone}
              src={ps}
            />
            <p className={styles.nome_icone_cards}>Photoshop</p>
          </div>

          <div className={styles.content_card} onClick={(e)=>mostrarIcones(e)}>
            <img
              id='CorelDraw'
              className={styles.icone}
              src={corel}
            />
            <p className={styles.nome_icone_cards}>Coreldraw</p>
          </div>

        </div>
    )
}