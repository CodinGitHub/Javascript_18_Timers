let mostarReloj = document.getElementById('reloj');
let mostraFecha = document.getElementById('fecha');

let fecha = new Date();

let diaSemana = ['Domingo','Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'];

let mesAnyo = ['Enero','Febrero', 'Marzo','abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

mostraFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;


setInterval(()=>{
  let hora = new Date();
  mostarReloj.innerHTML = hora.toLocaleTimeString();
},1000)