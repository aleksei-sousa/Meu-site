
import front from '../Colmeia/img/front.png'
import back from '../Colmeia/img/back.png'
import backCircle from '../Colmeia/img/back-Circle.png'
import frontCircle from '../Colmeia/img/front-Circle.png'
import styles from '../tecnologias.module.css'
import colmeiaEvents from '../../../utils/colmeiaEvents'
export default function ({setColmeiaBtn, ColmeiaBtn, setIcone, icone}) {
    function trocarColmeia() {
        setColmeiaBtn(!ColmeiaBtn)

        const front = document.querySelector('#Front')
        const back = document.querySelector('#Back')
        
        if(ColmeiaBtn){
          colmeiaEvents.showMsg(back, setIcone, icone)
        } else {
          colmeiaEvents.showMsg(front, setIcone, icone)
        }
      }
    return(
      <div className={styles.container_btn_colmeia} onClick={trocarColmeia}>
        <div className={styles.border}>

        </div>
        <img
          className={`${styles.back_circle}`}
          src={`${ColmeiaBtn ? frontCircle : backCircle}`}
          id='Front'
          alt="icone da tecnologia"/>
        <img
          className={`${styles.btn_front} ${ColmeiaBtn ? styles.btn_active : styles.btn_desactive}`}
          src={back}
          id='Back'
          alt="icone da tecnologia"/>
        <img
          className={`${styles.btn_front} ${ColmeiaBtn ? styles.btn_desactive : styles.btn_active}`}
          src={front}
          id='Front'
          alt="icone da tecnologia"/>
    </div>
    )

}