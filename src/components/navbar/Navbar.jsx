import styles from './navbar.module.css'
import { useState } from 'react'
import './navbar.css'

import { MdHome } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { RiFoldersFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";

import { MdOutlineTranslate } from "react-icons/md";

import { useTranslation } from 'react-i18next';
import '../locais/i18n'

export default function Navbar ({navbar, sidebar, setSidebar}) {

const [selecti, setSelecti] = useState('')
const [tr, setTr] = useState('en')
const { t, i18n} = useTranslation()

//i18n.changeLanguage('pt')

function side () {  
  const tamanho = window.innerWidth
    if (tamanho<=790){
      setSidebar(!sidebar)
    }
}

function idiomaChange (e) {
  const valor = e.value
  console.log(valor)
  setTr(valor)
  i18n.changeLanguage(valor)
}

function teste2 (e) {
  console.log(e)
  idiomaChange(e)
  setSelecti(`${styles.c_select_disappear}`)
}

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
          <p>{t('home')}</p>
          {/* <CiHome
           size={30}
          /> */}
          <MdHome
            size={22}
           />
        </a></li>
        <li><a className={styles.link} href="#sobremim" onClick={side}>
        <p>{t('aboutMe')}</p>
          <MdEmojiPeople
            size={25}
           />
          </a></li>
        <li><a className={styles.link} href="#projetos" onClick={side}>
        <p>{t('projects')}</p>
          <RiFoldersFill
            size={22}
           />
          </a></li>
        <li><a className={styles.link} href="#tecnologias" onClick={side}>
        <p>{t('technologies')}</p>
          <GrTechnology
            size={22}
           />
          </a></li>
          <li>
          <div className={`${styles.c_select} ${styles.c_select3}`}>
                <MdOutlineTranslate color='black' className={styles.translate_icon}/>
              <select className={`${styles.select} ${styles.c_select3}`} onChange={(e)=>teste2(e.target)} value={tr}>
                <option value="en">En</option>
                <option value="pt">PT</option>
              </select>
            </div>
          </li>
      </ul>




        <div className={navbar ? `${sidebar ? `${styles.content_h} ${styles.content_h_ativo} ${styles.content_filter}`: `${styles.content_h} ${styles.content_h_ativo} `}`:
        `${sidebar ? `${styles.content_h} ${styles.content_filter} `:
          `${styles.content_h} ` }}  `}>
          {/* <div className={styles.logo}>- DESENVOLVEDOR -</div> */}
          <a href='#inicio' className={!navbar? `${styles.logo_ativo} ${styles.logo}` : `${styles.logo_desativo} ${styles.logo}` }>{t('developer')}</a>


          {/* <div className={`${selecti} ${styles.c_select} ${styles.c_select_appear}`}>
              <MdOutlineTranslate className={styles.translate_icon} color='white'/>
              <select className={styles.select} value={tr}
                onChange={(e)=>teste2(e.target)}
              >
                <option value="en">En</option>
                <option value="pt">PT</option>
              </select>
            </div> */}


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
            <li><a className={styles.link} href="#inicio" onClick={side}>{t('home')}</a></li>
            <li><a className={styles.link} href="#sobremim" onClick={side}>{t('aboutMe')}</a></li>
            <li><a className={styles.link} href="#projetos" onClick={side}>{t('projects')}</a></li>
            <li><a className={styles.link} href="#tecnologias" onClick={side}>{t('technologies')}</a></li>
            <li><div className={styles.c_select}>
                <MdOutlineTranslate className={styles.translate_icon}/>
              <select className={styles.select} onChange={(e)=>teste2(e.target)} value={tr}>
                <option value="en">En</option>
                <option value="pt">PT</option>
              </select>
            </div></li>
          </ul>
        </div>
      </header>
    )

}