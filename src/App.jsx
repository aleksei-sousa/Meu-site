import './App.css'
import Header from './components/navbar/Navbar';
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react';
const cardsSlide = document.querySelector('.gradient_container')
console.log(cardsSlide)

function App() {

  const [sidebar, setSidebar] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const mudarNavbar = (e) =>{
    //console.log(window.scrollY)
    if(window.scrollY > 260){
      setNavbar(true)
    } else if (window.scrollY < 260){
      setNavbar(false)
    }
  }

  const redimensionar = (e) => {
    const width = window.innerWidth
    if (width > 790){
      setSidebar(false)
    }
  }


  window.addEventListener('scroll', mudarNavbar)
  window.addEventListener('resize', redimensionar)

  return (
    <>
      <Header navbar={navbar} setSidebar ={setSidebar} sidebar={sidebar} />
      <Main setSidebar ={setSidebar} sidebar={sidebar} />
      <Footer setSidebar ={setSidebar} sidebar={sidebar} />
    </>
  )
}

export default App
