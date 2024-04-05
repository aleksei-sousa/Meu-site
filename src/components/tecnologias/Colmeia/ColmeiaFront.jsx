import styles from './colmeia.module.css'

import react from './img/react.png'
import col from './colmeia.png'
import nodejs from './img/nodejs.png'
import js from './img/javascript.png'
import mysql from './img/mysql.png'
import corel from './img/corel.png'
import ps from './img/photoshop.png'
import css from './img/css.png'
import mongodb from './img/mongodb.png'
import figma from './img/figma.png'
import html from './img/html.png'
import github from './img/github.png'
import front from './img/front.png'
import colmeiaEvents from '../../../utils/colmeiaEvents'

export default function ColmeiaFront ({setPaper1, setTexto, setIcone, icone, ColmeiaBtn}) {

    const showPaper = () =>{
        setPaper1(false)
    }
    const fadePaper = () =>{
        setPaper1(true)
    }

    return(
    <div className={`${styles.container_front} ${ColmeiaBtn ? styles.container_active : styles.container_desactive}`}>
        <div className={styles.c1}>
            <img
                className={`${styles.imgfront} ${styles.colmeia}`}
                src={front}
                id='Front'
                alt="icone da tecnologia"
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
        </div>
        <div className={styles.c2}>
            <img
              className={`${styles.img2} ${styles.colmeia}`}
              src={react}
              id='React'
              alt="icone da tecnologia"
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
            <img
              className={`${styles.img3} ${styles.colmeia}`}
              src={js}
              id='Javascript'
              alt="icone da tecnologia"
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
          </div>
          <div className={styles.c3}>
            <img className={`${styles.img4} ${styles.colmeia}`}
              src={figma}
              alt="icone da tecnologia"             
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              id='Figma'
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
            <img
              className={`${styles.img5} ${styles.colmeia}`}
              src={css}
              alt="icone da tecnologia"
              id='Css'
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
            <img
              className={`${styles.img6} ${styles.colmeia}`}
              src={html}
              alt="icone da tecnologia"
              id='Html'
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
        </div>
        <div className={styles.c4}>
            <img
              className={`${styles.img7} ${styles.colmeia}`}
              src={ps}
              alt="icone da tecnologia"
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              id='Photoshop'
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
            <img
              className={`${styles.img8} ${styles.colmeia}`}
              src={corel}
              alt="icone da tecnologia"
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              id='CorelDraw'
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
        </div>
        {/* <div className={styles.c5}>
            <img
              className={`${styles.img9} ${styles.colmeia}`}
              src={github}
              alt=""
              id='Github'
              onMouseOut={showPaper}
              onMouseOver={fadePaper}
              onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}/>
        </div> */}
    </div>
    )
}