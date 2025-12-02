function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id','foto')
          
        if(fsex[0].checked) { //.checked é a opção da marcação no input radio. ele checa essa marcação
            genero = "Homem"
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','baby-male.jpg')
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src','young-male.jpg')
            } else if (idade< 50) {
                //adulto
                img.setAttribute('src','adult-homem.jpg')
            } else{
                //idoso
                img.setAttribute('src','elder-male.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
             if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','baby-female.jpg')
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src','young-female.jpg')
            } else if (idade< 50) {
                //adulto
                img.setAttribute('src','adult-fem.jpg')
            } else{
                //idoso
                img.setAttribute('src','elder-female.jpg')
            }
        }
        res.style.textAlign = 'center',
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // appendChild ele adiciona em baixo do último
    }
}