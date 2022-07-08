const nome = "Bruno";

function time() {
  //para setar a hora atual
  const date = new Date(); //Thu Mar 24 2022 14:59:05 GMT-0300 (Horário Padrão de Brasília)
  const time = {
    hour: date.getHours(), //somente as horas
    minute: date.getMinutes(), //somente os
    second: date.getSeconds(), // somente os segundos
    week: date.getDay(),
  };

  greetingAndBackground(time.hour);
  clock(time);

  return time;
}

function week(day) {
  switch ( day.week ) { // condicional complexo, onde aguarda o caso para cada opção do evento
    case 0:
      day = "domingo";
      break;
    case 1:
      day = "segunda-feira";
      break;
    case 2:
      day = "terça-feira";
      break;
    case 3:
      day = "quarta-feira";
      break;
    case 4:
      day = "quinta-feira";
      break;
    case 5:
      day = "sexta-feira";
      break;
    case 6:
      day = "sábado";
      break;
    default:
      day = "[Erro] Data Inválida!";
      break;
  }
  document.getElementById("clock").innerHTML = day;
}

function greetingAndBackground(hour) {
  const sayHi = document.getElementById("greet");
  const imagem = document.getElementById("img");
  const body = document.body;
  switch ( true ) {
    case hour <= 4:
      imagem.setAttribute("src", "imagens/madrugada.webp"); //imagem alternada
      sayHi.innerText = `Boa madrugada, ${nome}!`; //Mensagem de saudação
      body.setAttribute(
        "style",
        "background: linear-gradient(45deg, black, #262626, #686868, #dfdcdb)"
      ); // gradiente que altera o css inline de <body>
      break;
    case hour <= 12:
      imagem.setAttribute("src", "imagens/manha.webp");
      sayHi.innerText = `Bom dia, ${nome}!`;
      body.setAttribute(
        "style",
        "background: linear-gradient(45deg, #153d56, #bcc34e )"
      );
      break;
    case hour <= 18:
      sayHi.innerText = `Boa tarde, ${nome}!`;
      imagem.setAttribute("src", "imagens/tarde.webp");
      body.setAttribute(
        "style",
        "background: linear-gradient(45deg, rgb(159 48 85), rgb(255 207 76))"
      );
      break;
    default:
      imagem.setAttribute("src", "imagens/noite.webp");
      sayHi.innerText = `Boa noite, ${nome}!`;
      document.body.setAttribute(
        "style",
        "background: linear-gradient(45deg, #140f28, #382434, #ab634b )"
      );
      break;
  }
}

function clock(time) {
  // função que dará funcionalidade para o formato do relógio
  if (time.hour < 10) {
    time.hour = "0" + time.hour;
  }
  if (time.minute < 10) {
    time.minute = "0" + time.minute;
  }
  if (time.second < 10) {
    time.second = "0" + time.second;
  }
  const oClock = document.querySelector("#clock");
  oClock.innerText = `${time.hour}:${time.minute}:${time.second}`;
  console.log();
}

const start = () => setInterval("time()", 1000); // método para fazer com que a janela faça um intervalo de atualização em 1000 milisegundos(1 segundo)
