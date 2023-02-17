function carregar(){
  var saud = document.getElementById('saud')
  var img = document.getElementById('imagem')
  var msg = document.getElementById('texto')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if (hora <= 11 ){
    img.src = 'dia.jpg'
    saud.innerHTML = 'Bom Dia!'
    document.body.style.backgroundColor= '#f3cc59'
  } else if (hora <= 18){
    img.src = 'tarde.jpg'
    saud.innerHTML = 'Boa Tarde!'
    document.body.style.backgroundColor= '#e1b69d'
  } else {
    img.src = 'noite.jpg'
    saud.innerHTML = 'Boa Noite!'
    document.body.style.backgroundColor= '#517594'
  }
  

}