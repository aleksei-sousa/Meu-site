import styles from './navbar.module.css'
import { useState } from 'react'
import './navbar.css'
import stylesM from '../main/main.module.css'

import { MdHome } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { RiFoldersFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";

export default function Navbar ({navbar, sidebar, setSidebar}) {

function side () {  
const tamanho = window.innerWidth
if (tamanho<=790){
  setSidebar(!sidebar)
}
}
//${styles.content_h}
//home, tech, 
    return(
      <header className={navbar ? styles.h_ativo: ''}>

      <ul className={`${styles.sidebar2} ${sidebar ? `${styles.sidebar_ativo}`:`${styles.sidebar_desativado}`}`}>
        <li>
          <button onClick={side} className={styles.menu_hamburguer2}>
            <div className={styles.row1b}></div>
            <div className={styles.row2b}></div>
            <div className={styles.row3b}></div>
          </button>
        </li>
        <li><a className={styles.link} href="#inicio" onClick={side}>
          <p>Início</p>
          {/* <CiHome
           size={30}
          /> */}
          <MdHome
            size={22}
           />
        </a></li>
        <li><a className={styles.link} href="#sobremim" onClick={side}>
        <p>Sobre mim</p>
          <MdEmojiPeople
            size={25}
           />
          </a></li>
        <li><a className={styles.link} href="#projetos" onClick={side}>
        <p>Projetos</p>
          <RiFoldersFill
            size={22}
           />
          </a></li>
        <li><a className={styles.link} href="#tecnologias" onClick={side}>
        <p>Tecnologias</p>
          <GrTechnology
            size={22}
           />
          </a></li>
      </ul>




        <div className={navbar ? `${sidebar ? `${styles.content_h} ${styles.content_h_ativo} ${styles.content_filter}`: `${styles.content_h} ${styles.content_h_ativo} `}`:
        `${sidebar ? `${styles.content_h} ${styles.content_filter} `:
          `${styles.content_h} ` }}  `}>
          {/* <div className={styles.logo}>- DESENVOLVEDOR -</div> */}
          <a href='#inicio' className={!navbar? `${styles.logo_ativo} ${styles.logo}` : `${styles.logo_desativo} ${styles.logo}` }>- DESENVOLVEDOR -</a>
          <button onClick={side} className={styles.menu_hamburguer1}>
                <div className={styles.row1}></div>
                <div className={styles.row2}></div>
                <div className={styles.row3}></div>
          </button>
          <ul   className={`${styles.sidebar} ${sidebar ? `${styles.sidebar_ativo}`:`${styles.sidebar_desativado}`}`}>
            <li>
              <button onClick={side} className={styles.menu_hamburguer2}>
                <div className={styles.row1}></div>
                <div className={styles.row2}></div>
                <div className={styles.row3}></div>
              </button>
            </li>
            <li><a className={styles.link} href="#inicio" onClick={side}>Início</a></li>
            <li><a className={styles.link} href="#sobremim" onClick={side}>Sobre mim</a></li>
            <li><a className={styles.link} href="#projetos" onClick={side}>Projetos</a></li>
            <li><a className={styles.link} href="#tecnologias" onClick={side}>Tecnologias</a></li>
          </ul>
        </div>
      </header>
    )

}