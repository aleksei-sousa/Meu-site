import Inicio from '../inicio/Inicio'
import Sobremim from '../sobremim/Sobremim'
import Projetos from '../projetos/Projetos'
import Tecnologias from '../tecnologias/Tecnologias'
import styles from './main.module.css'


export default function ({sidebar, setSidebar}) {

    function ss () {        
      const tamanho = window.innerWidth
      //console.log(tamanho)
      if ((tamanho<=790) && sidebar){
        setSidebar(!sidebar)
        }
    }
    return(
        <main className={sidebar? `${styles.main}`: ''} onClick={ss}>
          <Inicio />
          <Sobremim />
          <Projetos />
          <Tecnologias />
        </main>
    )
}