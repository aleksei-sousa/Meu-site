import styles from './colmeia.module.css'

import col from './colmeia.png'
import back from './img/back.png'
import nodejs from './img/nodejs.png'
import api from './img/api.png'
import mysql from './img/mysql.png'
import mongodb from './img/mongodb.png'
import postman from './img/postman.png'
import insomnia from './img/insomnia.png'
import git from './img/git.png'
import colmeiaEvents from '../../../utils/colmeiaEvents'

export default function ColmeiaBack ({setPaper1, setTexto, setIcone, icone, ColmeiaBtn}) {

    const showPaper = () =>{
        setPaper1(false)
    }
    const fadePaper = () =>{
        setPaper1(true)
    }

    return(
    <div className={`${styles.container_back} ${ColmeiaBtn ? styles.container_desactive : styles.container_active}`}>
        <div className={styles.c1}>
            <img
                className={`${styles.imgback} ${styles.colmeia}`}
                src={back}
                alt="icone da tecnologia"
                id='Back'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
        </div>

        <div className={styles.c2}>
            <img
                className={`${styles.img2} ${styles.colmeia}`}
                src={nodejs}
                alt="icone da tecnologia"
                id='Node Js'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
            <img
                className={`${styles.img3} ${styles.colmeia}`}
                src={api}
                alt="icone da tecnologia"
                id='Api'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
        </div>

        <div className={styles.c3}>
            <img
                className={`${styles.img4} ${styles.colmeia}`}
                src={mongodb}
                alt="icone da tecnologia"
                id='Mongo db'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
            <img
                className={`${styles.img5} ${styles.colmeia}`}
                src={mysql}
                alt="icone da tecnologia"
                id='Mysql'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
            <img
                className={`${styles.img6} ${styles.colmeia}`}
                src={git}
                alt="icone da tecnologia"
                id='Git'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
        </div>

        <div className={styles.c4}>
            <img
                className={`${styles.img7} ${styles.colmeia}`}
                src={postman}
                alt="icone da tecnologia"
                id='Postman'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
            <img
                className={`${styles.img8} ${styles.colmeia}`}
                src={insomnia}
                alt="icone da tecnologia"
                id='Insomnia'
                onMouseOut={showPaper}
                onMouseOver={fadePaper}
                onClick={(e)=>colmeiaEvents.showMsg(e, setIcone, icone)}
            />
        </div>
    </div>
    )
}