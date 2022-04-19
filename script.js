// variavéis para setar a hora atual
var currentHour = new Date(); //Thu Mar 24 2022 14:59:05 GMT-0300 (Horário Padrão de Brasília)
var hour = currentHour.getHours(); //somente as horas
var minute = currentHour.getMinutes(); //somente os minutos
var second = currentHour.getSeconds(); // somente os segundos
var imagem = document.getElementById("img");
var sayHi = document.getElementById("greet");
var nome = "Bruno";
// console.log(nome)
if (hour <= 4) {
  //Dará uma mensagem diferente dependendo das horas
  imagem.setAttribute("src", "madrugada.webp"); //imagem alternada
  sayHi.innerText = `Boa madrugada, ${nome}!`; //Mensagem de saudação
  document.body.setAttribute(
    "style",
    "background: linear-gradient(45deg, black, #262626, #686868, #dfdcdb)"
  ); // gradiente que altera o css inline de <body>
} else if (hour < 12) {
  imagem.setAttribute("src", "manha.webp");
  sayHi.innerText = `Bom dia, ${nome}!`;
  document.body.setAttribute(
    "style",
    "background: linear-gradient(45deg, #153d56, #bcc34e )"
  );
} else if (hour <= 18) {
  imagem.setAttribute("src", "tarde.webp");
  document.body.setAttribute(
    "style",
    "background: linear-gradient(45deg, rgb(159 48 85), rgb(255 207 76))"
  );
  sayHi.innerText = `Boa tarde, ${nome}!`;
} else {
  imagem.setAttribute("src", "imagens/noite.webp");
  sayHi.innerText = `Boa noite, ${nome}!`;
  document.body.setAttribute(
    "style",
    "background: linear-gradient(45deg, #140f28, #382434, #ab634b )"
  );
}
function dWeek() {
  var dWeek = currentHour.getDay();
  var day = document.getElementById("clock");
  switch (dWeek) { // condicional complexo, onde aguarda o caso para cada opção do evento
    case 0:
      dWeek = "domingo";
      break;
    case 1:
      dWeek = "segunda-feira";
      break;
    case 2:
      dWeek = "terça-feira";
      break;
    case 3:
      dWeek = "quarta-feira";
      break;
    case 4:
      dWeek = "quinta-feira";
      break;
    case 5:
      dWeek = "sexta-feira";
      break;
    case 6:
      dWeek = "sábado";
      break;
    default:
      dWeek = "[Erro] Data Inválida!";
      break;
  }
  day.innerHTML = dWeek;
}
function clock() { // função que dará funcionalidade para o formato do relógio
  var currentHour = new Date();
  var hour = currentHour.getHours();
  var minute = currentHour.getMinutes();
  var second = currentHour.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var oClock = document.querySelector("#clock");
  oClock.innerText = `${hour}:${minute}:${second}`;
}
window.setInterval("clock()", 1000); //webp método para fazer com que a janela faça um intervalo de atualização em 1000 milisegundos(1 segundo)
