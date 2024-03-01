export default function Redimensionar() {

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
    return(mudarNavbar, redimensionar)
}