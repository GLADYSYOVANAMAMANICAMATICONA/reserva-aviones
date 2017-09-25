

let pintar;
let arrayDeAsientos = [];
let celdas = $('td');
for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener('click', redirect, false);
}

function Pasajero(n, nombre, apellido, dni) {
  this.ndeasiento = n;
  this.nombrep = nombre;
  this.apellidop = apellido;
  this.dnip = dni


  $('#btnBuscarDni').click(buscarDni);
  $('#reservar').click(reservarAsientos);
  $('#cancelar').click(cancelar);
  $('#listar').click(listar);


  function redirect(event) {
    document.getElementById("mostrar").innerHTML = (event.target.textContent);
    pintar = event.target;
    let entero = parseInt(event.target.textContent);
    for (let i = 0; i < arrayDeAsientos.length; i++) {
      let almacenar = arrayDeAsientos[i].ndeasiento;
      if (entero == almacenar) {
        $("#nombre").val(arrayDeAsientos[i].nombrep);
        $("#apellido").val(arrayDeAsientos[i].apellidop);
        $("#dni").val(arrayDeAsientos[i].dnip);
      }
    }
  }

  function reservarAsientos() {
    n = $("#mostrar").text();
    console.log(n);
    nombre = $("#nombre").val();
    apellido = $("#apellido").val();
    dni = $("#dni").val();
    let reservadeasiento = new Pasajero(n, nombre, apellido, dni);
    arrayDeAsientos.push(reservadeasiento);
    pintar.style.backgroundColor = "blue";
    console.log(arrayDeAsientos)
    limpiar()
  }

  function listar() {
    let listartodo = "";
    $("#lista").empty(listartodo)
    for (let i = 0; i < arrayDeAsientos.length; i++) {
      listartodo += arrayDeAsientos[i].ndeasiento + "  Nombre: " +
        arrayDeAsientos[i].nombrep + " Apellido: " +
        arrayDeAsientos[i].apellidop + " DNI: " +
        arrayDeAsientos[i].dnip + "<br>";
    }
    console.log(listartodo)
    $("#lista").append(listartodo);
  }

  function buscarDni() {
    let buscarPorDni = $("#dni1").val();
    for (let i = 0; i < arrayDeAsientos.length; i++) {
      let dniexistente = arrayDeAsientos[i].dnip;
      if (buscarPorDni == dniexistente) {
        $("#nombre").val(arrayDeAsientos[i].nombrep);
        $("#apellido").val(arrayDeAsientos[i].apellidop);
        $("#dni").val(arrayDeAsientos[i].dnip);
      }
    }
    limpiar()
  }

  function limpiar() {
    $("#mostrar").val(" ");
    $("#nombre").val(" ");
    $("#apellido").val(" ");
    $("#dni").val(" ");
  }
}