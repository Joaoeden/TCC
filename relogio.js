function info() {
let meses = new Array('jan','fev','mar','abr','mai','jun','jul','ago','set', 'out', 'nov', 'dez')
let semana = new Array ('Dom', 'seg','ter','Qua','Qui','sex','sab')
let agora = new Date 
let saida = document.getElementById('saida')
let dia = agora.getDate()
let mes = agora.getMonth()
let ano = agora.getFullYear()
let sem = agora.getDay()
let hora = agora.getHours()
let min = agora.getMinutes()
let seg = agora.getSeconds()
saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
saida.innerHTML += `<p>mes: <mark>${meses[mes]}</mark></p>`
saida.innerHTMl += `<p>ano: <mark>${ano}</mark></p>`
saida.innerHTML += `<p>dia da semana: <mark>${semana[sem]}</mark></p>`
saida.innerHTML += `<p>hora: <mark>${hora}</mark></p>`
saida.innerHTML += `<p>minutos: <mark>${min}</mark></p>`
saida.innerHTML += `<p>segundos: <mark>${seg}</mark></p>`



}