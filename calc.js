// Variables para las operaciones:
var operando1;
var operando2;
var operacion;


function init(){
  // Variables - Números:
  var cero = document.getElementById("cero");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");

  // Variables - Operaciones:
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var mult = document.getElementById("mult");
  var division = document.getElementById("division");
  var igual = document.getElementById("igual");
  var reset = document.getElementById("reset");

  // Variable - Resultado:
  var resultado = document.getElementById("resultado");


  // Eventos - Números:
  cero.onclick = function(){
    resultado.textContent = resultado.textContent + "0";
  }
  uno.onclick = function(){
    resultado.textContent = resultado.textContent + "1";
  }
  dos.onclick = function(){
    resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick = function(){
    resultado.textContent = resultado.textContent + "3";
  }
  cuatro.onclick = function(){
    resultado.textContent = resultado.textContent + "4";
  }
  cinco.onclick = function(){
    resultado.textContent = resultado.textContent + "5";
  }
  seis.onclick = function(){
    resultado.textContent = resultado.textContent + "6";
  }
  siete.onclick = function(){
    resultado.textContent = resultado.textContent + "7";
  }
  ocho.onclick = function(){
    resultado.textContent = resultado.textContent + "8";
  }
  nueve.onclick = function(){
    resultado.textContent = resultado.textContent + "9";
  }

  // Eventos - Operaciones:
  reset.onclick = function(){
    resetear();
  }
  suma.onclick = function(){
    operando1 = resultado.textContent;
    operacion = "+";
    clean();

  }
  resta.onclick = function(){
    operando1 = resultado.textContent;
    operacion = "-";
    clean();
  }
  mult.onclick = function(){
    operando1 = resultado.textContent;
    operacion = "*";
    clean();
  }
  division.onclick = function(){
    operando1 = resultado.textContent;
    operacion = "/";
    clean();
  }
  igual.onclick = function(){
    operando2 = resultado.textContent;
    resolver();
  }

  function clean(){
    resultado.textContent = "";
  }

  function resetear(){
    clean();
    operando1 = 0;
    operando2 = 0;
    operando = "";
  }

  function resolver (){
    var res = 0;
    switch (operacion) {
      case "+":
        res = parseFloat(operando1) + parseFloat(operando2);
        break;

      case "-":
        res = parseFloat(operando1) - parseFloat(operando2);
        break;

      case "*":
        res = parseFloat(operando1) * parseFloat(operando2);
        break;

      case "/":
        res = parseFloat(operando1) / parseFloat(operando2);
        break;
    }
    resetear();
    resultado.textContent = res;
  }



}
