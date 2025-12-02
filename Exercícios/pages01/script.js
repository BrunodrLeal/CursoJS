function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    // bom dia.
    img.src = "dia.png"
    document.body.style.background = "#6B9FBF"
    ;
}else if (hora>12 && hora < 18) {
    img.src = "tarde.png"
   document.body.style.background = "#F2B366"
} else{
    img.src = "noite.png"
    document.body.style.background = "#022340"
}
}

