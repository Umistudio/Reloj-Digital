
$(function(){

var mostrarHora=function(){
//Hora local 
 var fecha = new Date();

 var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles',
 			 'Jueves', 'Viernes', 'Sabado'];
 var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
 			 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

 var segundos=fecha.getSeconds()
 	if(segundos<10)
 		segundos="0"+segundos
 var minutos=fecha.getMinutes()
 	if(minutos<10)
 		minutos="0"+minutos
 var horas=fecha.getHours()
 	if(horas<10)
 		horas="0"+horas

 $("#hora").html(horas+":"+minutos+":"+segundos)
 $("#dia").html(semana[fecha.getDay()]+", ")
 $("#fecha").html(fecha.getDate()+" de "+meses[fecha.getMonth()])
  
 //Hora Regiones

 var regiones=[{region:"México DC",
				diferencia:0},
			   {region:"Sao Paulo",
				diferencia:2},
			   {region:"Washington DC",
				diferencia:-1},
			   {region:"Madrid",
				diferencia:7}]

	if($("#mexico-dc").checked)
		$("#otros").html("hola")
	}

	mostrarHora();
	var intervalo = setInterval(mostrarHora, 1000);
 })