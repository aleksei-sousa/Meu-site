function showPaper (setPaper1) {
    setPaper1(false)
}

function fadePaper (setPaper1) {
    setPaper1(true)
}

function showMsg (e, setIcone, icone) {

    const setar = (id) => {
        //console.log(id)
        console.log('adicionar')
        setIcone(id)
    }

    function controlSet (nome) {
        //const id = e.target.id
        //console.log(icone)

        if(icone){
            console.log('retirar')
            setIcone(false)
            setTimeout(function() {
                setar(nome);
            }, 300);
        } else {
            //console.log('ok')
            //console.log(nome)
            setIcone(nome)
        }
    }
    //console.log(e.target)

    if(e.target){
        console.log(1)
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
    } else {
        console.log(e.id)
        controlSet(e.id)
    }


    }

    export default {
        showMsg,
        showPaper,
        fadePaper
    }

