var botao = document.querySelector('.button-center')
var roleta = document.querySelector('.roleta')
var number = Math.ceil(Math.random() * 1000)

botao.onclick = function() {

    roleta.style.transform = "rotate(" + number + "deg)"
    number += Math.ceil(Math.random() * 1000)

}
