import styles from './inicio.module.css'

import eu from '../../assets/eu1.png'

export default function Inicio () {
    return(
        <div className={styles.container_hidden} id='inicio'>
          <div className={styles.white_cuble}></div>
          <div className={styles.texto_apresentacao}>
            <div className={styles.content_apresentacao}>

              <div className={styles.ola}>Olá, meu nome é</div>
              <div className={styles.meu_nome}><h1>Aleksei Sousa</h1></div>
              <div className={styles.desenvolvedor}><h2>Desenvolvedor Front-End / Designer</h2></div>
              <div className={styles.auto_descricao}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae molestias excepturi a eius.</p></div>
              <div className={styles.btn_mais}>mais</div>
              
            </div>
          </div>
          <img className={styles.minha_foto} src={eu} alt="" />
        </div>
    )

}