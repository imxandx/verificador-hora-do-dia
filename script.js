function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = './assets/manha.jpg'
        document.body.style.background = '#DAA520'
        // BOM DIA
    }else if(hora >= 12 && hora < 18) {
        img.src = './assets/tarde.jpg'
        document.body.style.background = '#87CEEB'
        // BOA TARDE
    }else {
        img.src = './assets/noite.jpg'
        document.body.style.background = '#9370DB'
        // BOA NOITE
    }
}