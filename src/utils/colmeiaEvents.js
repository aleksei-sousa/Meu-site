function showPaper (setPaper1) {
    setPaper1(false)
}

function fadePaper (setPaper1) {
    setPaper1(true)
}

function showMsg (e, setIcone, icone) {

    const setar =(id)=>{
        console.log('adicionar')
        setIcone(id)
    }

    function controlSet (nome) {
        const id = e.target.id
        if(icone){
            console.log('retirar')
            setIcone(false)
            setTimeout(function() {
                setar(nome);
            }, 300);
        } else {
            setIcone(nome)
        }
    }
    
    let primeiroEspaço = e.target.id.indexOf(' ')
    console.log(primeiroEspaço)
           if(!(primeiroEspaço == -1)){
            //É DOIS
             const nomeDuplo = e.target.id.substr(0, primeiroEspaço)
             console.log(icone)
             controlSet(nomeDuplo)
           }else{
            //É UM
                console.log(e.target.id)
             controlSet(e.target.id)
           }



    }

    export default {
        showMsg,
        showPaper,
        fadePaper
    }

