import { useState, useEffect } from 'react'
import GridCard from './GridCard/GridCard'
import styles from './tecnologias.module.css'
import caixa from './img/caixa_titulo_icone2.png'

const javascript = '/src/components/tecnologias/img/javascript.png'
import React from './img/react.png'
//import Node from './img/nodejs.png'


export default function Tecnologias (){

  const textoss = {
    React: 'React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.',

    Node: 'O Node.js é um ambiente de execução do código JavaScript do lado servidor (server side)',

    Javascript: 'O JavaScript possui grande foco no Front-end (client side), ou seja, é comumente utilizada para rodar no “lado cliente” da aplicação.',

    Mysql: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. O MySQL é uma escolha popular para sites, blogs, lojas online e sistemas de gerenciamento de conteúdo (CMS)',
    Mongo: 'Mongo DB é um sistema de gerenciamento de banco de dados (DBMS) não relacional, baseado em software livre, que utiliza documentos flexíveis em vez de tabelas e linhas para processar e armazenar várias formas de dados. ',

    Api: 'Às vezes, APIs são descritas como um contrato entre um provedor e um usuário de informações, estabelecendo o conteúdo exigido pelo consumidor (a chamada) e o conteúdo exigido pelo produtor (a resposta).',

    Html: 'A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online.',
    Css: 'CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.',
    Figma: 'o Figma é uma ferramenta de design criada com o objetivo de tornar a prática do design mais acessível.',
    Photoshop: 'O Photoshop é usado para edição de imagens, criação de arte digital, design gráfico e animações.',
    CorelDraw: 'O CorelDRAW é um software desenvolvido para possibilitar a criação dos mais variados produtos de comunicação visual, como desenhos, folders, retoques em fotografias, entre outros,'
  }
 

  const [icone, setIcone] = useState('React')
  const [texto, setTexto] = useState('React')

  useEffect(() => {
    //console.log(icone)
    const strIcone = icone
    //console.log(textoss[icone])
  }, [icone])





    return(
      <div className={styles.tecnologias_container} id='tecnologias'>
          <div className={styles.tecnologias_content}>
            <div className={styles.subtitulo_central}>
              <h1 className={`${styles.texto_sub} ${styles.sub2}`}>Tecnologias</h1>
            </div>
            {/* <a className={styles.link_lista} href=''>Lista completa</a> */}

            <div className={styles.tecnologias_cards}>
              <GridCard setTexto={setTexto} setIcone={setIcone} />

              <div className={styles.exibicao_cards}>
                  <div className={styles.container_caixa}>
                    <img src={caixa} className={styles.caixa_background} alt="" />
                    <div className={styles.caixa_vars}>
                      <img src={`/Meu-site/src/components/tecnologias/img/${icone}.png`} className={styles.caixa_icone}/>
                      <h1 className={styles.caixa_texto}>{texto}</h1>
                    </div>
                  </div>

                <div className={styles.descricao_card}>
                {textoss[icone]}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}