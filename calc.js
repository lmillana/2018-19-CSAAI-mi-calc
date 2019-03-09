// Variables para las operaciones:
var operando1;
var operando2;
var operacion;


function init(){
  // Variables - Números:
  var cero = document.getElementById("cero");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres= document.getElementById("tres");
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

  // Variable que devuelve el resultado:
  var display = document.getElementById("resultado");


  // Eventos - Números:
  cero.onclick = function(){
    display.innerHTML = display.innerHTML + "0";
  }
  uno.onclick = function(){
    display.innerHTML = display.innerHTML + "1";
  }
  dos.onclick = function(){
    display.innerHTML = display.innerHTML + "2";
  }
  tres.onclick = function(){
    display.innerHTML = display.innerHTML + "3";
  }
  cuatro.onclick = function(){
    display.innerHTML = display.innerHTML + "4";
  }
  cinco.onclick = function(){
    display.innerHTML = display.innerHTML + "5";
  }
  seis.onclick = function(){
    display.innerHTML = display.innerHTML + "6";
  }
  siete.onclick = function(){
    display.innerHTML = display.innerHTML + "7";
  }
  ocho.onclick = function(){
    display.innerHTML = display.innerHTML + "8";
  }
  nueve.onclick = function(){
    display.innerHTML = display.innerHTML + "9";
  }

  // Eventos - Operaciones:
  reset.onclick = function(){
    resetear();
  }
  suma.onclick = function(){
    operando1 = display.innerHTML;
    operacion = "+";
    clean();

  }
  resta.onclick = function(){
    operando1 = display.innerHTML;
    operacion = "-";
    clean();
  }
  mult.onclick = function(){
    operando1 = display.innerHTML;
    operacion = "*";
    clean();
  }
  division.onclick = function(){
    operando1 = display.innerHTML;
    operacion = "/";
    clean();
  }
  igual.onclick = function(){
    operando2 = display.innerHTML;
    resolver();
  }

  function clean(){
    display.innerHTML = "";
  }

  function resetear(){
    clean();
    operando1 = 0;
    operando2 = 0;
    operando = "";
  }

  function resolver (){
    var total= 0;
    switch (operacion) {
      case "+":
        total = parseFloat(operando1) + parseFloat(operando2);
        break;

      case "-":
        total = parseFloat(operando1) - parseFloat(operando2);
        break;

      case "*":
        total = parseFloat(operando1) * parseFloat(operando2);
        break;

      case "/":
        total = parseFloat(operando1) / parseFloat(operando2);
        break;
    }
    resetear();
    // -- Mostrar el resultado en el display:
    //display.textContent = total;
    display.innerHTML = total;
  }
}
