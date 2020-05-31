function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos.`
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade <= 10) {
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade <= 10) {
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
