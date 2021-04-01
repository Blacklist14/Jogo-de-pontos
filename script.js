var startVida = document.querySelector(".vida")
var vidaV = 100
var esp = 0
startVida.innerHTML = (vidaV)
function start(){
    var startF = document.querySelector(".start")
    var falaS = document.querySelector(".fala-sans")
    var next = document.querySelector(".next")
    var i = 0

    if(i>=0){
        next.style.display = 'inline'
        startF.style.display = "none"
        falaS.style.display = "inline"
        falaS.innerHTML = ("Sans: Ei, você viu Papyrus??...")
        i++
    }
    
}
var n = 0

function next(){
    var start = document.querySelector(".habilidades")
    var startDano = document.querySelector(".dano")
    var startVida = document.querySelector(".vida")
    var falaS = document.querySelector(".fala-sans")
    var falaP = document.querySelector(".fala-panda")
    var next = document.querySelector(".next")
    if( n <= 0){
        falaS.style.display = "none"
        falaP.style.display = "inline"
        falaP.innerHTML = ("Panda: Nunca nem vi...")
      n++
      return n
    }
    if(n===1){
        falaP.style.display = "none"
        falaS.style.display = "inline"
        falaS.innerHTML = ("Sans: Pera, você não e o filho daquele ladrão chamado Smzinho??")
        n++
        console.log(n)
        return n
        
    }
    if(n===2){
        falaS.style.display = "none"
        falaP.style.display = "inline"
        falaP.innerHTML = ("Panda: AGORA SOU EU E VOCÊ MEU GOSTOSO!!")
        n++
        return n
    }
    if(n===3){
        falaP.style.display = "none"
        falaS.style.display = "inline"
        falaS.innerHTML = ("Sans: E o cadeiru da minguiun!!")
        n++
        return n
    }
    if(n===4){
        falaP.style.display = "none"
        falaS.style.display = "none"
        next.style.display = "none"
        start.style.display = "inline"
        startDano.style.display = "inline"
        startVida.style.display = "inline"
        n++
        return n
    }
} 

function dano1(){
    var falaS = document.querySelector(".fala-sans")
    var startVida = document.querySelector(".vida")
    var dano = 5
    var soma = vidaV - dano
    falaS.style.display= "inline"
    falaS.innerHTML=("Sans: Abrece sua mãe mermão, me solte garai ;-;!!")
    vidaV = soma
    startVida.innerHTML = (soma)
        if(vidaV < 30){
            falaS.innerHTML=("Sans: Tu e carente né?")
        }
        if(vidaV < 20){
            falaS.innerHTML=("*Sans pega merthiolate e se cura*")
            (vidaV= soma * 20)
        }
    esp++
}
function dano2(){
    var falaS = document.querySelector(".fala-sans")
    var startVida = document.querySelector(".vida")
    var dano = 7
    var soma = vidaV - dano
    falaS.style.display= "inline"
    falaS.innerHTML=("Sans: O ZORO SOLA")
    startVida.innerHTML = (soma)
    vidaV = soma
    if(vidaV <70){
        falaS.innerHTML=("Sans: Sai dae seu 3 espadas '-'")
    }
    if(vidaV <50){
        falaS.innerHTML=("Sans: Jogador de lol me da medo")
    }
    esp++
    if(vidaV < 20){
        falaS.innerHTML=("*Sans pega merthiolate e se cura*")
        vidaV= soma * 20
    }
}
function dano3(){
    var falaS = document.querySelector(".fala-sans")
    var startVida = document.querySelector(".vida")
    var dano = 5
    var soma = vidaV - dano
    falaS.style.display= "inline"
    falaS.innerHTML=("*Sans leva bambuzada PUCK*")
    if(vidaV < 20){
        falaS.innerHTML=("*Sans come o bambu e se cura*")
        vidaV= soma * 20
    }
    startVida.innerHTML = (soma)
    vidaV = soma
    esp++
}
function dano4(){
    var falaS = document.querySelector(".fala-sans")
    var startVida = document.querySelector(".vida")
    var dano = 10
    var soma = vidaV - dano
    falaS.style.display= "inline"
    falaS.innerHTML=("Sans: Chama não, e pegadinha alek ;-;")
    startVida.innerHTML = (soma)
    vidaV = soma
    if(vidaV <=0){
        falaS.innerHTML=("Tio san mata você em vez do sans.")
        vidaV= 100
    }
    esp++
}
function dano5(){
    var falaS = document.querySelector(".fala-sans")
    
    var startVida = document.querySelector(".vida")
    var dano = 10
    var soma = vidaV - dano
    falaS.style.display= "inline"
    falaS.innerHTML=("Sans: Bolinha de gorfe KKKKK")
    vidaV = soma
    if(vidaV < 20){
        falaS.innerHTML=("Sans pega merthiolate e se cura*")
        vidaV= soma * 15
    }
    startVida.innerHTML = (soma)
    esp++
}
function dano6(){
    var falaS = document.querySelector(".fala-sans")
    var startVida = document.querySelector(".vida")
    var start = document.querySelector(".habilidades")
    var startDano = document.querySelector(".dano")
    var startVida = document.querySelector(".vida")
    var dano = 25
    falaS.style.display= "inline"

        if(esp <= 10){falaS.innerHTML=(`Sans: Trapaça não, você só tem ${esp} rusbé !!`)}
    startVida.innerHTML = (vidaV)
        if( esp === 11){
            var soma = vidaV - dano
            vidaV = soma
            falaS.innerHTML=("Sans: Cuspé '-'?")
        }
        if(esp === 11 || vidaV < 50){
            var soma = vidaV - dano
            vidaV = soma
        falaS.innerHTML=("Sans: Ta me fazendo mexer o esqueleto KKK")}
        if(vidaV <= 0){
            falaS.innerHTML =("Sans: Estou me sentindo frio, acho que estou morrendo...piada, eu já estou morto '-'")
            start.style.display = "none"
            startDano.style.display = "none"
            startVida.style.display = "none"
        }
}
