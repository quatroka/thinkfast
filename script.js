var v1;
var v2;
var pontos;
var erros;
var segundos = 3; //3segundos


$(document).ready(function() {
  erros = 0;
  pontos = 0;
  v1 = 0;
  v2 = 0;
  t = 0;
  gerar();
});


function getRandom(max) {
  return Math.floor(Math.random() * max + 1);
}


function gerar(){
  v1 = getRandom(99);
  v2 = getRandom(99);
  t = v1+v2;
  $("#valor1").text(v1);
  $("#valor2").text(v2);
}


$(document).keypress(function(e) {
  if(e.which == 13) {
    if ($("#total").val() == (t)) {
      pontos = pontos+1;
      $("#acertos p span").text(pontos);
      gerar();
    }
    else {
      erros = erros+1;
      $("#erros p span").text(erros);
      gerar();
    }
    $('#total').val('');
    time(1);
  }
});


function acaboTempo(){
  pontos = pontos - 1;
  $("#acertos p span").text(pontos);
  $("#total").val('');
  gerar();
}


var tempo = setInterval(function(){acaboTempo()}, segundos * 1000)
function time(n) {
  if (n != 0) {
    clearInterval(tempo);
    tempo = setInterval(function(){acaboTempo()}, segundos * 1000)
  }
}
