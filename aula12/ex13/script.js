
function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem1')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML =`Agora são ${hora} horas e ${minuto} minutos`

if (hora >= 18 && hora < 6){
    img.src="imagens/noite.jpg"
    document.body.style.background = "#000000"
} else if (hora <= 6 && hora >=12){
   img.src="imagens/manha.jpg"
   document.body.style.background = "#86d7f1a1"

}else{
   img.src="imagens/tarde.jpg"
   document.body.style.background = "#fa426abb"
}

}