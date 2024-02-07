import './sobremim.css'
import euOlhando from '../../assets/eu_olhando3.png'

import { useTranslation } from 'react-i18next';
import '../locais/i18n'

export default function SobreMim () {

    const { t } = useTranslation()
    
    return(
        <div id="sobremim" className="container-sobre-mim">
          <div id="sobre-mim" className="sobre-mim">
              <div className="foto-apontando">
                <img className='img_foto' src={euOlhando} alt="" />
              </div>
                <div className="habilidades">
                  <div className="escolha-me">
                        <div className="sobre">{t('aboutMe')}</div>
                        <div className="subtitulo subtitulo-align-left sub1">{t('chooseMe')}</div>
                  </div>
                    <div className="descrevendo-me">{t('euDet')}</div>
                    <div className="container-niveis">
                        <div className="niveis">
                            <div className="habilidade">
                                <div className="nome-habilidade">{t('commitment')}</div>
                                <div className="barra">
                                    <div className="barra-ativa" id="hab1">
                                        <div className="barra-verde"></div>
                                        <div className="barra-btn"></div>
                                    </div>
                                    <div className="barra-cinza"></div>
                                </div>
                            </div>
                            <div className="habilidade">
                                <div className="nome-habilidade">{t('solutions')}</div>
                                <div className="barra">
                                    <div className="barra-ativa" id="hab2">
                                        <div className="barra-verde"></div>
                                        <div className="barra-btn"></div>
                                    </div>
                                    <div className="barra-cinza"></div>
                                </div>
                            </div>
                            <div className="habilidade">
                                <div className="nome-habilidade">{t('creativity')}</div>
                                <div className="barra">
                                    <div className="barra-ativa" id="hab3">
                                        <div className="barra-verde"></div>
                                        <div className="barra-btn"></div>
                                    </div>
                                    <div className="barra-cinza"></div>
                                </div>
                            </div>
                            <div className="habilidade">
                                <div className="nome-habilidade">{t('availability')}</div>
                                <div className="barra">
                                    <div className="barra-ativa" id="hab4">
                                        <div className="barra-verde"></div>
                                        <div className="barra-btn"></div>
                                    </div>
                                    <div className="barra-cinza"></div>
                                </div>
                            </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )

}