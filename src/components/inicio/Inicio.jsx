import styles from './inicio.module.css'
import eu from '../../assets/eu1.png'

import { useTranslation } from 'react-i18next';
import '../locais/i18n'

export default function Inicio () {
    const { t } = useTranslation()
    return(
        <div className={styles.container_hidden} id='inicio'>
          <div className={styles.white_cuble}></div>
          <div className={styles.texto_apresentacao}>
            <div className={styles.content_apresentacao}>

              <div className={styles.ola}>{t('hi')}</div>
              <div className={styles.meu_nome}><h1>Aleksei Sousa</h1></div>
              <div className={styles.desenvolvedor}><h2>{t('dev')}</h2></div>
              <div className={styles.auto_descricao}><p>{t('devDet')}</p></div>
              <a href="#sobre-mim" className={styles.btn_mais}>{t('more')}</a>
              
            </div>
          </div>
          <img className={styles.minha_foto} src={eu} alt="" />
        </div>
    )

}