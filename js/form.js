function imprimirPagina(){
    window.print();
}function sumar(){
  var valor1 = Number(document.getElementById('niños').value);
  var valor2 = Number(document.getElementById('joven').value);
  var valor3 = Number(document.getElementById('hora').value);

  var total = valor1 + valor2 + valor3;

  document.getElementById('total').value = total;
}



const fecha = document.getElementById("fecha"),
servicio = document.getElementById("servicio")

function getCurrentDate () {
  const currentDate = new Date(),
  options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  fecha.innerHTML = currentDate.toLocaleDateString('es', options)
}

function getCurrentTime () {
  const currentDate = new Date(),
  hours = currentDate.getHours(),
  minutes = formatTime(currentDate.getMinutes()),
  seconds = formatTime(currentDate.getSeconds()),
  formatHours = formatTime(((hours + 11) % 12 + 1)),
  format = (hours < 12) || (hours == 24)  ? 'AM' : 'PM'
  servicio.innerHTML = `${formatHours}:${minutes}:${seconds} <small>${format}</small>`
  
}

function formatTime (value)  {
  return value < 10 ? `0${value}` : value
}

setInterval(getCurrentTime, 1000)

getCurrentDate()
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "573104866092";

  const cliente = document.querySelector("#niños").value;
  const joven = document.querySelector("#joven").value;
  const total = document.querySelector("#total").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;
  const servicio = document.querySelector("#servicio").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*Asistencia*%0A
		*Niños:*  
		${cliente}%0A
    *Jovenes:* 
		${joven}%0A
		*Adultos:* 
		${hora}%0A
    *Total:* 
		${total}%0A
		*Coodinador:* 
		${empleado}%0A
    *Fecha:* 
		${fecha}%0A
		*Servicio:* 
		${servicio}`;

  if (cliente === "" || fecha === "" || hora === "" || joven === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado`;



  window.open(url);
});


