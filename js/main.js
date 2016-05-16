
$(function(){
 var fecha = new Date();

 var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles',
 			 'Jueves', 'Viernes', 'Sabado'];
 var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
 			 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

 var minutos=fecha.getMinutes()
 	if(minutos<10)
 		minutos="0"+minutos
 var horas=fecha.getHours()
 	if(horas<10)
 		horas="0"+horas

 $("#hora").html(horas+":"+minutos)
 $("#dia").html(semana[fecha.getDay()]+", ")
 $("#fecha").html(fecha.getDate()+" de "+meses[fecha.getMonth()])
  
 })