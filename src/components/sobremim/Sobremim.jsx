import './sobremim.css'
import euOlhando from '../../assets/eu_olhando3.png'
export default function SobreMim () {
    return(
        <div id="sobremim" className="container-sobre-mim">
          <div id="sobre-mim" className="sobre-mim">
              <div className="foto-apontando">
                <img className='img_foto' src={euOlhando} alt="" />
              </div>
                <div className="habilidades">
                  <div className="escolha-me">
                        <div className="sobre">Sobre mim</div>
                        <div className="subtitulo subtitulo-align-left sub1">Porque você deve me escolher!</div>
                  </div>
                    <div className="descrevendo-me">Olá, meu nome é Aleksei Sousa, 23 anos, sou programador <b>Front End</b> e <b>designer</b> freelancer. Busco as melhores soluções no mundo digital. Minhas maiores qualidades profissionais:</div>
                    <div className="container-niveis">
                        <div className="niveis">
                            <div className="habilidade">
                                <div className="nome-habilidade">Respeitar prazos</div>
                                <div className="barra">
                                    <div className="barra-ativa" id="hab1">
                                        <div className="barra-verde"></div>
                                        <div className="barra-btn"></div>
                                    </div>
                                    <div className="barra-cinza"></div>
                                </div>
                            </div>
                            <div className="habilidade">
                                <div className="nome-habilidade">Soluções no design e código</div>
                                <div className="barra">
                                    <div className="barra-ativa" id="hab2">
                                        <div className="barra-verde"></div>
                                        <div className="barra-btn"></div>
                                    </div>
                                    <div className="barra-cinza"></div>
                                </div>
                            </div>
                            <div className="habilidade">
                                <div className="nome-habilidade">Criatividade</div>
                                <div className="barra">
                                    <div className="barra-ativa" id="hab3">
                                        <div className="barra-verde"></div>
                                        <div className="barra-btn"></div>
                                    </div>
                                    <div className="barra-cinza"></div>
                                </div>
                            </div>
                            <div className="habilidade">
                                <div className="nome-habilidade">Disponibilidade p/ qualquer dúvida</div>
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