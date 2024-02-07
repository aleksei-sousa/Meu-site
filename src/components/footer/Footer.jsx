import styles from './footer.module.css'

import {FaLinkedin, FaWhatsappSquare, FaInstagramSquare, FaPhoneSquare, FaGithubSquare,  FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaGithub  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


import { GrSidebar } from 'react-icons/gr';
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer ({sidebar, setSidebar}) {
    const tamanho = 30
    const corIcone = 'aliceblue'

    function copiarNumero(id){
        const textoCopiado = '91 991050765'
        navigator.clipboard.writeText(id)
        if (id == '91 991050765'){
            let msg = 'O número de telefone foi copiado para a área de transferência'
            alert(msg)
        }else{
            let msg = 'O E-mail foi copiado para a área de tranferência'
            alert(msg)
        }
    }

    function ss () {        
        const tamanho = window.innerWidth
        //console.log(tamanho)
        if ((tamanho<=790) && sidebar){
          setSidebar(!sidebar)
          }
      }

    const alert = (msg) => {
        window.alert(msg)
    }
    return(
        <footer className={sidebar ? `${styles.filter}`:``} onClick={ss}>
            <div className={styles.container_footer}>
                <h1 className={styles.titulo_footer}>
                    <span className={styles.front}>Front </span><span className={styles.end}>End</span>
                </h1>
                <div className={styles.content_midias_sociais}>
                    <a className={styles.link_midias_sociais} href="https://www.instagram.com/aleksei_sousa?igsh=dTlqcTQ5NzJ3ZzU0" target='blank'>
                        <FaInstagramSquare color={corIcone} className={styles.footer_icon}/>
                    </a>
                    <a className={styles.link_midias_sociais} target='blank' href="https://wa.me/0559191050765">
                        <FaWhatsappSquare color={corIcone} className={styles.footer_icon}/>
                    </a>
                    {/* <p className={styles.link_midias_sociais} href="">
                        <FaFacebookF size={25} color='white' />
                    </p> */}
                
                    <p className={styles.link_midias_sociais} onClick={e=>{copiarNumero('91 991050765')}}>
                        <FaPhoneSquare color={corIcone} className={styles.footer_icon} />
                    </p>
                    <a className={styles.link_midias_sociais}
                    //   href="mailto:alekseisousa95@gmail.com?Subject=Desenvolvedor%20Front%20end"
                    //   target='blank'
                      onClick={e=>{copiarNumero('alekseisousa95@gmail.com')}}>
                      <IoMdMail color={corIcone} className={styles.footer_icon}/>
                    </a>
                    <a className={styles.link_midias_sociais} href='https://github.com/aleksei-sousa/' target='blank'>
                      <FaGithubSquare color={corIcone} className={styles.footer_icon}/>
                    </a>
                    <a className={styles.link_midias_sociais} href='https://linkedin.com/in/aleksei-sousa-89533a252' target='blank'>
                      <FaLinkedin color={corIcone} className={styles.footer_icon} />
                    </a>
                </div>
                <h1 className={styles.meu_email}>alekseisousa95@gmail.com</h1>
            </div>
        </footer>
    )
}

