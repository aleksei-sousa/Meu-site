import './GridCard.css'


// import react from './img/react_icone.png'
// import nodejs from './img/nodejs_icone.png'
// import js from './img/javascript_icone.png'
// import mysql from './img/mysql_icone.png'
// import corel from './img/corel_icone.png'
// import ps from './img/photoshop_icone.png'
// import css from './img/css_icone.png'
// import mongodb from './img/mongodb_icone.png'
// import figma from './img/figma_icone.png'
// import html from './img/html_icone.png'
// import api from './img/api_icone.png'

import react from './img/react.png'
import nodejs from './img/nodejs.png'
import js from './img/js.png'
import mysql from './img/mysql.png'
import corel from './img/corel.png'
import ps from './img/photoshop.png'
import css from './img/css.png'
import mongodb from './img/mongodb.png'
import figma from './img/figma.png'
import html from './img/html.png'
import api from './img/api.png'

//import React from '../../img/react.png'
//import Node from '../../img/nodejs.png'

export default function GridCard ({setTexto, setIcone}) {

    const mostrarIcones = (e) => {
      //console.log(e.target)
      let elemento = ''
      if(e.target.className == 'content_card'){
        elemento = e.target.children[0]
      }else {
        elemento = e.target
      }
      //console.log(elemento.id)
      setTexto(elemento.id)
      let primeiroEspaço = elemento.id.indexOf(' ')
      if(!(primeiroEspaço == -1)){
        const icone = elemento.id.substr(0, primeiroEspaço)
        setIcone(icone)
      }else{
        setIcone(elemento.id)
      }
    }

    return(
        <div className="container_card">

          <div className="content_card"
            onClick={(e)=>mostrarIcones(e)}>
            <img
              id='React js'
              className="icone"
              src={react}
            />
            <p className='nome_icone'>React</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Node js'
              className="icone"
              src={nodejs} 
            />
            <p className='nome_icone'>Node Js</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Javascript'
              className="icone"
              src={js} 
            />
            <p className='nome_icone'>Javascript</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Mysql'
              className="icone_p" 
              src={mysql}
            />
            <p className='nome_icone'>Mysql</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Mongo db'
              className="icone_g"
              src={mongodb}
            />
            <p className='nome_icone'>Mongo DB</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Api Rest'
              className="icone"
              src={api}
            />
            <p className='nome_icone'>Api</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Html'
              className="icone_m"
              src={html}
            />
            <p className='nome_icone'>Html</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img 
              id='Css'
              className="icone_m"
              src={css}
            />
            <p className='nome_icone'>Css</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Figma'
              className="icone_m"
              src={figma} />
            <p className='nome_icone'>Figma</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='Photoshop'
              className="icone"
              src={ps}
            />
            <p className='nome_icone'>Photoshop</p>
          </div>

          <div className="content_card" onClick={(e)=>mostrarIcones(e)}>
            <img
              id='CorelDraw'
              className="icone"
              src={corel}
            />
            <p className='nome_icone'>Coreldraw</p>
          </div>

        </div>
    )
}