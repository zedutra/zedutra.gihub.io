function carregar() {
    var msg = window.document.getElementById('msg')
    var msg1 = window.document.getElementById('msg1')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora < 6 || hora > 17) {
        msg1.innerHTML = `Boa noite!`
        img.src = 'img/noite.jpeg'
        document.body.style.background = '#445461'
    }
    else if (hora < 13) {
        msg1.innerHTML = `Bom dia!`
        img.src = 'img/manha.jpeg'
        document.body.style.background = '#e2cd9f'
    }
    else {
        msg1.innerHTML = `Boa tarde!`
        img.src = 'img/tarde.jpeg'
        document.body.style.background = '#7B494F'
    }

}
