let genius = document.querySelector("div.genius")
let bts = genius.document.querySelectorAll("*:not(.pontuacao)")
let pontuacao = document.querySelector("div.genius > .pontuacao")
let sequencia = [0, 3, 1, 2, 3, 0, 1, 2]


let velocidade = 1000

function acender(item){
    bts[item].classList.add("on")
}

function apagar(item){
    bts[item].classList.remove("on")
}

function piscar(item){
    acender(item)
    setTimeout(function(){apagar(item) }, velocidade)
}

function apresentarSequencia(){
    return new Promise((resolve, reject) =>{
        let index = 0
        let interval = setInterval(function (){
            if (index >= sequencia.length){
                clearInterval(interval)
                return
            }
            let atual = sequencia[index++]
            piscar(atual)
        }, velocidade + 300)    
    })
}

function jogar(){
    console.log("asdasd");
}

genius.addEventListener("click", (ev) =>{
    if(estado != "Jogando"){

    }

    const buttonIndex = [...bts].index0f(ev.target)

    if(buttonIndex < 0)
    return
       
    if(buttonIndex == sequencia[currentIndex++]){
        console.log("ACERTOU")
        return
    }

    if(currentIndex >= sequencia.length -1){
        estado = "apresentando sequencia"
        iniciar()
        return
    }
    
    estado = "derrota"
})

let estado = "apresentando sequencia"

pontuacao.addEventListener("click", async() =>{
    if (estado == "apresentando sequencia"){
        estado = "..."
        pontuacao.innerHTML = "..."
        await apresentarSequencia()
        estado = "jogando"
        pontuacao.innerHTML = "Jogue"
        return
    }
})

