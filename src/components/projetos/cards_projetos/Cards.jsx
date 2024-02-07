import { FaExternalLinkAlt } from "react-icons/fa";
import './cards.css'

import { useTranslation } from 'react-i18next';
import '../../locais/i18n'

export default function Cards ({id, src, alt, nomeProjeto, descricaoProjeto, link, linguagens }) {

  const { t } = useTranslation()

  const teste = false
    return(
        <div className="gradient_container" id={id}>
          <div className="container_img">
              <img className="cards_projeto" src={src} alt={alt}/>
              
                {link ?
                <a className="anc_img" href={link} target='blank'>
                  <FaExternalLinkAlt
                  size={20}
                  className="icone_link"

                />
                </a>
                :
                <></>
                }

              
          </div>
          <div className="projeto_descricao">
            <div className="nome_projeto">{nomeProjeto}</div>
            <div className="desc_projeto">
                <p>{descricaoProjeto}</p>
            </div>
            <div className="credito_projeto">
              <div className="eu"><p>100% {t('me')}:</p></div>
              <div className="ling_credito_projeto"><p>{linguagens}</p></div>
            </div>
          </div>
      </div>
    )
}