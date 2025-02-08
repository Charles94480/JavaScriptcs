let hora = 20
console.log(`Agora sao exatamente ${hora} horas`)

if (hora > 6 && hora< 12){
    console.log (`São ${hora} horas, esta de manha`)
}else if (hora >= 12 && hora < 18){
    console.log(`São ${hora} horas esta de tarde`)
}else{
    console.log(`sao ${hora} esta de noite`)
}
