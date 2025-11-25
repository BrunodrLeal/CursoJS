var hora = new Date()
//var minutos = new Date()
//var segundos = new Date()
var  tempo = hora.getHours()//+minutos.getMinutes()+segundos.getSeconds()
console.log(`Agora são exatamente ${hora}`)//:${minutos}:${segundos}`)//
if (tempo < 12){
    console.log('Bom dia!')
} else if ( tempo <= 18 ) {
    console.log('Boa tarde!')
} else {
    console.log("boa Noite!")
}