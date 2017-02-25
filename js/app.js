var calculadora = (function(){

var anterior=document.getElementsByClassName("displaye");
var longitud = 8;
var i = "";
var memoria ="";
var pantalla = "0";
var punto = "";
var puntoUsado = "NO";
var pantAnt = "";
var operacion = "";
var cadena0 = "0";
var cadena1 = "0";
var cadena2 = "0";

return {
  sumar: function (){
    if(operacion == ""){
      memoria = anterior[0].innerHTML
      cadena0=memoria
      operacion = "+"
      cadena1 = operacion
      anterior[0].innerHTML = ""
      pantalla = ""
      puntoUsado = "NO"
    }
    return
  },

  restar: function(){
    if(operacion == ""){
      memoria = anterior[0].innerHTML
      cadena0=memoria
      operacion = "-"
      cadena1 = operacion
      anterior[0].innerHTML = ""
      pantalla = ""
      puntoUsado = "NO"
    }
    return
  },

  multiplicar: function(){
    if(operacion == ""){
      memoria = anterior[0].innerHTML
      cadena0=memoria
      operacion = "*"
      cadena1 = operacion
      anterior[0].innerHTML = ""
      pantalla = ""
      puntoUsado = "NO"
    }
    return
  },

  dividir: function(){
    if(operacion == ""){
      memoria = anterior[0].innerHTML
      cadena0=memoria
      operacion = "/"
      cadena1 = operacion
      anterior[0].innerHTML = ""
      pantalla = ""
      puntoUsado = "NO"
    }
    return
  },

  igual2: function (){
    if (pantAnt == "") {
      pantAnt = pantalla
    }
    if (cadena1 == "+") {
      anterior[0].innerHTML = parseFloat(memoria)+parseFloat(pantalla)
      pantalla = parseFloat(memoria)+parseFloat(pantalla)
    }else if (cadena1 == "-") {
      anterior[0].innerHTML = parseFloat(memoria)-parseFloat(pantalla)
      pantalla = parseFloat(memoria)-parseFloat(pantalla)
    }else if (cadena1 == "*") {
      anterior[0].innerHTML = parseFloat(memoria)*parseFloat(pantalla)
      pantalla = parseFloat(memoria)*parseFloat(pantalla)
    }else if (cadena1 == "/") {
      anterior[0].innerHTML = parseFloat(memoria)/parseFloat(pantalla)
      pantalla = parseFloat(memoria)/parseFloat(pantalla)
    }

    if (anterior[0].innerHTML.length > 8){
      anterior[0].innerHTML = anterior[0].innerHTML.substr (0,8)
      pantalla = anterior[0].innerHTML
    }
    memoria = pantAnt
    puntoUsado = "NO"
    operacion = ""
    cadena0 = pantalla
    return
  },

  //Numero
  ingnum: function (x) {
    var caracteres = anterior[0].textContent.length;
    if (caracteres<longitud) {
      if (anterior[0].textContent!="0") {
        anterior[0].innerHTML +=x;
        pantalla = anterior[0].innerHTML
      }else {
        anterior[0].innerHTML =x;
        pantalla = anterior[0].innerHTML
      }
    }
    return
  },
  mouseDown: function (i) {
      var cambiartamano = document.getElementsByClassName("tecla")
      cambiartamano[i].style.padding = "3px"
      return
  },

  mouseUp: function (i) {
    var cambiartamano = document.getElementsByClassName("tecla")
    cambiartamano[i].style.padding = "1px"
    return
  },

  punto2: function () {
    if (puntoUsado == "NO"){
      anterior[0].innerHTML = anterior[0].innerHTML+"."
      pantalla = pantalla+"."
      puntoUsado = "SI"
      return
    }
  },

  cambiarsigno:function (){
    if (anterior[0].textContent!="0") {
      anterior[0].innerHTML= -parseFloat(anterior[0].innerHTML);
      pantalla = -parseFloat(anterior[0].innerHTML)
    }
    return
  },

  limpiar: function (){
    anterior[0].innerHTML= "0";
    memoria ="";
    pantalla = "0";
    punto = "";
    puntoUsado = "NO";
    pantAnt = "";
    operacion = "";
    cadena0 = "0";
    cadena1 = "0";
    cadena2 = "0";
    return
  },

}


})();
